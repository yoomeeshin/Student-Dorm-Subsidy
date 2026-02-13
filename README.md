# Student Residential Holiday Subsidy Platform

A full-stack dashboard system for managing holiday subsidies across student residential hall CCAs (Co-Curricular Activities). This solution streamlines the declaration, tracking, and approval workflow for weekly subsidy commitments through a modern Next.js application with role-based access control. This was done as part of Sheares Web of Sheares Hall.

## Key Features

- **Role-Based Dashboards**: Separate interfaces for CCA chairs, administrators, and students
- **Weekly Declaration System**: CCA chairs can declare weekly subsidy commitments with detailed breakdowns
- **Approval Workflow**: Admin dashboard for reviewing and approving subsidy requests
- **Real-Time Tracking**: Live updates on subsidy status and approval progress
- **Type-Safe Architecture**: Full TypeScript implementation ensuring data consistency

## Tech Stack

- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Supabase** PostgreSQL database
- **Firebase Auth** for authentication
- **Tailwind CSS** for styling
- **shadcn/ui** component library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase project
- Firebase project with OAuth enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/yoomeeshin/Student-Residential-Holiday-Subsidy-Platform.git
cd Student-Residential-Holiday-Subsidy-Platform

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run development server
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── api/holidaySubsidy/     # API routes for subsidy operations
│   └── dashboard/holidaySubsidy/  # Dashboard pages
├── components/                  # Reusable React components
├── lib/                         # Utility functions and configurations
└── types/                       # TypeScript type definitions
```

## Features

### For CCA Chairs
- Declare weekly subsidy commitments
- View historical declarations
- Track approval status

### For Administrators
- Review all CCA declarations
- Approve or reject subsidy requests
- Weekly approval interface with detailed breakdowns

## License

This project was developed as part of Sheares Web of Sheares Hall.
