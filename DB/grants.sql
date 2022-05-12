GRANT ALL PRIVILEGES ON DATABASE "RMG_QA" TO sysrmg

GRANT ALL PRIVILEGES ON SCHEMA dbo TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Alumno_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Area_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Bus_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Comuna_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Conductor_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Curso_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo."Recorrido_id_seq" TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo.bus_conductor_id_seq TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo.bus_recorrido_id_seq TO sysrmg;

GRANT SELECT, UPDATE ON SEQUENCE dbo.pago_alumno_id_seq TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Alumno" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Area" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Bus" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Comuna" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Conductor" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Curso" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo."Recorrido" TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo.bus_conductor_recorrido TO sysrmg;

GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE dbo.pago_alumno TO sysrmg;

