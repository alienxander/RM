/************ Update: Schemas ***************/

ALTER SCHEMA "schemaA" RENAME TO dbo;





/************ Update: Tables ***************/

/******************** Add Table: "dbo"."Alumno" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Alumno"
(
	id INTEGER DEFAULT nextval('"schemaRM"."Alumno_id_seq"'::regclass) NOT NULL,
	"stdNumber" INTEGER NOT NULL,
	rut VARCHAR(9) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	direccion VARCHAR(30) NOT NULL,
	id_comuna INTEGER NOT NULL,
	telefono VARCHAR(9) NOT NULL,
	id_curso INTEGER NOT NULL,
	id_area INTEGER NOT NULL,
	id_recorrido INTEGER NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "pkAlumno"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Area" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Area"
(
	id INTEGER DEFAULT nextval('"schemaRM"."Area_id_seq"'::regclass) NOT NULL,
	descripcion VARCHAR(10) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Area" ADD CONSTRAINT "pkArea"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Bus" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Bus"
(
	id INTEGER DEFAULT nextval('"schemaRM"."Bus_id_seq"'::regclass) NOT NULL,
	patente VARCHAR(7) NOT NULL,
	id_conductor INTEGER NOT NULL,
	id_recorrido INTEGER NOT NULL,
	descripcion VARCHAR(30) NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Bus" ADD CONSTRAINT "pkBus"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Comuna" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Comuna"
(
	id INTEGER DEFAULT nextval('"schemaRM"."Comuna_id_seq"'::regclass) NOT NULL,
	codigo VARCHAR(5) NOT NULL,
	descripcion VARCHAR(15) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Comuna" ADD CONSTRAINT "pkComuna"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Conductor" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Conductor"
(
	id INTEGER DEFAULT nextval('"schemaRM"."Conductor_id_seq"'::regclass) NOT NULL,
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
	id INTEGER DEFAULT nextval('"schemaRM"."Curso_id_seq"'::regclass) NOT NULL,
	descripcion VARCHAR(4) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Curso" ADD CONSTRAINT "pkCurso"
	PRIMARY KEY (id);


/******************** Add Table: "dbo"."Recorrido" ************************/

/* Build Table Structure */
CREATE TABLE "dbo"."Recorrido"
(
	id INTEGER DEFAULT nextval('"schemaRM"."Recorrido_id_seq"'::regclass) NOT NULL,
	codigo VARCHAR(10) NOT NULL,
	"horaInicio" VARCHAR(5) NOT NULL,
	"horaFin" VARCHAR(5) NOT NULL
) WITHOUT OIDS;

/* Add Primary Key */
ALTER TABLE "dbo"."Recorrido" ADD CONSTRAINT "pkRecorrido"
	PRIMARY KEY (id);





/************ Add Foreign Keys ***************/

/* Add Foreign Key: fk_Alumno_Area */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Area"
	FOREIGN KEY (id_area) REFERENCES "dbo"."Area" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Alumno_Comuna */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Comuna"
	FOREIGN KEY (id_comuna) REFERENCES "dbo"."Comuna" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Alumno_Curso */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Curso"
	FOREIGN KEY (id_curso) REFERENCES "dbo"."Curso" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Alumno_Recorrido */
ALTER TABLE "dbo"."Alumno" ADD CONSTRAINT "fk_Alumno_Recorrido"
	FOREIGN KEY (id_recorrido) REFERENCES "dbo"."Recorrido" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Bus_Conductor */
ALTER TABLE "dbo"."Bus" ADD CONSTRAINT "fk_Bus_Conductor"
	FOREIGN KEY (id_conductor) REFERENCES "dbo"."Conductor" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;

/* Add Foreign Key: fk_Bus_Recorrido */
ALTER TABLE "dbo"."Bus" ADD CONSTRAINT "fk_Bus_Recorrido"
	FOREIGN KEY (id_recorrido) REFERENCES "dbo"."Recorrido" (id)
	ON UPDATE NO ACTION ON DELETE NO ACTION;