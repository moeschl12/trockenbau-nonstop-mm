#!/bin/bash
# ============================================================
# HANDWERK V2 – DEPLOYMENT SCRIPT
# Verwendung: bash deploy.sh kunde-01-maler-berlin
# ============================================================

GREEN='\033[0;32m'
GOLD='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m'

CUSTOMER_NAME=$1
V2_TEMPLATE="/storage/emulated/0/handwerk/handwerk-v2"
CUSTOMERS_DIR="/storage/emulated/0/handwerk/handwerk-v2-customers"
CONFIGS_DIR="/storage/emulated/0/handwerk/handwerk-v2-configs"
GITHUB_USER="moeschl12"

if [ -z "$CUSTOMER_NAME" ]; then
  echo -e "${GOLD}Verwendung: bash deploy.sh <kundenname>${NC}"
  echo "Beispiel:   bash deploy.sh kunde-01-maler-berlin"
  exit 1
fi

echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}  🚀 DEPLOYMENT: $CUSTOMER_NAME${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""

# ── 1. Config finden ─────────────────────────────────────────
echo -e "${GOLD}[1/6] Suche Config...${NC}"
CONFIG_FILE=$(find "$CONFIGS_DIR" -name "siteConfig.ts" -path "*$CUSTOMER_NAME*" 2>/dev/null | head -1)
if [ -z "$CONFIG_FILE" ]; then
  echo -e "${RED}❌ Keine Config gefunden für: $CUSTOMER_NAME${NC}"
  ls "$CONFIGS_DIR"
  exit 1
fi
COMPANY=$(grep 'companyName' "$CONFIG_FILE" | head -1 | grep -o '"[^"]*"' | tail -1 | tr -d '"')
echo -e "${GREEN}✅ Config gefunden: $COMPANY${NC}"

# ── 2. Projekt kopieren ──────────────────────────────────────
echo -e "${GOLD}[2/6] Erstelle Kunden-Projekt...${NC}"
CUSTOMER_DIR="$CUSTOMERS_DIR/$CUSTOMER_NAME"
if [ -d "$CUSTOMER_DIR" ]; then
  echo -e "${GOLD}⚠️  Kunde existiert bereits – überspringe${NC}"
else
  mkdir -p "$CUSTOMERS_DIR"
  cp -r "$V2_TEMPLATE" "$CUSTOMER_DIR"
  rm -rf "$CUSTOMER_DIR/.git"
  rm -rf "$CUSTOMER_DIR/node_modules"
  rm -f "$CUSTOMER_DIR/.env.local"
  echo -e "${GREEN}✅ Projekt erstellt${NC}"
fi

# ── 3. Config einkopieren ────────────────────────────────────
echo -e "${GOLD}[3/6] Kopiere siteConfig...${NC}"
cp -f "$CONFIG_FILE" "$CUSTOMER_DIR/config/siteConfig.ts"
echo -e "${GREEN}✅ Config eingefügt: $COMPANY${NC}"

# ── 4. .env.local kopieren ───────────────────────────────────
echo -e "${GOLD}[4/6] Umgebungsvariablen...${NC}"
if [ -f "$V2_TEMPLATE/.env.local" ]; then
  cp "$V2_TEMPLATE/.env.local" "$CUSTOMER_DIR/.env.local"
  echo -e "${GREEN}✅ .env.local kopiert${NC}"
else
  echo -e "${RED}❌ Keine .env.local gefunden!${NC}"
  exit 1
fi

# ── 5. Git & GitHub ──────────────────────────────────────────
echo -e "${GOLD}[5/6] Git & GitHub...${NC}"
cd "$CUSTOMER_DIR"

# Safe directory für /storage/emulated Pfade
git config --global --add safe.directory "$CUSTOMER_DIR"

npm install --legacy-peer-deps --silent
git init -b main
git add .
git commit -m "Initial: $CUSTOMER_NAME – $COMPANY"
gh repo create "$GITHUB_USER/$CUSTOMER_NAME" \
  --public \
  --source=. \
  --remote=origin \
  --push
echo -e "${GREEN}✅ GitHub: https://github.com/$GITHUB_USER/$CUSTOMER_NAME${NC}"

# ── 6. Vercel deployen ───────────────────────────────────────
echo -e "${GOLD}[6/6] Vercel Deployment...${NC}"

RESEND_KEY=$(grep "^RESEND_API_KEY=" "$V2_TEMPLATE/.env.local" | cut -d '=' -f2-)

vercel --yes --prod
echo "$RESEND_KEY" | vercel env add RESEND_API_KEY production --force 2>/dev/null || true
vercel --prod

echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}  🎉 FERTIG! $CUSTOMER_NAME ist live!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "📁 GitHub : https://github.com/$GITHUB_USER/$CUSTOMER_NAME"
echo -e "🌐 Vercel  : https://$CUSTOMER_NAME.vercel.app"
echo ""
echo -e "${GOLD}Nächste Schritte:${NC}"
echo -e "→ Domain   : vercel.com/$GITHUB_USER/$CUSTOMER_NAME/settings/domains"
echo -e "→ Search   : search.google.com/search-console"
echo -e "→ Business : business.google.com"
echo ""
