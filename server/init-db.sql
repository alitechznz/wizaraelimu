CREATE DATABASE IF NOT EXISTS zanzibar_pme;
USE zanzibar_pme;

-- Users table for login
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) DEFAULT NULL,
  department VARCHAR(255) DEFAULT NULL,
  role ENUM('user','director','admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MTEF Activities
CREATE TABLE IF NOT EXISTS mtef_activities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(255) NOT NULL,
  division VARCHAR(255) NOT NULL,
  financial_year VARCHAR(50) NOT NULL,
  quarter VARCHAR(20) NOT NULL,
  activity_number INT NOT NULL,
  activity_title VARCHAR(500) NOT NULL,
  gfs_code VARCHAR(20),
  unit_cost DECIMAL(15,2) DEFAULT 0,
  num_units INT DEFAULT 0,
  estimates DECIMAL(15,2) DEFAULT 0,
  status ENUM('draft','submitted','approved') DEFAULT 'draft',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Action Plan Shughuli
CREATE TABLE IF NOT EXISTS action_plan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(255) NOT NULL,
  division VARCHAR(255) NOT NULL,
  shughuli_number INT NOT NULL,
  activity_title VARCHAR(500) NOT NULL,
  funding_source VARCHAR(50),
  makisio_q1 DECIMAL(15,2) DEFAULT 0,
  makisio_q2 DECIMAL(15,2) DEFAULT 0,
  makisio_q3 DECIMAL(15,2) DEFAULT 0,
  makisio_q4 DECIMAL(15,2) DEFAULT 0,
  indicator TEXT,
  current_status TEXT,
  annual_target TEXT,
  quarter_target TEXT,
  status ENUM('draft','submitted','approved') DEFAULT 'draft',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- M&E Reporting on Action Plan
CREATE TABLE IF NOT EXISTS me_action_report (
  id INT AUTO_INCREMENT PRIMARY KEY,
  action_plan_id INT,
  department VARCHAR(255) NOT NULL,
  division VARCHAR(255) NOT NULL,
  shughuli_number INT NOT NULL,
  funds_received_q1 DECIMAL(15,2) DEFAULT 0,
  funds_received_q2 DECIMAL(15,2) DEFAULT 0,
  funds_received_q3 DECIMAL(15,2) DEFAULT 0,
  funds_received_q4 DECIMAL(15,2) DEFAULT 0,
  funds_explanation TEXT,
  actual_implementation TEXT,
  implementation_details TEXT,
  status ENUM('draft','submitted','approved') DEFAULT 'draft',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (action_plan_id) REFERENCES action_plan(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- M&E Ripoti ya Ilani
CREATE TABLE IF NOT EXISTS ripoti_ilani (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department VARCHAR(255) NOT NULL,
  division VARCHAR(255) NOT NULL,
  ibara_number INT NOT NULL,
  ibara_title VARCHAR(500),
  utekelezaji TEXT,
  status ENUM('draft','submitted','approved') DEFAULT 'draft',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Example user
INSERT INTO users (email, password, name, department, role) VALUES
  ('admin@example.com', 'developer', 'Admin', 'Policy, Planning and Research', 'admin')
ON DUPLICATE KEY UPDATE email = email;
