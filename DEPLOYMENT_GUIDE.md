
# Trelowen AI - Production Deployment Guide

## Hosting Platform: Render.com

### Why Render?
- ✅ Free tier with automatic SSL
- ✅ Easy GitHub integration
- ✅ Automatic deployments
- ✅ Built-in health checks
- ✅ Custom domain support
- ✅ Environment variable management

## Deployment Steps

### 1. Create Render Account
1. Go to https://render.com
2. Sign up with GitHub account
3. Connect your GitHub repository

### 2. Deploy from GitHub
1. Click "New +" → "Web Service"
2. Connect your GitHub repository containing this code
3. Configure the service:
   - **Name**: trelowen-ai
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### 3. Environment Variables
Add these environment variables in Render dashboard:

```
NODE_ENV=production
PORT=10000
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview
OPENAI_EMBEDDING_MODEL=text-embedding-3-small
GHL_API_KEY=your_ghl_api_key_here
GHL_LOCATION_ID=your_ghl_location_id_here
GHL_WEBHOOK_SECRET=your_webhook_secret_here
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
FB_PAGE_ACCESS_TOKEN=your_fb_page_access_token
FB_VERIFY_TOKEN=your_fb_verify_token
FB_APP_SECRET=your_fb_app_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
JWT_SECRET=trelowen_jwt_secret_production_2024
WEBHOOK_SECRET=trelowen_webhook_secret_production_2024
```

### 4. Custom Domain (Optional)
1. In Render dashboard, go to Settings → Custom Domains
2. Add your domain (e.g., api.trelowen.com)
3. Update DNS records as instructed
4. SSL certificate will be automatically provisioned

## Your Production URL
After deployment, your API will be available at:
`https://trelowen-ai-[random-string].onrender.com`

## Health Check
Verify deployment: `https://your-app-url.onrender.com/api/health`

## Alternative: Manual Deployment via CLI

If you prefer CLI deployment:

```bash
# Install Render CLI
npm install -g @render/cli

# Deploy
render deploy
```

