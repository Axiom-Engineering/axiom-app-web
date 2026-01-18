export interface Thread {
    id: string;
    title: string;
    group: 'Today' | 'Yesterday' | 'Previous 7 Days';
    isActive?: boolean;
}

export interface CodeBlock {
    language: string;
    code: string;
    filename?: string;
}

export interface Message {
    id: string;
    text: string;
    sender: string;
    isAi: boolean;
    timestamp: string;
    codeBlock?: CodeBlock;
}

export const NAV_ITEMS: Thread[] = [
    { id: '1', title: 'Refactoring Auth Logic', group: 'Today', isActive: true },
    { id: '2', title: 'API Documentation v2', group: 'Today' },
    { id: '3', title: 'Database Migration Steps', group: 'Yesterday' },
    { id: '4', title: 'Onboarding Guide Review', group: 'Yesterday' },
    { id: '5', title: 'CI/CD Pipeline Setup', group: 'Previous 7 Days' },
    { id: '6', title: 'React Performance Audit', group: 'Previous 7 Days' },
];

export const CHAT_MESSAGES: Message[] = [
    {
        id: '1',
        isAi: false,
        sender: 'ALEX (YOU)',
        timestamp: '10:23 AM',
        text: "I need to refactor the authentication middleware to support the new policy service. Can you show me an example of how to migrate the current JWT validation?",
    },
    {
        id: '2',
        isAi: true,
        sender: 'AI ASSISTANT',
        timestamp: '10:24 AM',
        text: "To migrate to the new Policy Service, you'll need to replace the local JWT verification with a call to our internal `PolicyValidator`.",
        codeBlock: {
            language: 'javascript',
            filename: 'middleware/auth.js',
            code: `const { PolicyValidator } = require('@enterprise/policy-service');
async function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  // New validation logic with enhanced policy check
  const { isValid, user } = await PolicyValidator.verify(token, {
    scope: 'api:read'
  });
  if (!isValid) {
    return res.status(401).json({ error: 'Forbidden' });
  }
  req.user = user;
  next();
}`
        }
    },
    {
        id: '3',
        isAi: false,
        sender: 'ALEX (YOU)',
        timestamp: '10:26 AM',
        text: "That looks straightforward. Does `PolicyValidator.verify` handle token expiration automatically, or do I need to wrap it in a try-catch block?",
    },
    {
        id: '4',
        isAi: true,
        sender: 'AI ASSISTANT',
        timestamp: '10:26 AM',
        text: "Yes, `PolicyValidator.verify` automatically handles token expiration and signature verification. However, wrapping it in a try-catch block is a best practice to handle network errors or unexpected service unavailability gracefully.",
        codeBlock: {
            language: 'javascript',
            filename: 'middleware/auth.js',
            code: `try {
  const { isValid, user } = await PolicyValidator.verify(token, { scope: 'api:read' });
  // ...
} catch (error) {
  console.error('Policy service error:', error);
  return res.status(503).json({ error: 'Service Unavailable' });
}`
        }
    }
];
