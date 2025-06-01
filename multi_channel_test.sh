#!/bin/bash

echo "=== Trelowen AI System Multi-Channel Test ==="
echo "Testing all endpoints and integrations..."
echo ""

# Test 1: Health Check
echo "1. Testing Health Check..."
curl -s -X GET http://localhost:3002/api/health
echo ""
echo ""

# Test 2: Chat Endpoint
echo "2. Testing Chat Endpoint..."
curl -s -X POST http://localhost:3002/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are the benefits of investing in Trelowen lodges?"}'
echo ""
echo ""

# Test 3: Investment Calculator
echo "3. Testing Investment Calculator..."
curl -s -X POST http://localhost:3002/api/investment/calculate \
  -H "Content-Type: application/json" \
  -d '{"lodgePrice": 450000, "lodgeType": "standard"}'
echo ""
echo ""

# Test 4: SMS Webhook (simulated)
echo "4. Testing SMS Webhook..."
curl -s -X POST http://localhost:3002/api/sms/webhook \
  -H "Content-Type: application/json" \
  -d '{"From": "+447123456789", "Body": "Hi, I want to know about investment opportunities at Trelowen"}'
echo ""
echo ""

# Test 5: Email Webhook (simulated)
echo "5. Testing Email Webhook..."
curl -s -X POST http://localhost:3002/api/email/webhook \
  -H "Content-Type: application/json" \
  -d '{"from": "investor@example.com", "subject": "Investment Inquiry", "text": "I am interested in purchasing a lodge at Trelowen"}'
echo ""
echo ""

# Test 6: GHL Webhook
echo "6. Testing GHL Webhook..."
curl -s -X POST http://localhost:3002/api/ghl-webhook \
  -H "Content-Type: application/json" \
  -d '{"type": "ContactCreate", "data": {"contact": {"id": "test123", "firstName": "John", "lastName": "Doe", "email": "john@example.com"}}}'
echo ""
echo ""

echo "=== Test Complete ==="
