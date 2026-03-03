# PME System – Ripoti ya Mahitaji

**Mfumo:** Zanzibar Education Sector Planning, Monitoring & Evaluation System (PM&E)  
**Tarehe:** Februari 2025

---

## 1. KISHAHIDI (VILIVYOMO – Inafanya kazi)

### 1.1 Usalama
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Login | ✅ | Barua pepe + nenosiri, API `/api/login` |
| Logout | ✅ | Kupitia AuthContext |
| Change Password | ✅ | Modal + API `/api/change-password` |
| Session | ✅ | sessionStorage (pme_user) |
| User Roles | ✅ | admin, director, user |

### 1.2 User Management
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Orodha ya watumiaji | ✅ | `/api/users`, GET |
| Ongeza user | ✅ | POST /api/users |
| Badilisha user | ✅ | PUT /api/users/:id |
| Futa user | ✅ | DELETE /api/users/:id |
| Badilisha role | ✅ | PATCH /api/users/:id/role |
| Role & Permission page | ✅ | Ukurasa wa kubadilisha majukumu |
| User Activities | ✅ | CRUD kwa shughuli zilizopangiwa (POST, GET, PUT, DELETE) |

### 1.3 Settings (CRUD)
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Department | ✅ | /api/departments |
| Agencies | ✅ | /api/agencies |
| Financial Year | ✅ | /api/financial_years |
| Quarter | ✅ | /api/quarters |
| SI Unit | ✅ | /api/si_units |
| GFS Code | ✅ | /api/gfs_codes |
| Source of Funding | ✅ | /api/source_of_funding |
| Ibara ya Ilani | ✅ | /api/ibara_ilani |

### 1.4 UI / UX
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Page ya Login | ✅ | Picha slide, form, responsive |
| Sidebar | ✅ | Dashboard, Planning, M&E, User Management, Setting + sub-menu |
| DataTable | ✅ | Search, pagination (react-data-table-component) |
| Icons | ✅ | IconInput, IconSelect kwenye form |
| Spinner | ✅ | Wakati wa CRUD |
| Role display | ✅ | Navbar inaonyesha role ya user |

### 1.5 Dashboard
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Pie Chart | ✅ | Bajeti kwa chanzo cha fedha |
| Line Chart | ✅ | Bajeti vs matumizi kwa robo |
| Sample data | ✅ | Data ya mfano (recharts) |

### 1.6 Planning Platform
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Chaguo la Department | ✅ | Inasoma /api/departments |
| Chaguo la Agency/Division | ✅ | Inasoma /api/agencies |
| MTEF Setup | ✅ | FY, Quarter kutoka database |
| MTEF Activities | ⚠️ | UI ipo lakini data ni hardcoded (Activity 1–9) |
| Action Plan | ⚠️ | UI ipo lakini data ni hardcoded (Shughuli 1–9) |

### 1.7 M&E Platform
| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Department/Division select | ✅ | Kutoka /api/departments, /api/agencies |
| Reporting on Action Plan | ⚠️ | UI ipo lakini data hardcoded |
| Ripoti ya Ilani | ⚠️ | UI ipo, Ibara hardcoded |

---

## 2. KINACHOHITAJIKA / KUTENGENEZWA

### 2.1 Inconsistencies za Database / API

| Tatizo | Maelezo | Suluhisho |
|--------|---------|-----------|
| `users.id` vs `user_id` | Table `users` ina column `id`, lakini API inatumia `user_id` kwenye SELECT | Tumia `id AS user_id` katika queries zote za users |
| POST user-activities | LEFT JOIN `u.user_id = ua.user_id` – table users ina `id` si `user_id` | Rekebisha JOIN kuwa `u.id = ua.user_id` |

### 2.2 APIs Zinazokosekana

| API | Table | Maelezo |
|-----|-------|---------|
| GET/POST/PUT/DELETE `/api/mtef-activities` | mtef_activities | CRUD ya shughuli za MTEF |
| GET/POST/PUT/DELETE `/api/action-plan` | action_plan | CRUD ya Action Plan |
| GET/POST/PUT/DELETE `/api/me-action-report` | me_action_report | CRUD ya Ripoti za M&E |
| GET/POST/PUT/DELETE `/api/ripoti-ilani` | ripoti_ilani | CRUD ya Ripoti ya Ilani |

### 2.3 Sector Plan

| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Sector Plan page | ❌ | Iko kwenye menu (Sector Plan) lakini hakuna route/page | Ongeza route na page ya Sector Plan au futa kwenye menu |

### 2.4 Dashboard – Data halisi

| Kipengele | Hali | Maelezo |
|-----------|------|---------|
| Pie Chart data | ⚠️ | Ni sample data | Soma kutoka database (e.g. budgets by source) |
| Line Chart data | ⚠️ | Ni sample data | Soma kutoka database (quarterly budget vs actual) |
| API za dashboard | ❌ | Hakuna | Ongeza e.g. `/api/dashboard/budget-summary`, `/api/dashboard/quarterly` |

### 2.5 Planning – Kuunganisha na Database

| Kipengele | Maelezo |
|-----------|---------|
| MTEF Activities | Soma shughuli kutoka `mtef_activities` kulingana na dept, division, FY, quarter |
| Action Plan | Soma shughuli kutoka `action_plan` |
| Save/Submit | Andika data kwenye database badala ya `alert()` |
| GFS Codes | Soma kutoka `gfs_codes` badala ya constants |
| Funding | Soma kutoka `source_of_funding` |

### 2.6 M&E – Kuunganisha na Database

| Kipengele | Maelezo |
|-----------|---------|
| Reporting | Soma `me_action_report` na kuandika ripoti |
| Ripoti ya Ilani | Soma ibara kutoka `ibara_ilani`, andika `ripoti_ilani` |
| Review & Submit | Workflow: draft → submitted → approved |

### 2.7 Usalama

| Kipengele | Maelezo |
|-----------|---------|
| Password hashing | Password zinahifadhiwa plain text | Tumia bcrypt au bcryptjs |
| JWT/Session | sessionStorage peke yake | Fikiri server-side sessions au JWT |
| Role-based access | Ruhusa za ukurasa | Fanya kuwa routes/API zinazidi check role |

### 2.8 Vipengele vya ziada

| Kipengele | Maelezo |
|-----------|---------|
| Upload files | Action Plan ina “Pakia Nyaraka” – hakuna API | Ongeza file upload (multer, storage) |
| Export/Print | Ripoti za PDF/Excel | Ongeza export |
| Notifications | Arifa za submit, approval | Optional |
| Audit log | Kukumbukiza mabadiliko | Optional |

---

## 3. MUHTASARI WA MAHITAJI

| Kategoria | Kishahidi | Kinachohitajika |
|-----------|-----------|-----------------|
| Auth & Users | 90% | Password hashing, RBAC |
| Settings | 100% | – |
| User Management | 95% | Rekebisha user_id bug |
| Planning (MTEF, Action Plan) | 30% | API + kuunganisha na DB |
| M&E (Reporting, Ripoti Ilani) | 30% | API + kuunganisha na DB |
| Dashboard | 50% | Data halisi kutoka DB |
| Sector Plan | 0% | Page/route au ondoa menu |

---

## 4. UTARATIBU UNAOPENDKEZWA

1. **Haraka:** Rekebisha `user_id`/`id` katika server (GET users, user-activities)  
2. **Haraka:** Ongeza APIs za mtef_activities, action_plan, me_action_report, ripoti_ilani  
3. **Kati:** Unganisha Planning na M&E pages na APIs hizo  
4. **Kati:** Dashboard – data halisi kutoka database  
5. **Baadaye:** Password hashing (bcrypt)  
6. **Baadaye:** Role-based route protection  
7. **Baadaye:** File upload kwa documents  
