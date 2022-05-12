/************ Update: Schemas ***************/

/* Add Schema: dbo */
CREATE SCHEMA dbo;


/************ Add: Sequences ***************/

CREATE SEQUENCE "dbo"."Alumno_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Alumno_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE "dbo"."Area_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Area_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE "dbo"."Bus_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Bus_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE "dbo"."Comuna_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Comuna_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE "dbo"."Conductor_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Conductor_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE "dbo"."Curso_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Curso_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE "dbo"."Recorrido_id_seq" INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE "dbo"."Recorrido_id_seq" IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE dbo.bus_conductor_id_seq INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE dbo.bus_conductor_id_seq IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE dbo.bus_recorrido_id_seq INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE dbo.bus_recorrido_id_seq IS 'DbWrench Autogenerated Sequence.';

CREATE SEQUENCE dbo.pago_alumno_id_seq INCREMENT BY 1 START 1;
COMMENT ON SEQUENCE dbo.pago_alumno_id_seq IS 'DbWrench Autogenerated Sequence.';



/************ Update: Tables ***************/

/******************** Add Table: "dbo"."Alumno" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Alumno"
(
	id INTEGER DEFAULT nextval('dbo."Alumno_id_seq"'::regclass) NOT NULL,
	"stdNumber" INTEGER NOT NULL,
	rut VARCHAR(9) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	id_comuna INTEGER NOT NULL,
	id_curso INTEGER NOT NULL,
	id_bus INTEGER NULL,
	codigo_recorrido VARCHAR(10) NULL,
	direccion VARCHAR(30) NOT NULL,
	telefono VARCHAR(9) NOT NULL,
	email VARCHAR(30) NULL,
	sector INTEGER NULL,
	"inicioContrato" DATE NULL,
	"finContrato" DATE NULL,
	"arancelContrato" INTEGER NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "pkAlumno"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Area" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Area"
(
	id INTEGER DEFAULT nextval('dbo."Area_id_seq"'::regclass) NOT NULL,
	descripcion VARCHAR(50) NOT NULL,
	codigo VARCHAR(3) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Area" ADD CONSTRAINT "pkArea"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Bus" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Bus"
(
	id INTEGER DEFAULT nextval('dbo."Bus_id_seq"'::regclass) NOT NULL,
	patente VARCHAR(7) NOT NULL,
	descripcion VARCHAR(30) NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Bus" ADD CONSTRAINT "pkBus"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Comuna" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Comuna"
(
	id INTEGER DEFAULT nextval('dbo."Comuna_id_seq"'::regclass) NOT NULL,
	codigo VARCHAR(5) NOT NULL,
	descripcion VARCHAR(30) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Comuna" ADD CONSTRAINT "pkComuna"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Conductor" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Conductor"
(
	id INTEGER DEFAULT nextval('dbo."Conductor_id_seq"'::regclass) NOT NULL,
	rut VARCHAR(9) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Conductor" ADD CONSTRAINT "pkConductor"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Curso" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Curso"
(
	id INTEGER DEFAULT nextval('dbo."Curso_id_seq"'::regclass) NOT NULL,
	descripcion VARCHAR(15) NOT NULL,
	id_area INTEGER NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Curso" ADD CONSTRAINT "pkCurso"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Recorrido" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Recorrido"
(
	id INTEGER DEFAULT nextval('dbo."Recorrido_id_seq"'::regclass) NOT NULL,
	codigo VARCHAR(10) NOT NULL,
	"horaInicio" VARCHAR(5) NOT NULL,
	"horaFin" VARCHAR(5) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Recorrido" ADD CONSTRAINT "pkRecorrido"
	PRIMARY KEY (id);


/******************** Add Table: dbo.bus_conductor_recorrido ************************/

/* Build Table Structure */
CREATE TABLE dbo.bus_conductor_recorrido
(
	id INTEGER DEFAULT nextval('dbo.bus_conductor_id_seq'::regclass) NOT NULL,
	id_conductor INTEGER NOT NULL,
	id_bus INTEGER NOT NULL,
	id_recorrido INTEGER NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE dbo.bus_conductor_recorrido ADD CONSTRAINT pkbus_conductor
	PRIMARY KEY (id);


/******************** Add Table: dbo.pago_alumno ************************/

/* Build Table Structure */
CREATE TABLE dbo.pago_alumno
(
	id INTEGER DEFAULT nextval('dbo.pago_alumno_id_seq'::regclass) NOT NULL,
	id_alumno INTEGER NOT NULL,
	"montoPago" INTEGER NOT NULL,
	"fechaPago" DATE NOT NULL,
	"fechaCarga" DATE NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE dbo.pago_alumno ADD CONSTRAINT pkpago_alumno
	PRIMARY KEY (id);



/* Remove Schemas */

DROP SCHEMA public CASCADE;




/************ Add Foreign Keys ***************/

/* Add Foreign Key: fk_Alumno_Bus */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Bus"
	FOREIGN KEY (id_bus) REFERENCES "dbo"."Bus" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Alumno_Comuna */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Comuna"
	FOREIGN KEY (id_comuna) REFERENCES "dbo"."Comuna" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Alumno_Curso */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Curso"
	FOREIGN KEY (id_curso) REFERENCES "dbo"."Curso" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Curso_Area */
ALTER TABLE "dbo"."Curso" ADD CONSTRAINT "fk_Curso_Area"
	FOREIGN KEY (id_area) REFERENCES "dbo"."Area" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_bus_conductor_Bus */
ALTER TABLE dbo.bus_conductor_recorrido ADD CONSTRAINT "fk_bus_conductor_Bus"
	FOREIGN KEY (id_bus) REFERENCES "dbo"."Bus" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_bus_conductor_Conductor */
ALTER TABLE dbo.bus_conductor_recorrido ADD CONSTRAINT "fk_bus_conductor_Conductor"
	FOREIGN KEY (id_conductor) REFERENCES "dbo"."Conductor" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_bus_conductor_recorrido_Recorrido */
ALTER TABLE dbo.bus_conductor_recorrido ADD CONSTRAINT "fk_bus_conductor_recorrido_Recorrido"
	FOREIGN KEY (id_recorrido) REFERENCES "dbo"."Recorrido" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_pago_alumno_Alumno */
ALTER TABLE dbo.pago_alumno ADD CONSTRAINT "fk_pago_alumno_Alumno"
	FOREIGN KEY (id_alumno) REFERENCES "dbo"."Alumno" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;