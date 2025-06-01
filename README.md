
# Trelowen AI - Comprehensive OpenAI-Powered Solution

A sophisticated AI-powered chatbot and lead management system for Trelowen Lodges, featuring advanced OpenAI integration, GoHighLevel (GHL) connectivity, and multi-channel communication support.

## 🚀 Features

### Core AI Capabilities
- **Advanced OpenAI Assistant** - GPT-4 powered conversations with Trelowen-specific knowledge
- **RAG (Retrieval Augmented Generation)** - Context-aware responses using embedded knowledge base
- **Lead Intelligence** - Automatic lead qualification and scoring
- **Investment Calculator** - AI-powered ROI calculations and scenarios

### GHL Integration
- **Webhook Endpoints** - Seamless integration with GoHighLevel workflows
- **Custom Field Updates** - Automatic lead data enrichment
- **Task Creation** - Automated follow-up scheduling
- **Opportunity Management** - Lead progression tracking

### Multi-Channel Support
- **Website Chat** - REST API for web integration
- **SMS Integration** - Twilio-powered SMS conversations
- **Facebook Messenger** - Native FB Messenger support
- **Email Responses** - Automated email generation and sending

### Smart Features
- **Lead Qualification** - Automatic budget, interest, and stage detection
- **Follow-up Automation** - Intelligent scheduling based on lead quality
- **Investment Scenarios** - Multiple ROI calculation scenarios
- **Personalized Responses** - Context-aware, tailored communications

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key
- GoHighLevel account and API access
- Optional: Twilio account (for SMS)
- Optional: Facebook Developer account (for Messenger)

## 🛠️ Installation

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd trelowen-ai
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your credentials:
   ```env
   # Required
   OPENAI_API_KEY=your_openai_api_key_here
   
   # GHL Integration
   GHL_API_KEY=your_ghl_api_key_here
   GHL_LOCATION_ID=your_ghl_location_id_here
   GHL_WEBHOOK_SECRET=your_webhook_secret_here
   
   # Optional: SMS Support
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   
   # Optional: Facebook Messenger
   FB_PAGE_ACCESS_TOKEN=your_fb_page_access_token
   FB_VERIFY_TOKEN=your_fb_verify_token
   FB_APP_SECRET=your_fb_app_secret
   
   # Optional: Email Support
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

3. **Build Knowledge Base**
   ```bash
   npm run build-kb
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t trelowen-ai .
docker run -p 3000:3000 --env-file .env trelowen-ai
```

### Production Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📡 API Endpoints

### Chat API
```http
POST /api/chat
Content-Type: application/json

{
  "message": "Tell me about Trelowen Lodges",
  "conversation_id": "optional_conversation_id",
  "user_info": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+44123456789"
  },
  "history": [
    {
      "role": "user",
      "content": "Previous message",
      "timestamp": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### Investment Calculator
```http
POST /api/investment/calculate
Content-Type: application/json

{
  "lodgePrice": 425000,
  "lodgeType": "2-bedroom",
  "useSubletService": true,
  "personalUseDays": 14,
  "expectedOccupancy": 65
}
```

### Lead Qualification
```http
POST /api/chat/qualify-lead
Content-Type: application/json

{
  "conversation_history": [
    {
      "role": "user",
      "content": "I'm interested in a £400k investment property",
      "timestamp": "2024-01-01T00:00:00Z"
    }
  ],
  "user_info": {
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
}
```

## 🔗 GHL Integration Setup

1. **Create Webhook in GHL**
   - Go to Settings > Integrations > Webhooks
   - Add webhook URL: `https://your-domain.com/api/ghl-webhook/incoming`
   - Select events: Contact Create, Inbound Message, Form Submission
   - Set webhook secret in your `.env` file

2. **Configure Custom Fields**
   Create these custom fields in GHL:
   - `budget_range` (Dropdown)
   - `interest_type` (Dropdown) 
   - `customer_stage` (Dropdown)
   - `urgency_level` (Dropdown)
   - `qualification_score` (Number)

3. **Set Up Workflows**
   - Create workflows that trigger the webhook
   - Configure automatic responses and follow-ups

## 📱 Multi-Channel Setup

### SMS (Twilio)
1. Get Twilio credentials from console.twilio.com
2. Configure webhook URL in Twilio: `https://your-domain.com/api/sms/webhook`
3. Add credentials to `.env` file

### Facebook Messenger
1. Create Facebook App and Page
2. Set up webhook: `https://your-domain.com/api/fb-messenger/webhook`
3. Add tokens to `.env` file

### Email Integration
1. Configure SMTP settings (Gmail recommended)
2. Use app-specific passwords for Gmail
3. Test with `/api/email/send-response` endpoint

## 🧠 AI Features

### Lead Intelligence
The system automatically analyzes conversations to extract:
- **Budget Range**: £275k-£1M+ categorization
- **Interest Type**: Investment vs personal use focus
- **Customer Stage**: From inquiry to ready-to-purchase
- **Urgency Level**: Timeline for decision making

### Investment Calculator
Provides detailed ROI analysis including:
- Annual revenue projections
- Operating cost calculations
- Net income and ROI percentages
- Multi-year projections
- Scenario comparisons

### Smart Follow-ups
Automatically schedules follow-ups based on:
- Lead qualification score
- Interaction type and recency
- Customer stage and urgency
- Previous engagement history

## 🔧 Configuration

### OpenAI Models
- **Chat**: `gpt-4-turbo-preview` (configurable)
- **Embeddings**: `text-embedding-3-small` (configurable)

### Rate Limiting
- 100 requests per 15 minutes per IP
- Configurable in `src/index.ts`

### Logging
- Winston-based logging
- Logs stored in `logs/` directory
- Configurable log levels

## 🛡️ Security

- Webhook signature verification
- Rate limiting on all endpoints
- Helmet.js security headers
- Environment variable validation
- Input sanitization

## 📊 Monitoring

### Health Check
```http
GET /api/health
```

### Logs
- Application logs: `logs/combined.log`
- Error logs: `logs/error.log`
- Console output in development

## 🤝 Support

For technical support or questions:
- Check the logs for error details
- Verify environment variables are set correctly
- Ensure OpenAI API key has sufficient quota
- Test individual endpoints with curl or Postman

## 📝 License

This project is proprietary software for Trelowen Lodges.

---

**Note**: This system requires active OpenAI API credits. Monitor your usage and billing in the OpenAI dashboard. The system includes fallback mechanisms for when API quotas are exceeded.
