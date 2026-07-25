// DBMS — full topic data
// Shape reference: see src/data/CN/topics.js for the canonical example.

const dbmsTopics = [
  {
    id: 'dbms-basics',
    title: 'What is a DBMS?',
    description: 'Why we needed database systems in the first place — the classic problems of file processing.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'A DBMS is software for storing and retrieving data safely and efficiently, replacing older file-processing systems that suffered from redundancy, inconsistency, and security gaps.',
    easyExplanation:
      'Before databases, each program kept its own private files — like every department in a company keeping a separate paper ledger for the same customer. A DBMS gives everyone one shared, well-organized "master ledger" instead, with rules that keep it accurate and safe.',
    whyImportant: '"Why do we need a DBMS instead of just files?" is often the very first question in a DBMS interview.',
    keyPoints: [
      'Database — a collection of related, real-world data',
      'DBMS — software that stores/retrieves that data while enforcing security',
      'Solves data redundancy & inconsistency',
      'Solves difficulty accessing data across scattered formats',
      'Solves data isolation (multiple files, multiple formats)',
      'Solves integrity, atomicity, concurrency & security problems',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Every department in a company used to keep its own paper ledger of the same customer — mismatched, duplicated, error-prone. A DBMS is the single shared, well-guarded master ledger everyone reads and writes through instead.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Problems DBMS solves',
        columns: ['File-processing problem', 'How a DBMS fixes it'],
        rows: [
          ['Data redundancy & inconsistency', 'Single shared source of truth'],
          ['Difficulty accessing data', 'Structured Query Language (SQL)'],
          ['Data isolation (many formats)', 'One unified schema'],
          ['Integrity problems', 'Constraints (keys, domains)'],
          ['Atomicity of updates', 'Transactions'],
          ['Concurrent access', 'Locking & scheduling'],
          ['Security problems', 'Access control (GRANT / REVOKE)'],
        ],
      },
    ],
    realWorldExample:
      'A bank storing account data in one central DBMS instead of every branch keeping its own spreadsheet — so a balance update in one place is instantly accurate everywhere else.',
    interviewQuestions: [
      { q: 'What is a DBMS?', a: 'Software that stores and retrieves data for users and applications while enforcing security and consistency.' },
      { q: 'Name three problems a DBMS solves compared to plain file processing.', a: 'Any three of: redundancy/inconsistency, difficult access, data isolation, integrity issues, atomicity, concurrency, and security.' },
      { q: 'Difference between data redundancy and data inconsistency?', a: 'Redundancy is the same data stored in multiple places; inconsistency is what happens when those duplicates fall out of sync and show different values.' },
    ],
    commonMistakes: [
      { title: '"Database" and "DBMS" mean the same thing', detail: 'The database is the data itself; the DBMS is the software that manages, secures, and serves that data.' },
    ],
    revision: ['DBMS = software managing a database', 'Fixes: redundancy, access, isolation, integrity, atomicity, concurrency, security'],
    relatedTopics: ['er-diagram', 'keys'],
  },

  {
    id: 'er-diagram',
    title: 'ER Diagrams',
    description: 'Entities, attributes, and relationships — the blueprint of a database.',
    readingTime: 6,
    difficulty: 'Easy',
    quickDefinition:
      'An ER (Entity-Relationship) diagram is a conceptual, graphical blueprint of a database\'s entities, their attributes, and the relationships between them.',
    easyExplanation:
      'Picture a Student entity with attributes Roll_no, Name, and Age. Roll_no is underlined as the primary key because it can identify any student uniquely — like a fingerprint. An ER diagram draws exactly this kind of picture for an entire database, before a single table is ever created.',
    whyImportant: 'Designing an ER diagram from a word problem is one of the most common DBMS design exercises in interviews and exams alike.',
    keyPoints: [
      'Built from three building blocks: Entity Sets, Attributes, and Relationship Sets',
      'Strong Entity Set — has enough attributes to be uniquely identified (has its own primary key)',
      'Weak Entity Set — has no primary key of its own; identified via a partial key (discriminator)',
      'Relationship arity: Unary, Binary, Ternary, or N-ary (number of participating entity sets)',
      'Cardinality: One-to-One, One-to-Many, Many-to-One, Many-to-Many',
    ],
    memoryTrick: { type: 'story', text: 'A student\'s Roll_no works like a fingerprint — no two students share one, so it can identify any student uniquely as the entity\'s primary key.' },
    visuals: [
      {
        type: 'tree',
        title: 'Building blocks of an ER diagram',
        root: 'ER Diagram',
        children: [
          { label: 'Entity Sets', children: [{ label: 'Strong (has own key)' }, { label: 'Weak (needs discriminator)' }] },
          { label: 'Attributes' },
          { label: 'Relationship Sets' },
        ],
      },
      {
        type: 'table',
        title: 'Attribute types',
        columns: ['Type', 'Example'],
        rows: [
          ['Simple', 'Age'],
          ['Composite', 'Name (made of First + Last)'],
          ['Multi-valued', 'Mobile numbers'],
          ['Derived', 'Age (derived from Date of Birth)'],
          ['Key', 'Roll No'],
        ],
      },
      {
        type: 'table',
        title: 'Cardinality types',
        columns: ['Type', 'Meaning'],
        rows: [
          ['One-to-One', 'One entity in A relates to at most one in B, and vice versa'],
          ['One-to-Many', 'One entity in A relates to many in B'],
          ['Many-to-One', 'Many entities in A relate to one entity in B'],
          ['Many-to-Many', 'Many entities in A relate to many entities in B'],
        ],
      },
    ],
    realWorldExample:
      'A Student entity with Roll_no, Name, and Age attributes — Roll_no is underlined as the primary key because it uniquely identifies each student, just like a fingerprint.',
    interviewQuestions: [
      { q: 'What is an ER diagram?', a: 'A conceptual model that graphically represents entities, attributes, and relationships in a database\'s logical structure.' },
      { q: 'Difference between a strong and weak entity set?', a: 'A strong entity set has its own primary key; a weak entity set doesn\'t and relies on a partial key (discriminator) plus its owning entity.' },
      { q: 'What is cardinality, and name its four types?', a: 'The maximum number of relationship instances an entity can participate in — One-to-One, One-to-Many, Many-to-One, and Many-to-Many.' },
    ],
    commonMistakes: [
      { title: 'Confusing a discriminator with a real primary key', detail: 'A discriminator only identifies entities *within* the group belonging to one owning strong entity — it can\'t uniquely identify an entity on its own across the whole database.' },
    ],
    revision: ['3 building blocks: Entities, Attributes, Relationships', 'Strong = own primary key; Weak = needs a discriminator', '4 cardinality types: 1:1, 1:N, N:1, N:N'],
    relatedTopics: ['dbms-basics', 'keys'],
  },

  {
    id: 'keys',
    title: 'Keys & Constraints',
    description: 'Super, candidate, primary, foreign, composite & unique keys — plus the rules that keep data valid.',
    readingTime: 6,
    difficulty: 'Easy',
    quickDefinition:
      'A key is a set of attributes that uniquely identifies each tuple in a relation. Constraints — including keys — are the rules that keep a database\'s data valid and consistent.',
    easyExplanation:
      'Every candidate key is a super key, but not every super key is minimal enough to be a candidate key — and the primary key is simply the one candidate the designer picks to be "the" official identifier for a table.',
    whyImportant: 'Key types are the vocabulary every later topic (normalization, joins, indexing) is built on — get these solid first.',
    keyPoints: [
      'Super Key — any attribute set that uniquely identifies a tuple (can include extra, unneeded attributes)',
      'Candidate Key — a minimal super key, with no unnecessary attributes',
      'Primary Key — the candidate key chosen by the designer; must be unique and NOT NULL',
      'Alternate Key — candidate keys that were not chosen as the primary key',
      'Foreign Key — references another relation\'s key, linking two tables together',
      'Composite Key — a primary key made of multiple attributes combined',
      'Unique Key — unique per record like a primary key, but can allow one NULL',
      'Referential Integrity Constraint — a foreign key\'s value must exist in the referenced relation, or be NULL',
      'Domain Constraint — every attribute\'s value must come from its defined, atomic domain of values',
      'Tuple Uniqueness Constraint — no two tuples in a relation may be entirely identical',
      'Entity Integrity Constraint — no attribute that\'s part of the primary key may ever be NULL',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Every candidate key is a super key, but not every super key is minimal enough to be a candidate — and the primary key is just the one candidate the designer picks to be "the" identifier.',
    },
    visuals: [
      {
        type: 'tree',
        title: 'Narrowing down: Super Key → Candidate Key → Primary Key',
        root: 'Super Key',
        children: [{ label: 'Candidate Key (minimal)', children: [{ label: 'Primary Key (chosen one)' }] }],
      },
      {
        type: 'table',
        title: 'Other key types',
        columns: ['Key type', 'Rule'],
        rows: [
          ['Foreign Key', 'References another table\'s key'],
          ['Composite Key', 'Primary key made of multiple attributes'],
          ['Unique Key', 'Unique per row, allows one NULL'],
          ['Alternate Key', 'A candidate key that wasn\'t chosen as primary'],
        ],
      },
      {
        type: 'circle',
        title: 'The 5 relational constraints',
        center: 'Data Integrity',
        satellites: ['Domain', 'Tuple Uniqueness', 'Key', 'Entity Integrity', 'Referential Integrity'],
      },
      {
        type: 'table',
        title: 'What each constraint actually checks',
        columns: ['Constraint', 'Checks that…'],
        rows: [
          ['Domain', 'Every value comes from its attribute\'s valid, atomic set of values'],
          ['Tuple Uniqueness', 'No two rows in a relation are entirely identical'],
          ['Key', 'Every primary key value is unique'],
          ['Entity Integrity', 'No attribute of the primary key is ever NULL'],
          ['Referential Integrity', 'Every foreign key value exists in the referenced table, or is NULL'],
        ],
      },
    ],
    realWorldExample:
      'In a Students table, both Roll_no and Aadhaar_number could be candidate keys — each uniquely identifies a student. The college picks Roll_no as the Primary Key, leaving Aadhaar_number as an Alternate Key.',
    interviewQuestions: [
      { q: 'Difference between a super key and a candidate key?', a: 'A super key can include extra unnecessary attributes; a candidate key is the minimal version that still uniquely identifies a tuple.' },
      { q: 'What is a foreign key used for?', a: 'Linking one table to another by referencing that table\'s primary (or candidate) key.' },
      { q: 'Can a unique key contain a NULL value?', a: 'Yes, one — unlike a primary key, which cannot contain any NULL value at all.' },
      { q: 'What is the Entity Integrity constraint?', a: 'It ensures no attribute that is part of a primary key can ever hold a NULL value.' },
      { q: 'Difference between Domain constraint and Tuple Uniqueness constraint?', a: 'Domain constraint restricts individual attribute values to a valid, atomic set; Tuple Uniqueness ensures no two entire rows in a relation are identical.' },
    ],
    commonMistakes: [
      { title: '"Primary Key and Unique Key are interchangeable"', detail: 'A Primary Key strictly disallows NULL and there\'s exactly one per table; a Unique Key can allow a single NULL, and a table can have several unique keys.' },
    ],
    revision: ['Super Key ⊇ Candidate Key ⊇ Primary Key', 'Foreign key links two tables', 'Composite key = multiple attributes together', 'Unique key allows one NULL, Primary key allows none', '5 constraints: Domain, Tuple Uniqueness, Key, Entity Integrity, Referential Integrity'],
    relatedTopics: ['er-diagram', 'normalization'],
  },

  {
    id: 'normalization',
    title: 'Normalization',
    description: '1NF, 2NF, 3NF, BCNF — removing redundancy step by step, built on functional dependency.',
    readingTime: 8,
    difficulty: 'Medium',
    quickDefinition:
      'Normalization is the step-by-step process of restructuring a database to remove redundancy while preserving all functional dependencies, moving a relation through progressively stricter normal forms.',
    easyExplanation:
      "Imagine one giant spreadsheet mixing student, course, and instructor info into a single table — updating an instructor's office number means fixing it in a hundred rows. Normalization is splitting that giant sheet into smaller, focused tables where each fact lives in exactly one place, guided by functional dependencies (rules like \"knowing the Roll No always tells you the Name\").",
    whyImportant: 'Normal form questions (spot the 2NF violation, convert to 3NF) are some of the most frequently repeated DBMS exam questions.',
    keyPoints: [
      'Functional Dependency (A → B) — knowing A always tells you B',
      'Trivial FD — the right side is already a subset of the left side (X → Y where Y ⊆ X)',
      'Non-trivial FD — at least one right-side attribute is NOT part of the left side',
      'Closure of an attribute set — everything that set can functionally determine',
      'Decomposition — splitting one relation into smaller ones',
      'Lossless Join Decomposition — joining the pieces back gives you exactly the original relation (R1 ⋈ R2 = R)',
      'Lossy Join Decomposition — joining the pieces back gives you MORE rows than the original (R1 ⋈ R2 ⊃ R) — information was lost',
      'Dependency Preservation — every functional dependency from the original relation still holds across the decomposed sub-relations',
      '1NF — every cell holds a single, atomic value',
      '2NF — 1NF + no partial dependency (a non-key attribute depending on only part of a composite key)',
      '3NF — 2NF + no transitive dependency (a non-key attribute depending on another non-key attribute)',
      'BCNF — 3NF + every determinant of a non-trivial functional dependency must be a super key',
      '4NF (beyond BCNF) — removes multi-valued dependencies (one attribute independently having multiple values unrelated to another)',
      '5NF (beyond 4NF) — removes join dependencies, ensuring a table can\'t be losslessly decomposed any further',
    ],
    memoryTrick: {
      type: 'story',
      text: '1NF: no more than one value per cell. 2NF: nothing depends on only PART of the key. 3NF: nothing depends on another regular (non-key) attribute instead of the key. BCNF: the strictest version of 3NF, with no exceptions left.',
    },
    visuals: [
      {
        type: 'tree',
        title: 'Progressively stricter normal forms',
        root: '1NF',
        children: [{ label: '2NF', children: [{ label: '3NF', children: [{ label: 'BCNF' }] }] }],
      },
      {
        type: 'table',
        title: 'What each normal form removes',
        columns: ['Normal Form', 'Removes', 'Extra rule'],
        rows: [
          ['1NF', 'Non-atomic values', 'Every cell holds a single value'],
          ['2NF', 'Partial dependency', 'No non-key attribute depends on only part of a composite key'],
          ['3NF', 'Transitive dependency', 'No non-key attribute depends on another non-key attribute'],
          ['BCNF', 'Remaining anomalies', 'Every determinant of a functional dependency must be a super key'],
        ],
      },
      {
        type: 'comparison',
        title: 'Lossless vs Lossy Decomposition',
        left: { title: 'Lossless Join', points: ['R1 ⋈ R2 = R', 'No information lost', 'Always the goal'] },
        right: { title: 'Lossy Join', points: ['R1 ⋈ R2 ⊃ R', 'Extra, bogus rows appear', 'A decomposition mistake to avoid'] },
      },
    ],
    realWorldExample:
      'A single "Orders" table storing a customer\'s name and address next to every order they place wastes space and risks inconsistency. Normalization splits it into a Customers table and an Orders table linked by a foreign key, so an address only ever needs to be updated in one place.',
    interviewQuestions: [
      { q: 'What is a functional dependency?', a: 'A relationship A → B where knowing the value of A always tells you the value of B.' },
      { q: 'What is a partial dependency, and which normal form removes it?', a: 'A non-key attribute depending on only part of a composite key — removed by achieving 2NF.' },
      { q: 'What is a transitive dependency, and which normal form removes it?', a: 'A non-key attribute depending on another non-key attribute rather than the key directly — removed by achieving 3NF.' },
      { q: 'What\'s the difference between 3NF and BCNF?', a: 'BCNF is stricter — it requires every determinant of a non-trivial functional dependency to be a super key, closing edge cases 3NF still allows.' },
      { q: 'What is a trivial functional dependency?', a: 'One where the right-hand side is already a subset of the left-hand side (X → Y where Y ⊆ X) — it holds automatically and adds no new information.' },
      { q: 'What is dependency preservation, and why does it matter?', a: 'It ensures every functional dependency from the original relation still holds after decomposition — losing it means you can\'t check certain constraints without expensive joins.' },
    ],
    commonMistakes: [
      { title: '"Higher normal form is always better"', detail: 'Over-normalizing can hurt read performance by requiring too many joins — real systems sometimes deliberately denormalize for speed.' },
      { title: 'Assuming any decomposition is automatically lossless', detail: 'A poorly-chosen decomposition can be lossy (R1 ⋈ R2 ⊃ R), producing extra bogus rows when joined back — lossless decomposition has to be verified, not assumed.' },
    ],
    revision: ['1NF: atomic values only', '2NF: no partial dependency', '3NF: no transitive dependency', 'BCNF: every determinant is a super key', 'Lossless: R1⋈R2=R · Lossy: R1⋈R2⊃R', 'Trivial FD: Y⊆X · Non-trivial: Y⊄X'],
    relatedTopics: ['keys', 'relational-algebra'],
  },

  {
    id: 'transactions',
    title: 'Transactions & ACID',
    description: 'Atomicity, Consistency, Isolation, Durability — and the states a transaction moves through.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'A transaction is a single logical unit of database work, guaranteed to be Atomic, Consistent, Isolated, and Durable (ACID) so the database never ends up in a broken, half-finished state.',
    easyExplanation:
      'Think of an ATM withdrawal: cash leaving your account and appearing in your hand must happen together — never just one side. If the ATM crashes mid-transfer, your balance shouldn\'t be deducted without the cash appearing. That "all or nothing" guarantee is exactly what a transaction provides.',
    whyImportant: 'ACID properties are asked in nearly every DBMS round, often followed immediately by a "give a real example" prompt.',
    keyPoints: [
      'Read(A) / Write(A) — the two fundamental transaction operations',
      'Atomicity — the transaction happens completely, or not at all',
      'Consistency — the database is valid both before and after the transaction',
      'Isolation — concurrent transactions don\'t interfere with each other\'s intermediate state',
      'Durability — once committed, changes survive even a system crash',
    ],
    memoryTrick: { type: 'acronym', text: 'ACID: All-or-nothing (Atomicity), Correct before & after (Consistency), Invisible mid-way to others (Isolation), Doesn\'t vanish after a crash (Durability).' },
    visuals: [
      {
        type: 'tree',
        title: 'Transaction state lifecycle',
        root: 'Active',
        children: [
          { label: 'Partially Committed', children: [{ label: 'Committed', children: [{ label: 'Terminated' }] }] },
          { label: 'Failed', children: [{ label: 'Aborted (rolled back)', children: [{ label: 'Terminated' }] }] },
        ],
      },
      {
        type: 'table',
        title: 'ACID at a glance',
        columns: ['Property', 'Meaning'],
        rows: [
          ['Atomicity', 'All or nothing — no partial transactions'],
          ['Consistency', 'Database stays valid before and after'],
          ['Isolation', 'Concurrent transactions don\'t interfere'],
          ['Durability', 'Committed changes survive a crash'],
        ],
      },
    ],
    realWorldExample:
      'Transferring money via ATM — cash leaving your account and appearing in your hand must happen together (atomicity); if the machine crashes mid-transfer, your balance shouldn\'t be deducted without the cash appearing.',
    interviewQuestions: [
      { q: 'What are the ACID properties?', a: 'Atomicity, Consistency, Isolation, and Durability.' },
      { q: 'What is the difference between the Failed and Aborted states?', a: 'Failed means the transaction has hit an error mid-execution; Aborted means its changes have since been fully rolled back.' },
      { q: 'Why is atomicity important in a bank transfer?', a: 'Without it, money could leave one account without ever arriving in the other if a failure happens mid-transaction.' },
    ],
    commonMistakes: [
      { title: '"Partially Committed" means the same as "Committed"', detail: 'A partially committed transaction still has its changes sitting only in the buffer in memory — nothing is written to disk permanently until it reaches the Committed state.' },
    ],
    revision: ['Read/Write are the base operations', 'ACID: Atomicity, Consistency, Isolation, Durability', 'States: Active → Partially Committed → Committed, or → Failed → Aborted'],
    relatedTopics: ['schedules-serializability', 'normalization'],
  },

  {
    id: 'schedules-serializability',
    title: 'Schedules & Serializability',
    description: 'Serial, non-serial, conflict & view serializable schedules.',
    readingTime: 7,
    difficulty: 'Hard',
    quickDefinition:
      'A schedule is the order in which operations from multiple transactions execute; serializability checks whether an interleaved (non-serial) schedule still behaves as safely as some serial order would.',
    easyExplanation:
      'Think of transactions as chefs sharing one kitchen. A Serial schedule means one chef cooks fully before the next starts. A Non-serial schedule means they\'re all cooking at once, ingredients getting interleaved. A Serializable schedule means that however mixed up the steps get, the final dish still tastes exactly like it would if they\'d cooked one at a time.',
    whyImportant: 'This is the theoretical backbone of database concurrency control — a favorite "harder" DBMS interview topic.',
    keyPoints: [
      'Serial Schedule — transactions run one completely after another, no interleaving',
      'Non-Serial Schedule — operations from multiple transactions are interleaved',
      'Serializable Schedule — a non-serial schedule that behaves exactly like some serial order',
      'Conflict Serializable — reachable by swapping non-conflicting operations into a serial order',
      'View Serializable — behaves equivalently to some serial schedule from a "read/write view" perspective',
      'Recoverable — a transaction only commits after any transaction it read dirty data from has committed or rolled back',
      'Cascadeless — a transaction can\'t even read uncommitted (dirty) data from another at all',
      'Strict — a transaction can\'t read OR write a data item until its last writer has committed or rolled back',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Transactions are chefs sharing one kitchen. Serial = one chef cooks fully before the next starts. Non-serial = they\'re all cooking at once. Serializable = however interleaved, the final dish still tastes exactly like it would if they\'d cooked one at a time.',
    },
    visuals: [
      {
        type: 'tree',
        title: 'The schedule family tree',
        root: 'Schedules',
        children: [
          { label: 'Serial' },
          {
            label: 'Non-Serial',
            children: [
              { label: 'Serializable', children: [{ label: 'Conflict Serializable' }, { label: 'View Serializable' }] },
              {
                label: 'Non-Serializable',
                children: [
                  { label: 'Recoverable', children: [{ label: 'Cascading' }, { label: 'Cascadeless' }, { label: 'Strict' }] },
                  { label: 'Irrecoverable' },
                ],
              },
            ],
          },
        ],
      },
    ],
    realWorldExample:
      'Two bank tellers processing transactions on the same account at the same moment — serializability guarantees that no matter how their steps interleave in real time, the final account balance is exactly what it would be if one teller had gone fully before the other.',
    interviewQuestions: [
      { q: 'What is a serializable schedule?', a: 'A non-serial schedule that produces the same result as some serial execution of the same transactions.' },
      { q: 'Difference between conflict serializable and view serializable?', a: 'Conflict serializable is reachable by swapping non-conflicting operations; view serializable is a broader condition based on matching reads/writes, and every conflict serializable schedule is also view serializable (not vice versa).' },
      { q: 'What is an irrecoverable schedule?', a: 'One where a transaction commits after reading uncommitted (dirty) data from another transaction that later aborts — a very unsafe scenario.' },
    ],
    commonMistakes: [
      { title: '"All non-serial schedules are bad"', detail: 'Many non-serial schedules are perfectly safe (serializable) and actually improve performance by allowing more concurrency.' },
    ],
    revision: ['Serial = one at a time, Non-serial = interleaved', 'Serializable = behaves like some serial order', 'Recoverable < Cascadeless < Strict (increasingly safe)'],
    relatedTopics: ['transactions', 'relational-algebra'],
  },

  {
    id: 'relational-algebra',
    title: 'Relational Algebra',
    description: 'Selection, projection, joins, and set operators — SQL\'s theoretical foundation.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'Relational algebra is a procedural query language made of operators — σ, ∏, ⋈, ∪, −, ρ, and more — that take one or more relations as input and produce a relation as output.',
    easyExplanation:
      'Every operator maps to something you already know from SQL: Selection (σ) picks rows, Projection (∏) picks columns, Join (⋈) combines related tables, and Union/Minus/Intersection compare entire relations the way set operations do in math.',
    whyImportant: 'It\'s the formal language SQL is actually built on — interviewers use it to test whether you understand queries at a deeper level than syntax.',
    keyPoints: [
      'σ (Selection) — filters rows by a condition',
      '∏ (Projection) — picks out specific columns',
      'X (Cross Product) — every row of R1 paired with every row of R2 (m × n rows)',
      '⋈c (Conditional Join) — a cross product followed by a selection based on some condition',
      '⋈ (Equi Join) — a conditional join using only equality conditions',
      '⋈ (Natural Join) — an equi join on all common attributes, with duplicate columns auto-removed',
      '⟕ / ⟖ / ⟗ (Left / Right / Full Outer Join) — keep unmatched rows from the left, right, or both sides, filling gaps with NULL',
      '∪ / − / ∩ (Union / Minus / Intersection) — set operations between two union-compatible relations',
      'ρ (Rename) — renames a relation or its attributes',
      '÷ (Division) — finds tuples in A associated with every tuple in B',
    ],
    memoryTrick: { type: 'mnemonic', text: 'σ = Sieve (filters rows), ∏ = Print columns, ⋈ = Zip two tables together.' },
    visuals: [
      {
        type: 'tree',
        title: 'Basic vs Extended operators',
        root: 'Relational Algebra',
        children: [
          { label: 'Basic', children: [{ label: 'σ Selection' }, { label: '∏ Projection' }, { label: 'X Cross Product' }, { label: '∪ Union' }, { label: '− Minus' }, { label: 'ρ Rename' }] },
          { label: 'Extended', children: [{ label: '∩ Intersection' }, { label: '⋈ Join family' }, { label: '÷ Division' }] },
        ],
      },
      {
        type: 'table',
        title: 'Core operators',
        columns: ['Operator', 'Symbol', 'What it does'],
        rows: [
          ['Selection', 'σ', 'Filters rows by a condition'],
          ['Projection', '∏', 'Picks specific columns'],
          ['Cross Product', 'X', 'Every row of R1 paired with every row of R2 (m×n rows)'],
          ['Union', '∪', 'Rows in R1 or R2 (or both)'],
          ['Minus', '−', 'Rows in R1 but not in R2'],
          ['Intersection', '∩', 'Rows in both R1 and R2'],
          ['Rename', 'ρ', 'Renames a relation or attribute'],
          ['Division', '÷', 'Rows in A related to every row in B'],
        ],
      },
      {
        type: 'table',
        title: 'The join family',
        columns: ['Join type', 'Symbol', 'What it keeps'],
        rows: [
          ['Conditional Join', '⋈c', 'Cross product, then filtered by any condition'],
          ['Equi Join', '⋈', 'Conditional join using only equality conditions'],
          ['Natural Join', '⋈', 'Equi join on all shared attributes; duplicates auto-removed'],
          ['Left Outer Join', '⟕', 'All of R1, matched rows from R2 (NULLs where unmatched)'],
          ['Right Outer Join', '⟖', 'All of R2, matched rows from R1 (NULLs where unmatched)'],
          ['Full Outer Join', '⟗', 'All rows from both R1 and R2, matched or not'],
        ],
      },
    ],
    realWorldExample:
      'SELECT * FROM Students WHERE marks > 90 in SQL is the same idea as σ(marks > 90)(Students) in relational algebra — just a different notation for the exact same row-filtering operation.',
    interviewQuestions: [
      { q: 'What does the σ (selection) operator do?', a: 'Filters rows of a relation based on a given condition.' },
      { q: 'What is a natural join?', a: 'A special case of a conditional join where equality holds on all common attributes, and duplicate columns are automatically removed.' },
      { q: 'What does the division operator (÷) do?', a: 'Returns tuples from relation A that are associated with every single tuple in relation B.' },
      { q: 'Difference between an Equi Join and a Natural Join?', a: 'An Equi Join filters a cross product using equality conditions you specify; a Natural Join automatically equates every shared attribute and removes the duplicate columns.' },
      { q: 'What does a Left Outer Join keep that an Inner Join doesn\'t?', a: 'Every row from the left relation, even ones with no match in the right relation — those get NULLs for the right side\'s columns.' },
    ],
    commonMistakes: [
      { title: 'Forgetting Union needs "union-compatible" relations', detail: 'You can\'t Union any two random tables — both relations need the same number of attributes with matching, compatible data types.' },
      { title: 'Confusing Cross Product with Join', detail: 'A Cross Product pairs every row with every row (m×n) with no filtering at all; a Join is a Cross Product that\'s then filtered down by a condition.' },
    ],
    revision: ['σ = filter rows, ∏ = pick columns, X = cross product', '⋈c/Equi/Natural = increasingly specific joins', '⟕/⟖/⟗ = Left/Right/Full Outer Join', '∪/−/∩ need union-compatible relations', 'Natural join removes duplicate common attributes automatically'],
    relatedTopics: ['sql-basics', 'joins'],
  },

  {
    id: 'indexing-btrees',
    title: 'Indexing & B/B+ Trees',
    description: 'Primary, clustering & secondary indexes, and the tree structures that power them.',
    readingTime: 6,
    difficulty: 'Hard',
    quickDefinition:
      'Indexes speed up data retrieval by avoiding a full table scan; B-Trees and B+ Trees are the balanced tree structures that power most database indexes.',
    easyExplanation:
      "An index is like a book's index page — instead of flipping through every single page to find something, you jump straight to the right one. A B-Tree keeps data pointers at every level of that structure; a B+ Tree keeps them only at the very bottom (leaf) level, packing far more keys into each upper node and making the whole tree shallower and faster to search.",
    whyImportant: 'File structure and B+ Tree questions are the "harder" end of DBMS interviews, testing real systems understanding beyond just SQL syntax.',
    keyPoints: [
      'Primary Index — built on the primary key; an ordered file with pointers to data blocks. Average block accesses = log₂(Bᵢ) + 1, where Bᵢ = number of index blocks',
      'Clustering Index — built on a non-key field the data file is physically sorted by',
      'Secondary Index — an additional access path used when a primary index already exists',
      'B-Tree — a balanced tree where every node stores both keys and data pointers',
      'Order (P) of a tree — the maximum number of children any node can have',
      'B-Tree root can have between 2 and P children; internal nodes have between ⌈P/2⌉ and P children, and between ⌈P/2⌉−1 and P−1 keys',
      'B+ Tree — only leaf nodes store data pointers; non-leaf nodes are purely for navigation, fitting more keys per node',
      'B+ Trees are shallower than B-Trees for the same data, meaning faster search',
    ],
    memoryTrick: {
      type: 'story',
      text: 'A B-Tree keeps snack shelves at every level of the store. A B+ Tree keeps snacks only on the ground floor, so upper floors can be packed with just directions — making the whole store "shorter" to search through.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Index types',
        columns: ['Index type', 'Built on', 'Use case'],
        rows: [
          ['Primary', 'Primary key', 'Fast direct lookup'],
          ['Clustering', 'Non-key field, physically sorted', 'Range queries on that field'],
          ['Secondary', 'Any field, alongside an existing primary index', 'Extra fast lookup on non-key fields'],
        ],
      },
      {
        type: 'comparison',
        title: 'B-Tree vs B+ Tree',
        left: { title: 'B-Tree', points: ['Data pointers at every node', 'Fewer keys per node', 'Deeper tree'], },
        right: { title: 'B+ Tree', points: ['Data pointers only at leaves', 'More keys per node', 'Shallower, faster search'] },
      },
      {
        type: 'table',
        title: 'Formulas to remember',
        columns: ['What', 'Formula'],
        rows: [
          ['Avg. block accesses (Primary Index)', 'log₂(Bᵢ) + 1, where Bᵢ = number of index blocks'],
          ['B-Tree root\'s children', 'Between 2 and P (the tree\'s order)'],
          ['B-Tree internal node\'s children', 'Between ⌈P/2⌉ and P'],
          ['B-Tree internal node\'s keys', 'Between ⌈P/2⌉ − 1 and P − 1'],
        ],
      },
    ],
    realWorldExample:
      'A book\'s index page — instead of flipping through every page to find "Photosynthesis," you jump straight to page 142 using the index. A database index does exactly this for millions of rows.',
    interviewQuestions: [
      { q: 'Why are indexes used?', a: 'To speed up data retrieval by avoiding a full scan of every row in a table.' },
      { q: 'Difference between B-Tree and B+ Tree?', a: 'B-Trees store data pointers at every node; B+ Trees only store them at leaf nodes, which lets non-leaf nodes hold more keys and keep the tree shallower.' },
      { q: 'What is a clustering index?', a: 'An index built on a non-key field where the data file itself is physically sorted by that field.' },
      { q: 'What does the "order" of a B-Tree mean?', a: 'The maximum number of children any single node in the tree can have.' },
      { q: 'How many children can a B-Tree\'s internal node have?', a: 'Between ⌈P/2⌉ and P, where P is the order of the tree.' },
    ],
    commonMistakes: [
      { title: '"More indexes are always better"', detail: 'Every index speeds up reads but slows down writes, since inserts/updates must also update the index structure itself.' },
    ],
    revision: ['Primary/Clustering/Secondary index types', 'B-Tree: pointers at every node', 'B+ Tree: pointers only at leaves, shallower & faster', 'Block accesses = log₂(Bᵢ) + 1', 'Internal node: ⌈P/2⌉ to P children, ⌈P/2⌉−1 to P−1 keys'],
    relatedTopics: ['keys', 'sql-basics'],
  },

  {
    id: 'sql-basics',
    title: 'SQL Basics',
    description: 'DDL, DML, DCL, TCL — plus SELECT, WHERE, GROUP BY, and aggregate functions.',
    readingTime: 7,
    difficulty: 'Easy',
    quickDefinition:
      'SQL is the standard language for storing, manipulating, and retrieving data, split into four command categories: DDL, DML, DCL, and TCL.',
    easyExplanation:
      'DDL defines the shape of the database (CREATE, ALTER, DROP). DML works with the actual data (SELECT, INSERT, UPDATE, DELETE). DCL controls who\'s allowed to do what (GRANT, REVOKE). TCL manages transactions (COMMIT, ROLLBACK, SAVEPOINT). Almost every SQL command you\'ll ever write falls into exactly one of these four buckets.',
    whyImportant: 'This is the vocabulary every SQL coding round is built on — knowing the category of a command signals real understanding, not memorized syntax.',
    keyPoints: [
      'DDL — CREATE, ALTER, DROP, TRUNCATE, RENAME (defines structure)',
      'DML — SELECT, INSERT, UPDATE, DELETE, MERGE (works with actual data)',
      'DCL — GRANT, REVOKE (controls permissions)',
      'TCL — COMMIT, ROLLBACK, SAVEPOINT (manages transactions)',
      'WHERE filters rows; ORDER BY sorts; GROUP BY summarizes; HAVING filters after grouping',
      'Aggregate functions: MIN, MAX, COUNT, AVG, SUM',
      'WHERE is applied before HAVING — WHERE cannot filter on an aggregate result',
    ],
    memoryTrick: { type: 'mnemonic', text: 'DDL Designs, DML Manipulates, DCL Controls, TCL Transacts.' },
    visuals: [
      {
        type: 'table',
        title: 'The four SQL command categories',
        columns: ['Category', 'Commands', 'Purpose'],
        rows: [
          ['DDL', 'CREATE, ALTER, DROP, TRUNCATE, RENAME', 'Defines database structure'],
          ['DML', 'SELECT, INSERT, UPDATE, DELETE, MERGE', 'Works with the actual data'],
          ['DCL', 'GRANT, REVOKE', 'Controls access permissions'],
          ['TCL', 'COMMIT, ROLLBACK, SAVEPOINT', 'Manages transactions'],
        ],
      },
      {
        type: 'comparison',
        title: 'WHERE vs HAVING',
        left: { title: 'WHERE', points: ['Filters individual rows', 'Runs before grouping', 'Can\'t use aggregate functions'] },
        right: { title: 'HAVING', points: ['Filters grouped results', 'Runs after GROUP BY', 'Built specifically for aggregate conditions'] },
      },
      {
        type: 'table',
        title: 'Aggregate functions',
        columns: ['Function', 'Returns', 'Example'],
        rows: [
          ['MIN()', 'The smallest value', 'SELECT MIN(Price) FROM Products;'],
          ['MAX()', 'The largest value', 'SELECT MAX(Price) FROM Products;'],
          ['COUNT()', 'How many rows match', 'SELECT COUNT(ProductID) FROM Products;'],
          ['AVG()', 'The average value', 'SELECT AVG(Price) FROM Products;'],
          ['SUM()', 'The total of all values', 'SELECT SUM(Quantity) FROM OrderDetails;'],
        ],
      },
      {
        type: 'flow',
        title: 'GROUP BY + HAVING, worked example',
        steps: [
          'SELECT COUNT(CustomerID), Country FROM Customers',
          'GROUP BY Country — one row per country',
          'HAVING COUNT(CustomerID) > 5 — keep only countries with 5+ customers',
          'ORDER BY COUNT(CustomerID) DESC — biggest countries first',
        ],
      },
    ],
    realWorldExample:
      'An e-commerce site uses DDL to create its Orders table once, DML every time a user places an order, DCL to make sure only staff accounts can view financial reports, and TCL to ensure a payment and an order status update either both succeed or both roll back together.',
    interviewQuestions: [
      { q: 'What are the four categories of SQL commands?', a: 'DDL, DML, DCL, and TCL.' },
      { q: 'Difference between WHERE and HAVING?', a: 'WHERE filters individual rows before grouping happens; HAVING filters grouped results and can use aggregate functions.' },
      { q: 'What does TRUNCATE do differently from DELETE?', a: 'TRUNCATE removes all rows and deallocates space instantly, can\'t be filtered with a WHERE clause, and is typically much harder to roll back than DELETE.' },
    ],
    commonMistakes: [
      { title: 'Using WHERE with an aggregate function like COUNT()', detail: 'Aggregate filters must go in HAVING — WHERE runs before grouping happens, so aggregate values don\'t exist yet at that point.' },
    ],
    revision: ['DDL: structure, DML: data, DCL: permissions, TCL: transactions', 'WHERE filters rows, HAVING filters groups', 'Aggregate functions: MIN, MAX, COUNT, AVG, SUM'],
    relatedTopics: ['joins', 'relational-algebra'],
  },

  {
    id: 'joins',
    title: 'SQL Joins',
    description: 'INNER, LEFT, RIGHT, FULL OUTER, and UNION.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'JOINs combine rows from two or more tables based on a related column between them — INNER, LEFT, RIGHT, and FULL OUTER each keep a different set of unmatched rows.',
    easyExplanation:
      'Picture two class lists — one for Sports Club, one for Music Club. An INNER JOIN shows only students in BOTH clubs. A LEFT JOIN shows every Sports Club student (with blank Music info if they\'re not in Music too). A FULL OUTER JOIN shows every student who\'s in at least one club, matched or not.',
    whyImportant: 'JOINs are the single most practically-tested SQL skill — expect a live query-writing exercise around them.',
    keyPoints: [
      'INNER JOIN — only rows that match in both tables',
      'LEFT JOIN — all rows from the left table, matched rows from the right (NULLs where there\'s no match)',
      'RIGHT JOIN — all rows from the right table, matched rows from the left',
      'FULL OUTER JOIN — all rows from both tables, matched or not',
      'UNION — combines the *results* of two SELECT queries, not table columns; removes duplicates by default, UNION ALL keeps them',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Two class lists, Sports Club and Music Club: INNER JOIN shows only students in BOTH. LEFT JOIN shows every Sports Club student, blank Music info if they\'re not in it too. FULL OUTER shows every student in at least one club.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Join types',
        columns: ['Join type', 'What it keeps'],
        rows: [
          ['INNER JOIN', 'Only matching rows from both tables'],
          ['LEFT JOIN', 'All left rows + matches from the right'],
          ['RIGHT JOIN', 'All right rows + matches from the left'],
          ['FULL OUTER JOIN', 'All rows from both sides, matched or not'],
        ],
      },
    ],
    realWorldExample:
      'Combining a Customers table and an Orders table by CustomerID — INNER JOIN shows only customers who\'ve placed an order; LEFT JOIN shows every customer, even ones who\'ve never ordered anything (with blank order details).',
    interviewQuestions: [
      { q: 'What does an INNER JOIN return?', a: 'Only the rows that have matching values in both joined tables.' },
      { q: 'Difference between LEFT JOIN and RIGHT JOIN?', a: 'LEFT JOIN keeps all rows from the left table; RIGHT JOIN keeps all rows from the right table — both fill in NULLs where there\'s no match on the other side.' },
      { q: 'What\'s the difference between UNION and UNION ALL?', a: 'UNION removes duplicate rows from the combined result by default; UNION ALL keeps every row, duplicates included.' },
    ],
    commonMistakes: [
      { title: 'Forgetting UNION\'s column requirements', detail: 'Both SELECT statements need the same number of columns, in the same order, with compatible data types — you can\'t UNION two arbitrarily different queries.' },
    ],
    revision: ['INNER = only matches', 'LEFT/RIGHT = all of one side + matches', 'FULL OUTER = everything from both', 'UNION removes duplicates, UNION ALL doesn\'t'],
    relatedTopics: ['sql-basics', 'relational-algebra'],
  },

  {
    id: 'sql-select-where',
    title: 'SELECT, WHERE & ORDER BY',
    description: 'Reading data: picking columns, filtering rows, sorting, and handling NULLs.',
    readingTime: 6,
    difficulty: 'Easy',
    quickDefinition:
      'SELECT chooses which columns to return, WHERE filters which rows qualify (using comparison and logical operators), ORDER BY sorts the result, and NULLs need their own special IS NULL / IS NOT NULL checks.',
    easyExplanation:
      'Think of a spreadsheet: SELECT picks which columns you want visible, WHERE hides rows that don\'t match your filter, and ORDER BY sorts what\'s left. NULL is special — it means "no value at all," so asking WHERE column = NULL never works; you have to ask WHERE column IS NULL instead.',
    whyImportant: 'This is the absolute foundation of every SQL query you\'ll ever write or be asked to write live in an interview.',
    keyPoints: [
      'SELECT column1, column2 FROM table — pick specific columns; SELECT * grabs everything',
      'SELECT DISTINCT — returns only unique values, removing duplicate rows',
      'WHERE condition — filters rows before any grouping happens',
      'Comparison operators: =, >, <, >=, <=, <> (or !=) for "not equal"',
      'AND / OR / NOT combine multiple WHERE conditions',
      'ORDER BY column ASC|DESC — sorts the result-set (ascending by default)',
      'NULL means "no value" — use IS NULL / IS NOT NULL, never = NULL or <> NULL',
    ],
    memoryTrick: { type: 'mnemonic', text: '"Select Where Order" — the natural reading order of a query: pick columns, filter rows, then sort what\'s left.' },
    visuals: [
      {
        type: 'flow',
        title: 'How a query is actually processed',
        steps: ['FROM table', 'WHERE filters rows', 'SELECT picks columns', 'ORDER BY sorts the result'],
      },
      {
        type: 'table',
        title: 'Comparison operators',
        columns: ['Operator', 'Meaning'],
        rows: [
          ['=', 'Equal'],
          ['>', 'Greater than'],
          ['<', 'Less than'],
          ['>=', 'Greater than or equal'],
          ['<=', 'Less than or equal'],
          ['<> or !=', 'Not equal'],
        ],
      },
      {
        type: 'table',
        title: 'Quick syntax reference',
        columns: ['Goal', 'Example'],
        rows: [
          ['Unique countries', 'SELECT DISTINCT Country FROM Customers;'],
          ['Filter by exact match', "SELECT * FROM Customers WHERE Country='Mexico';"],
          ['Combine conditions', "WHERE Country='Germany' AND City='Berlin'"],
          ['Sort descending', 'ORDER BY CustomerName DESC;'],
          ['Find missing values', 'WHERE Address IS NULL;'],
        ],
      },
    ],
    realWorldExample:
      'An e-commerce admin panel showing "Orders from Germany, newest first, excluding cancelled ones" is exactly a SELECT with a WHERE clause matching Germany and excluding cancelled status, combined with ORDER BY OrderDate DESC.',
    interviewQuestions: [
      { q: 'What does SELECT DISTINCT do?', a: 'Removes duplicate rows from the result, returning only unique combinations of the selected columns.' },
      { q: 'Why doesn\'t WHERE column = NULL work?', a: 'NULL represents the absence of a value, so it can\'t be compared with = — you need the special IS NULL operator instead.' },
      { q: 'Does ORDER BY sort ascending or descending by default?', a: 'Ascending (ASC) by default — DESC must be specified explicitly for descending order.' },
    ],
    commonMistakes: [
      { title: 'Trying WHERE column = NULL', detail: 'This silently returns zero rows in most databases — NULL must be checked with IS NULL or IS NOT NULL, never with an equality operator.' },
    ],
    revision: ['SELECT picks columns, WHERE filters rows, ORDER BY sorts', 'DISTINCT removes duplicates', 'Operators: =, >, <, >=, <=, <>', 'NULL needs IS NULL / IS NOT NULL'],
    relatedTopics: ['sql-basics', 'sql-pattern-range'],
  },

  {
    id: 'sql-pattern-range',
    title: 'LIKE, IN & BETWEEN',
    description: 'Three shortcuts for pattern matching, multiple values, and ranges.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'LIKE searches for a text pattern using wildcards, IN checks against a list of values, and BETWEEN checks whether a value falls within an inclusive range — all three are shorthand for what would otherwise take a long chain of OR conditions.',
    easyExplanation:
      'Instead of writing "WHERE country = \'Germany\' OR country = \'France\' OR country = \'UK\'", IN lets you list them all at once. Instead of matching an exact name, LIKE lets you search for a pattern ("starts with A"). BETWEEN replaces writing two separate >= and <= conditions with one clean range check.',
    whyImportant: 'These three show up in almost every practical SQL exercise — they\'re the fastest way to write cleaner, shorter WHERE clauses.',
    keyPoints: [
      'LIKE — searches for a pattern in text using wildcards',
      '% wildcard — matches zero, one, or many characters',
      '_ wildcard — matches exactly one character',
      'IN (value1, value2, ...) — shorthand for multiple OR conditions on the same column',
      'IN can also take a subquery: WHERE column IN (SELECT ...)',
      'BETWEEN value1 AND value2 — an inclusive range check (both ends included)',
    ],
    memoryTrick: { type: 'mnemonic', text: '% = "anything, any length"; _ = "exactly one mystery letter."' },
    visuals: [
      {
        type: 'table',
        title: 'LIKE wildcard patterns',
        columns: ['Pattern', 'Finds'],
        rows: [
          ["LIKE 'a%'", 'Values starting with "a"'],
          ["LIKE '%a'", 'Values ending with "a"'],
          ["LIKE '%or%'", '"or" anywhere in the value'],
          ["LIKE '_r%'", '"r" as the second character'],
          ["LIKE 'a_%'", 'Starts with "a", at least 2 characters long'],
          ["LIKE 'a%o'", 'Starts with "a" and ends with "o"'],
        ],
      },
      {
        type: 'circle',
        title: 'Three WHERE-clause shortcuts',
        center: 'Filter shortcuts',
        satellites: ['LIKE (pattern)', 'IN (list)', 'BETWEEN (range)'],
      },
      {
        type: 'table',
        title: 'Quick syntax reference',
        columns: ['Goal', 'Example'],
        rows: [
          ['Multiple exact values', "WHERE Country IN ('Germany','France','UK');"],
          ['Values from a subquery', 'WHERE Country IN (SELECT Country FROM Suppliers);'],
          ['Inclusive numeric range', 'WHERE Price BETWEEN 10 AND 20;'],
        ],
      },
    ],
    realWorldExample:
      'A product search box using LIKE \'%phone%\' to find anything with "phone" in the name, while a price filter slider behind the scenes uses BETWEEN to bound the price range.',
    interviewQuestions: [
      { q: 'What\'s the difference between % and _ in a LIKE pattern?', a: '% matches any number of characters (including zero); _ matches exactly one character.' },
      { q: 'Is BETWEEN inclusive or exclusive of its endpoints?', a: 'Inclusive — both the start and end values are included in the match.' },
      { q: 'Can IN take a subquery instead of a fixed list?', a: 'Yes — WHERE column IN (SELECT ...) is a very common pattern for matching against another query\'s results.' },
    ],
    commonMistakes: [
      { title: '"BETWEEN excludes the boundary values"', detail: 'BETWEEN 10 AND 20 includes both 10 and 20 — it\'s a closed, inclusive range, not an exclusive one.' },
    ],
    revision: ['LIKE = pattern match (% = any chars, _ = one char)', 'IN = shorthand for multiple ORs (or a subquery)', 'BETWEEN = inclusive range check'],
    relatedTopics: ['sql-select-where', 'sql-basics'],
  },

  {
    id: 'sql-modify-limit',
    title: 'INSERT, UPDATE, DELETE & LIMIT',
    description: 'Writing data into a table, changing it, removing it, and capping how many rows come back.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'INSERT adds new rows, UPDATE modifies existing ones, DELETE removes them, and TOP/LIMIT/FETCH FIRST caps how many rows a SELECT returns — the exact keyword for "limit rows" differs by database system.',
    easyExplanation:
      'If a table is a spreadsheet, INSERT adds a new row at the bottom, UPDATE edits cells in an existing row, and DELETE removes a row entirely. Capping results is like asking for only the "top 3" rows — but different database engines (SQL Server, MySQL, Oracle) each spell that request differently.',
    whyImportant: 'Modifying data safely (always pairing UPDATE/DELETE with a WHERE clause!) is a favorite interview trap question.',
    keyPoints: [
      'INSERT INTO table (col1, col2) VALUES (val1, val2) — adds a new row',
      'UPDATE table SET col = value WHERE condition — modifies matching rows',
      'DELETE FROM table WHERE condition — removes matching rows (no WHERE = deletes everything!)',
      'SELECT TOP n — SQL Server\'s way of limiting rows returned',
      'LIMIT n — MySQL/PostgreSQL\'s way of limiting rows returned',
      'FETCH FIRST n ROWS ONLY — the modern SQL-standard way (used with ORDER BY)',
      'WHERE ROWNUM <= n — the classic Oracle way of limiting rows',
    ],
    memoryTrick: { type: 'story', text: 'Same request ("just give me the top 3"), four different accents depending on which database you\'re talking to: TOP (SQL Server), LIMIT (MySQL), FETCH FIRST (standard SQL), ROWNUM (Oracle).' },
    visuals: [
      {
        type: 'comparison',
        title: 'UPDATE vs DELETE — the danger zone',
        left: { title: 'UPDATE without WHERE', points: ['Changes every row', 'Data isn\'t gone, just wrong', 'Still reversible with backups'] },
        right: { title: 'DELETE without WHERE', points: ['Removes every row', 'Table structure survives, data doesn\'t', 'Much harder to recover from'] },
      },
      {
        type: 'table',
        title: '"Limit my results" — same idea, different dialects',
        columns: ['Database system', 'Syntax'],
        rows: [
          ['SQL Server', 'SELECT TOP 3 * FROM Customers;'],
          ['MySQL / PostgreSQL', 'SELECT * FROM Customers LIMIT 3;'],
          ['Standard SQL', 'SELECT * FROM Customers ORDER BY Name FETCH FIRST 3 ROWS ONLY;'],
          ['Oracle (classic)', 'SELECT * FROM Customers WHERE ROWNUM <= 3;'],
        ],
      },
    ],
    realWorldExample:
      'A "top 3 best-selling products" widget on an admin dashboard is a plain SELECT with an ORDER BY and whichever row-limiting syntax that specific database uses.',
    interviewQuestions: [
      { q: 'What happens if you run DELETE FROM table without a WHERE clause?', a: 'Every row in the table is deleted — the table itself and its structure remain, but all data is gone.' },
      { q: 'Name two different ways to limit the number of rows returned.', a: 'Any two of: TOP (SQL Server), LIMIT (MySQL/PostgreSQL), FETCH FIRST n ROWS ONLY (standard SQL), or ROWNUM (Oracle).' },
      { q: 'What\'s the difference between UPDATE and DELETE?', a: 'UPDATE changes the values within existing rows; DELETE removes the rows entirely from the table.' },
    ],
    commonMistakes: [
      { title: 'Forgetting the WHERE clause on UPDATE/DELETE', detail: 'Without WHERE, both statements apply to every single row in the table — always double-check the WHERE clause before running either in production.' },
    ],
    revision: ['INSERT adds, UPDATE modifies, DELETE removes', 'Always pair UPDATE/DELETE with WHERE', 'TOP/LIMIT/FETCH FIRST/ROWNUM = same goal, different SQL dialects'],
    relatedTopics: ['sql-select-where', 'sql-ddl-syntax'],
  },

  {
    id: 'sql-ddl-syntax',
    title: 'CREATE, DROP, TRUNCATE & ALTER',
    description: 'Building and reshaping databases and tables themselves, not just the data inside them.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'CREATE builds a new database or table, DROP removes one entirely (structure and all), TRUNCATE empties a table\'s data while keeping its structure, and ALTER changes an existing table\'s columns.',
    easyExplanation:
      'If a table is a filing cabinet, CREATE builds a brand-new cabinet, DROP throws the whole cabinet away, TRUNCATE empties every drawer but keeps the cabinet, and ALTER adds, removes, or resizes drawers without touching what\'s still inside the others.',
    whyImportant: 'These are the DDL commands behind every schema-design and migration question — knowing exactly what survives each command is key.',
    keyPoints: [
      'CREATE DATABASE dbname; — creates a new database',
      'CREATE TABLE table (col1 type, col2 type, ...); — creates a new table with its columns',
      'DROP DATABASE / DROP TABLE — permanently removes the database/table, structure included',
      'TRUNCATE TABLE — deletes all rows but keeps the table\'s structure intact',
      'ALTER TABLE ... ADD column — adds a new column',
      'ALTER TABLE ... DROP COLUMN — removes a column',
      'ALTER TABLE ... MODIFY/ALTER COLUMN — changes a column\'s data type',
    ],
    memoryTrick: { type: 'mnemonic', text: 'CREATE builds it, DROP destroys it, TRUNCATE empties it, ALTER reshapes it.' },
    visuals: [
      {
        type: 'circle',
        title: 'Four ways to reshape structure',
        center: 'DDL Commands',
        satellites: ['CREATE', 'DROP', 'TRUNCATE', 'ALTER'],
      },
      {
        type: 'table',
        title: 'What survives each command?',
        columns: ['Command', 'Data survives?', 'Structure survives?'],
        rows: [
          ['DROP TABLE', 'No', 'No — the table is gone entirely'],
          ['TRUNCATE TABLE', 'No', 'Yes — empty table remains'],
          ['DELETE FROM table (no WHERE)', 'No', 'Yes — empty table remains'],
          ['ALTER TABLE', 'Yes (existing rows kept)', 'Yes, but modified'],
        ],
      },
      {
        type: 'table',
        title: 'ALTER TABLE quick reference',
        columns: ['Goal', 'Syntax'],
        rows: [
          ['Add a column', 'ALTER TABLE Customers ADD Email varchar(255);'],
          ['Remove a column', 'ALTER TABLE Customers DROP COLUMN Email;'],
          ['Change a column\'s type', 'ALTER TABLE Persons ALTER COLUMN DateOfBirth year;'],
        ],
      },
    ],
    realWorldExample:
      'Rolling out a new "loyalty points" feature means ALTER TABLE Customers ADD LoyaltyPoints int; — adding a column without touching any existing customer data.',
    interviewQuestions: [
      { q: 'Difference between DROP TABLE and TRUNCATE TABLE?', a: 'DROP TABLE removes the table entirely, structure included; TRUNCATE TABLE empties all the data but keeps the table\'s structure intact.' },
      { q: 'How do you add a new column to an existing table?', a: 'ALTER TABLE table_name ADD column_name datatype;' },
      { q: 'Is TRUNCATE the same as DELETE with no WHERE clause?', a: 'They both remove all rows and keep the structure, but TRUNCATE is typically faster and deallocates space immediately, while DELETE is logged row-by-row and more easily rolled back.' },
    ],
    commonMistakes: [
      { title: '"TRUNCATE and DROP do the same thing"', detail: 'TRUNCATE only empties the table\'s data — the table itself, its columns, and its structure all remain; DROP removes the table completely.' },
    ],
    revision: ['CREATE = build new', 'DROP = remove entirely (structure + data)', 'TRUNCATE = empty data, keep structure', 'ALTER = ADD/DROP COLUMN/MODIFY on an existing table'],
    relatedTopics: ['sql-modify-limit', 'sql-basics'],
  },

  {
    id: 'two-phase-locking',
    title: 'Two-Phase Locking (2PL)',
    description: 'The locking protocol that guarantees a schedule is conflict serializable.',
    readingTime: 5,
    difficulty: 'Hard',
    quickDefinition:
      'Two-Phase Locking (2PL) is a concurrency control protocol where every transaction acquires all the locks it needs (Growing Phase) before releasing any of them (Shrinking Phase) — once a transaction releases even one lock, it can never acquire a new one.',
    easyExplanation:
      'Imagine a transaction can only ever be in one of two moods: "collecting" (grabbing locks it needs) or "letting go" (releasing locks) — and once it starts letting go, it\'s absolutely forbidden from collecting again. That strict one-way switch is exactly what guarantees the resulting schedule is conflict serializable.',
    whyImportant: '2PL is the concrete mechanism behind the abstract idea of serializability — it\'s the natural "so how do you actually GUARANTEE that in practice?" follow-up.',
    keyPoints: [
      'Growing Phase — a transaction can only acquire (never release) locks',
      'Shrinking Phase — a transaction can only release (never acquire) locks',
      'Once the first lock is released, the transaction has entered the Shrinking Phase permanently',
      'Every schedule that follows 2PL is guaranteed to be conflict serializable',
      'Strict 2PL — all locks (not just write locks) are held until the transaction commits or aborts, avoiding cascading rollbacks entirely',
      '2PL can still suffer from deadlock, since it doesn\'t prevent transactions from waiting on each other\'s locks',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Grow, then Shrink — never the other way round, and never both at once.' },
    visuals: [
      {
        type: 'flow',
        title: 'The two phases, in order',
        steps: ['Growing Phase: acquire locks only', 'Lock point — the moment of the LAST lock acquired', 'Shrinking Phase: release locks only', 'Transaction ends'],
      },
      {
        type: 'comparison',
        title: '2PL vs Strict 2PL',
        left: { title: '2PL (basic)', points: ['Guarantees conflict serializability', 'Locks can be released before commit', 'Can still allow cascading rollbacks'] },
        right: { title: 'Strict 2PL', points: ['All the same guarantees as 2PL', 'ALL locks held until commit/abort', 'Prevents cascading rollbacks entirely'] },
      },
    ],
    realWorldExample:
      'A bank transfer transaction locks both the sender\'s and receiver\'s account rows before doing anything (Growing Phase), and only releases both locks once the entire transfer is fully committed (Shrinking Phase) — guaranteeing no other transaction sees a half-finished transfer.',
    interviewQuestions: [
      { q: 'What does 2PL guarantee?', a: 'That the resulting schedule is conflict serializable.' },
      { q: 'What happens the moment a transaction releases its first lock under 2PL?', a: 'It immediately and permanently enters the Shrinking Phase — it can never acquire a new lock again.' },
      { q: 'Does 2PL prevent deadlock?', a: 'No — 2PL guarantees serializability, but transactions can still end up waiting on each other\'s locks and deadlock; a separate deadlock detection/prevention scheme is still needed.' },
    ],
    commonMistakes: [
      { title: '"2PL means locks acquired in exactly two steps"', detail: '"Two-Phase" refers to two phases of BEHAVIOR (growing, then shrinking) across the whole transaction — not a fixed count of two individual lock operations.' },
      { title: '"2PL guarantees no deadlocks"', detail: '2PL only guarantees conflict serializability — deadlocks can still occur and need separate handling.' },
    ],
    revision: ['Growing Phase: acquire only', 'Shrinking Phase: release only', 'Guarantees conflict serializability', 'Strict 2PL: holds all locks until commit — avoids cascading rollback', '2PL does NOT prevent deadlock'],
    relatedTopics: ['schedules-serializability', 'transactions'],
  },

  {
    id: 'views-triggers-procedures',
    title: 'Views, Triggers & Stored Procedures',
    description: 'A virtual table, an automatic reaction, and a reusable batch of SQL — three ways to move logic into the database itself.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'A View is a saved, virtual table built from a query; a Trigger is code that runs automatically in response to a table event (INSERT/UPDATE/DELETE); a Stored Procedure is a reusable, named block of SQL that can be called on demand.',
    easyExplanation:
      'A View is like a saved search — it looks and behaves like a table, but under the hood it\'s really just running a stored query fresh every time you look at it. A Trigger is a tripwire — "the moment anyone updates this table, automatically also do this other thing," with zero manual effort needed each time. A Stored Procedure is a saved macro — a whole batch of SQL logic, written once and given a name, that you can call over and over without retyping it.',
    whyImportant: 'These three move logic INTO the database itself, and "when would you use a trigger vs a stored procedure?" is a very common design-thinking interview question.',
    keyPoints: [
      'View — a virtual table defined by a stored SELECT query; doesn\'t store data itself, just presents it',
      'Views can simplify complex joins, and restrict which columns/rows a user is allowed to see',
      'CREATE VIEW view_name AS SELECT ...; — basic view syntax',
      'Trigger — a block of code that runs automatically when a specified event (INSERT/UPDATE/DELETE) happens on a table',
      'Triggers are commonly used for auditing, enforcing complex business rules, or keeping related tables in sync',
      'Stored Procedure — a named, precompiled, reusable block of SQL logic, called explicitly (e.g. CALL procedure_name())',
      'Stored Procedures can accept parameters and return results, similar to a function in a programming language',
    ],
    memoryTrick: { type: 'mnemonic', text: 'A View is a saved SEARCH. A Trigger is an automatic REACTION. A Stored Procedure is a saved SCRIPT you call by name.' },
    visuals: [
      {
        type: 'circle',
        title: 'Three ways to push logic into the DB',
        center: 'Database Objects',
        satellites: ['View', 'Trigger', 'Stored Procedure'],
      },
      {
        type: 'table',
        title: 'When each one fires',
        columns: ['Object', 'Runs when…', 'Typical use'],
        rows: [
          ['View', 'Queried, just like a table', 'Simplify a complex join; restrict visible columns'],
          ['Trigger', 'Automatically, on INSERT/UPDATE/DELETE', 'Auditing, enforcing business rules, keeping tables in sync'],
          ['Stored Procedure', 'Only when explicitly called', 'Reusable, parameterized batches of logic'],
        ],
      },
    ],
    realWorldExample:
      'An e-commerce database might use a View to show only "InStockProducts" (hiding out-of-stock rows), a Trigger to automatically log every price change to a PriceHistory table, and a Stored Procedure named PlaceOrder() that handles the entire multi-step order logic in one reusable call.',
    interviewQuestions: [
      { q: 'Does a View store its own data?', a: 'No — a View is virtual; it re-runs its underlying stored query each time it\'s accessed rather than storing data separately.' },
      { q: 'When would you use a Trigger instead of a Stored Procedure?', a: 'When an action must happen automatically in response to a table event, without anyone needing to explicitly call it — a Stored Procedure only runs when it\'s deliberately invoked.' },
      { q: 'Can a Stored Procedure accept parameters?', a: 'Yes — it can take input parameters and return results, much like a function in a general-purpose programming language.' },
    ],
    commonMistakes: [
      { title: '"A View is just a copy of the table\'s data"', detail: 'A View stores no data of its own — it\'s a saved query definition that\'s re-executed against the live underlying tables every time it\'s accessed.' },
    ],
    revision: ['View = virtual table (saved query)', 'Trigger = auto-runs on INSERT/UPDATE/DELETE', 'Stored Procedure = reusable, callable block of SQL', 'Views simplify/restrict; Triggers react; Procedures get called'],
    relatedTopics: ['sql-basics', 'sql-subqueries-selfjoin'],
  },

  {
    id: 'sql-subqueries-selfjoin',
    title: 'Subqueries & Self Joins',
    description: 'A query nested inside another, and a table joined against itself.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'A subquery is a query nested inside another query, used to compute a value or set of values the outer query then relies on; a self join is a regular join where a table is joined against itself, useful for comparing rows within the same table.',
    easyExplanation:
      'A subquery is like answering a question by first quietly asking yourself a smaller question — "which employees earn more than the average salary?" first privately computes the average (the subquery), then uses that answer to filter the main list. A self join treats one table as if it were two separate copies of itself, so you can compare its own rows against each other — like finding which employee is whose manager, when both employees and managers live in the very same Employees table.',
    whyImportant: 'Writing a working self join live is one of the most common practical SQL interview exercises — it trips people up purely because the table name repeats.',
    keyPoints: [
      'Subquery (nested query) — a SELECT statement inside another SELECT, WHERE, or FROM clause',
      'Scalar subquery — returns a single value, usable anywhere a single value is expected',
      'Correlated subquery — references a column from the outer query, so it re-runs once per outer row (unlike a regular subquery, which runs just once)',
      'Self Join — a table joined with itself, using two different aliases to distinguish the "two copies"',
      'Self joins always require aliases (e.g. Employees AS e1, Employees AS e2), since a table can\'t be named twice in one query without them',
    ],
    memoryTrick: { type: 'mnemonic', text: 'A subquery answers a question INSIDE a question. A self join makes a table pretend to be two people talking to each other.' },
    visuals: [
      {
        type: 'comparison',
        title: 'Regular Subquery vs Correlated Subquery',
        left: { title: 'Regular Subquery', points: ['Runs once, independently', 'Result reused for every outer row', 'Faster — no per-row dependency'] },
        right: { title: 'Correlated Subquery', points: ['References the outer query\'s current row', 'Re-runs once per outer row', 'Slower, but needed for row-by-row comparisons'] },
      },
      {
        type: 'flow',
        title: 'How a self join works',
        steps: ['Same table given two aliases: e1 and e2', 'JOIN Employees e1, Employees e2', 'ON e1.ManagerID = e2.EmployeeID', 'Now e1 = employee, e2 = that employee\'s manager'],
      },
      {
        type: 'table',
        title: 'Quick syntax reference',
        columns: ['Goal', 'Example'],
        rows: [
          ['Above-average salary', 'WHERE Salary > (SELECT AVG(Salary) FROM Employees);'],
          ['Employee + their manager\'s name', 'SELECT e1.Name, e2.Name AS Manager FROM Employees e1 JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;'],
        ],
      },
    ],
    realWorldExample:
      'An org chart showing each employee alongside their manager\'s name is a textbook self join — both the employee and the manager live in the very same Employees table, just accessed through two different aliases.',
    interviewQuestions: [
      { q: 'What is a correlated subquery, and how is it different from a regular one?', a: 'A correlated subquery references a column from the outer query, so it re-executes once per outer row; a regular subquery runs just once, independent of the outer query\'s rows.' },
      { q: 'Why does a self join always need table aliases?', a: 'Because the same table is being referenced twice in one query, and SQL needs a way to distinguish which "copy" a column reference belongs to.' },
      { q: 'Give an example of when you\'d use a self join.', a: 'Finding each employee\'s manager, when both employees and managers are stored as rows in the very same Employees table.' },
    ],
    commonMistakes: [
      { title: '"A self join needs two separate tables"', detail: 'It uses just ONE table, referenced twice with two different aliases — no second table is ever involved.' },
    ],
    revision: ['Subquery = a query nested inside another', 'Correlated subquery: re-runs per outer row', 'Self join = one table, two aliases, joined to itself', 'Classic self-join use: employee ↔ manager'],
    relatedTopics: ['joins', 'views-triggers-procedures'],
  },
];

export default dbmsTopics;
