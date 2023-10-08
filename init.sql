CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    student_age INTEGER NOT NULL,
    student_sex VARCHAR(20) NOT NULL,
    student_career VARCHAR(10) NOT NULL,
    student_ide VARCHAR(10) NOT NULL,
    student_level INTEGER NOT NULL,
    student_t_date DATE NOT NULL DEFAULT CURRENT_DATE,
    student_birth_data VARCHAR(500),
    student_provenance VARCHAR(300),
    student_status VARCHAR(50),
    student_address VARCHAR(500),
    student_email VARCHAR(100),
    student_phone VARCHAR(50)
);

INSERT INTO students 
(student_name, student_age, student_sex, student_career, student_level, student_ide, student_t_date, student_birth_data, student_provenance, student_status, student_address, student_email, student_phone) 
VALUES 
('César David Gámez Ortega', 22, 'Masculino', 'ITI', 9, '171957', '2023-10-08', 'San Luis Potosi, 05/10/2001', 'San Luis Potosí, San Luis Potosí', 'Casado', 'San Luis Potosí, SLP', '171957@upslp.edu.mx', '4444009129'),
('Ángel Silvestre Montalvo Rodríguez', 20, 'Masculino', 'ITI', 9, '173380', '2023-10-08', 'San Luis Potosi, 01/06/2003', 'San Luis Potosí, San Luis Potosí', 'Casado', 'San Luis Potosí, SLP', '173380@upslp.edu.mx', '4447131706'),
('Brayan Javier Frias Sandoval', 22, 'Masculino', 'ITI', 9, '172817', '2023-10-08', 'San Luis Potosí, 31/12/2000', 'San Luis Potosí, Soledad de Graciano Sánchez', 'Soltero', 'Palma de la Cruz, SLP', '172817@upslp.edu.mx', '4444674849');