export const Express_Template = `
    
        import express, { Request, Response } from 'express';
        // import routes form ./routes
        // import controllers from ./controllers
        // import middlewares from ./middlewares
        // import database config from ./config/database
        // import models from ./config/models
        
        const app = express();
        const port = process.env.PORT || 3000;

        app.use(express.json());

        export { app,port };
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



export const indexFile_Template = `
        import { app, port } from "./src/express.app";
        app.listen(port, () => {
            console.log(\`Server is running on port \${port}\`);
        });
`;