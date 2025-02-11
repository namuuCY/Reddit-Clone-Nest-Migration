import { DataSource } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: 'mysql',
				host: 'localhost',
				port: 33067,
				username: 'asac',
				password: '1234',
				database: 'migration',
				entities: ['dist/**/*.entity{.ts,.js}'],
				synchronize: true,
				logging: true,
			});

			return dataSource.initialize();
		},
	},
];
