# AI4Business Website

A professional business website for AI4Business South Africa, showcasing custom AI integration services and innovative hardware solutions tailored for South African enterprises.

## Features

- **Custom AI Mini PC Showcase** - Premium banner highlighting exclusive hardware offerings
- **Interactive AI Demo Tools** - Content generation, text analysis, and business idea generation
- **AI Chatbot** - Intelligent assistant for customer inquiries
- **Responsive Design** - Mobile-first approach with modern UI/UX
- **Authentication System** - Optional Replit authentication with public access
- **Contact Integration** - WhatsApp and email contact forms

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **AI Integration**: Google Gemini API
- **Authentication**: Replit OpenID Connect
- **Build Tool**: Vite
- **Deployment**: Replit with optional GitHub Pages

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see Environment Variables section)
4. Run development server: `npm run dev`
5. Visit `http://localhost:5000`

## Environment Variables

Create a `.env` file with the following variables:

```
# Database
DATABASE_URL=your_postgresql_url

# AI Services
GEMINI_API_KEY=your_gemini_api_key

# Authentication (Optional)
SESSION_SECRET=your_session_secret
REPL_ID=your_replit_id
ISSUER_URL=https://replit.com/oidc
REPLIT_DOMAINS=your_domain.com
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## AI Features

### AI Demo Tools
- **Content Generation**: Create business content with context and tone control
- **Text Analysis**: Analyze business text for insights and sentiment
- **Business Ideas Generator**: Generate AI-powered business ideas by industry

### AI Chatbot
- Context-aware responses about AI4Business services
- Integration with company information and offerings
- Floating chat interface with conversation history

## Hardware Showcase

### AI4Business CUSTOM AI Mini PC
- AMD Ryzen 9 8/12 Core - 16/24 Threads CPU
- 96GB / 128GB DDR5 5600 RAM
- AMD Ryzen AI NPU Co-Processor
- Radeon 890/780M RDNA 3 Graphics
- 2x 1TB M.2 PCIe 4.0 NVMe SSD
- Windows 11 & Linux Pre-installed

## Contact Information

**AI4Business South Africa**
- **Location**: Linksfield, Johannesburg
- **Hours**: Mon-Thu 9AM-7PM, Fri 9AM-3PM, Sunday by special request
- **WhatsApp**: +27 69 299 2530
- **Website**: [Your Domain]

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose main branch as source
4. Site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain
1. Add CNAME file with your domain
2. Configure DNS settings
3. Enable HTTPS in GitHub Pages settings

## License

MIT License - see LICENSE file for details

## Support

For technical support or business inquiries, contact AI4Business South Africa through WhatsApp or the website contact form.