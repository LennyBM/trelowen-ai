"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("./utils/logger");
const chat_1 = __importDefault(require("./routes/chat"));
const ghlWebhook_1 = __importDefault(require("./routes/ghlWebhook"));
const sms_1 = __importDefault(require("./routes/sms"));
// import fbMessengerRoutes from './routes/fbMessenger';
const email_1 = __importDefault(require("./routes/email"));
const investment_1 = __importDefault(require("./routes/investment"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Security middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === 'production' ? [
        'https://loveable.dev',
        'https://*.loveable.dev',
        'https://trelowen.loveable.dev',
        'https://www.trelowen.com',
        'https://trelowen.com'
    ] : true,
    credentials: true
}));
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);
// Body parsing middleware
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'Trelowen AI Assistant'
    });
});
// Static files for chat widget
app.use('/widget', express_1.default.static(path_1.default.join(__dirname, '../widget')));
// API routes
app.use('/api/chat', chat_1.default);
app.use('/api/ghl-webhook', ghlWebhook_1.default);
app.use('/api/sms', sms_1.default);
// app.use('/api/fb-messenger', fbMessengerRoutes);
app.use('/api/email', email_1.default);
app.use('/api/investment', investment_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    logger_1.logger.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});
// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
app.listen(PORT, () => {
    logger_1.logger.info(`Trelowen AI Assistant server running on port ${PORT}`);
    logger_1.logger.info(`Health check available at: http://localhost:${PORT}/api/health`);
});
exports.default = app;
//# sourceMappingURL=index.js.map