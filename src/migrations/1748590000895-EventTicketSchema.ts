import { MigrationInterface, QueryRunner } from "typeorm";

export class EventTicketSchema1748590000895 implements MigrationInterface {
    name = 'EventTicketSchema1748590000895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ticket" ("id" SERIAL NOT NULL, "qty" integer NOT NULL, "price" bigint NOT NULL DEFAULT '0', "start_sale" TIMESTAMP WITH TIME ZONE NOT NULL, "end_sale" TIMESTAMP WITH TIME ZONE, "eventId" uuid, CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "start_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "end_date_time" TIMESTAMP WITH TIME ZONE NOT NULL, "is_online" boolean NOT NULL, "event_url" character varying(200), "location_name" character varying(100), "location_city" character varying(100) NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `);
        await queryRunner.query(`ALTER TABLE "ticket" ADD CONSTRAINT "FK_cb22a51617991265571be41b74f" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ticket" DROP CONSTRAINT "FK_cb22a51617991265571be41b74f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b535fbe8ec6d832dde22065ebd"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "ticket"`);
    }

}
