export const Express_Template = `
        import express, { Request, Response } from 'express';
        
        const app = express();
        const port = process.env.PORT || 3000;

        app.use(express.json());

        app.get('/', (req: Request, res: Response) => {
            res.send('Hello, world!');
        });

        app.listen(port, () => {
            console.log(\`Server is running on port \${port}\`);
        });
        `;

export const Express_Env_Template = `
        # Environment
        NODE_ENV=development

        # Server
        PORT=3000

        # Database
        DB_HOST=localhost
        DB_PORT=5432
        DB_USER=yourusername
        DB_PASSWORD=yourpassword
        DB_NAME=yourdatabase

        # JWT
        JWT_SECRET=your_jwt_secret
        JWT_EXPIRATION=3600
        `;