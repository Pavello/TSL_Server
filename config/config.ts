export const config = () => ({
    port: process.env.PORT,
    devDatabase: {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        port: parseInt(process.env.TYPEORM_PORT),
        logging: process.env.TYPEORM_LOGGING === 'false',
        entities: ['dist/**/*.entity.js'],
        synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    },
    prodDatabase: {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
    }
});
