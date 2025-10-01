# Use official Node.js 22 LTS base image
FROM node:22.16.0-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock/pnpm-lock.yaml)
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy all source code
COPY . .

# Build Next.js app
RUN apk add --no-cache curl bash
ENV NEXT_DISABLE_FONT_DOWNLOADS=1
RUN npm run build


# Production stage
FROM node:22.16.0-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only required files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js default port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
