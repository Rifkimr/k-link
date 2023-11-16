import { MigrationInterface, QueryRunner } from "typeorm";

export class DbKLink1700126829776 implements MigrationInterface {
    name = 'DbKLink1700126829776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "fullname" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("invoice_id" SERIAL NOT NULL, "qty" integer NOT NULL, "invoice_total_amount" integer NOT NULL, "invoice_product_detail" character varying NOT NULL, "invoice_date" TIMESTAMP NOT NULL DEFAULT now(), "invoice_total_count" integer NOT NULL, CONSTRAINT "PK_3a12e9b258f9cd052e43cacf75b" PRIMARY KEY ("invoice_id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "fullname" character varying NOT NULL, "division" character varying NOT NULL, CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "product_name" character varying NOT NULL, "product_price" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}
