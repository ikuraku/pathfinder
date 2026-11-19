import { Difficulty, QuizQuestion } from '../models/quiz.model';

const q = (
  question: string,
  options: string[],
  answer: number,
  difficulty: Difficulty,
): QuizQuestion => ({ question, options, answer, difficulty });

// Each test: 3 easy (1 pt) + 4 medium (2 pts) + 3 hard (3 pts) = 20 points.
export const EXTRA_QUIZZES: Record<string, QuizQuestion[]> = {
  // ───────────── Cloud Computing ─────────────
  'cloud-computing': [
    q(
      'What does "cloud computing" mean?',
      [
        'Storing files only on a USB drive',
        'Delivering computing resources (servers, storage, databases) over the internet on demand',
        'Using only weather data',
        'A type of antivirus',
      ],
      1,
      1,
    ),
    q('Which of these is a cloud service model?', ['FTP', 'DNS', 'SaaS', 'RAID'], 2, 1),
    q(
      'What does "pay-as-you-go" mean in the cloud?',
      [
        'You pay a fixed price forever',
        'You pay only for the resources you actually use',
        'You pay only when you log in',
        'Everything is free',
      ],
      1,
      1,
    ),
    q(
      'Which model gives you virtual machines, storage and networks that you manage yourself?',
      ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
      2,
      2,
    ),
    q(
      'Which of these is a typical SaaS application?',
      ['Amazon EC2', 'Gmail', 'Terraform', 'A bare virtual machine'],
      1,
      2,
    ),
    q(
      'What is a public cloud?',
      [
        'A cloud used by a single company in its own data center',
        'Infrastructure owned by a provider and shared by many customers over the internet',
        'A free Wi-Fi network',
        'A backup stored on paper',
      ],
      1,
      2,
    ),
    q(
      'What does "elasticity" mean in the cloud?',
      [
        'The cloud never fails',
        'Data is always encrypted',
        'Resources can automatically scale up and down with demand',
        'Servers can be moved by hand',
      ],
      2,
      2,
    ),
    q(
      'In the shared responsibility model, who is responsible for securing the customer data and configuration?',
      ['The cloud provider alone', 'The customer', 'Nobody', 'The internet provider'],
      1,
      3,
    ),
    q(
      'What is a hybrid cloud?',
      [
        'Two public clouds from the same provider',
        'A mix of on-premises/private infrastructure and public cloud working together',
        'A cloud with no servers',
        'A mobile-only cloud',
      ],
      1,
      3,
    ),
    q(
      'Why deploy an application across several availability zones?',
      [
        'It makes the code shorter',
        'It removes the need for backups',
        'The app stays available if one data center fails',
        'It is always cheaper',
      ],
      2,
      3,
    ),
  ],

  // ───────────── AWS ─────────────
  aws: [
    q(
      'What does AWS stand for?',
      [
        'Advanced Web Services',
        'Amazon Web Services',
        'Automated Windows Server',
        'Application Web Software',
      ],
      1,
      1,
    ),
    q('Which AWS service provides object storage?', ['EC2', 'RDS', 'S3', 'Lambda'], 2, 1),
    q('Which AWS service provides virtual servers?', ['EC2', 'S3', 'IAM', 'CloudWatch'], 0, 1),
    q(
      'Which service lets you run code without managing servers?',
      ['Amazon EC2', 'AWS Lambda', 'Amazon S3', 'AWS IAM'],
      1,
      2,
    ),
    q(
      'What does AWS IAM manage?',
      [
        'Network speed',
        'Database backups',
        'Users, roles and permissions',
        'Billing invoices only',
      ],
      2,
      2,
    ),
    q(
      'Which service is a managed relational database service?',
      ['Amazon S3', 'Amazon RDS', 'Amazon SQS', 'AWS Lambda'],
      1,
      2,
    ),
    q(
      'What is an AWS Region?',
      [
        'A single server',
        'A type of storage',
        'A billing plan',
        'A geographic area containing several Availability Zones',
      ],
      3,
      2,
    ),
    q(
      'Which service distributes incoming traffic across several EC2 instances?',
      ['AWS CloudTrail', 'Elastic Load Balancing', 'Amazon Glacier', 'AWS Glue'],
      1,
      3,
    ),
    q(
      'Which S3 storage option is meant for long-term archives at the lowest cost?',
      ['S3 Standard', 'S3 Glacier Deep Archive', 'S3 Express One Zone', 'EBS'],
      1,
      3,
    ),
    q(
      'What does the principle of least privilege mean in IAM?',
      [
        'Give everyone admin rights',
        'Use one shared account',
        'Disable all permissions',
        'Grant only the permissions needed to do the task',
      ],
      3,
      3,
    ),
  ],

  // ───────────── Flutter ─────────────
  flutter: [
    q('Which programming language does Flutter use?', ['Kotlin', 'Swift', 'Dart', 'Java'], 2, 1),
    q('Which company created Flutter?', ['Apple', 'Google', 'Microsoft', 'Meta'], 1, 1),
    q(
      'In Flutter, almost everything is a...',
      ['Fragment', 'Activity', 'Controller', 'Widget'],
      3,
      1,
    ),
    q(
      'What is the difference between StatelessWidget and StatefulWidget?',
      [
        'A StatelessWidget can change its state',
        'They are identical',
        'A StatefulWidget has state that can change over time',
        'A StatefulWidget cannot display text',
      ],
      2,
      2,
    ),
    q(
      'Which method triggers a rebuild after changing state in a StatefulWidget?',
      ['refresh()', 'setState()', 'update()', 'rebuildNow()'],
      1,
      2,
    ),
    q('Which widget arranges its children vertically?', ['Row', 'Stack', 'Column', 'Wrap'], 2, 2),
    q(
      'Which file declares the dependencies of a Flutter project?',
      ['pubspec.yaml', 'package.json', 'AndroidManifest.xml', 'main.dart'],
      0,
      2,
    ),
    q(
      'What does Hot Reload do?',
      [
        'Restarts the phone',
        'Injects updated code into the running app while keeping its state',
        'Deletes the build folder',
        'Publishes the app to the store',
      ],
      1,
      3,
    ),
    q(
      'What does BuildContext represent?',
      [
        'The app theme',
        'The internet connection',
        'The location of a widget in the widget tree',
        'The database',
      ],
      2,
      3,
    ),
    q(
      'Which constructor builds a long scrollable list lazily, only for the visible items?',
      ['Column', 'ListView.builder', 'Row', 'Container'],
      1,
      3,
    ),
  ],

  // ───────────── Kotlin ─────────────
  kotlin: [
    q(
      'Which keyword declares a read-only variable in Kotlin?',
      ['var', 'val', 'let', 'const var'],
      1,
      1,
    ),
    q('How do you declare a function in Kotlin?', ['function', 'def', 'fun', 'func'], 2, 1),
    q(
      'Which platform officially recommends Kotlin as its preferred language?',
      ['Android', 'Windows Phone', 'Arduino', 'macOS Finder'],
      0,
      1,
    ),
    q(
      'What does the safe call operator ?. do?',
      [
        'Always throws an exception',
        'Calls the member only if the object is not null',
        'Converts to a string',
        'Declares a nullable type',
      ],
      1,
      2,
    ),
    q(
      'What is a data class mainly used for?',
      [
        'Opening network connections',
        'Drawing the UI',
        'Holding data, with equals(), hashCode(), toString() and copy() generated',
        'Running background threads',
      ],
      2,
      2,
    ),
    q(
      'What does "val name: String? = null" mean?',
      [
        'name can never be null',
        'name can hold a String or null',
        'name is a function',
        'name is a constant of type Int',
      ],
      1,
      2,
    ),
    q(
      'What does the Elvis operator ?: do?',
      [
        'Compares two strings',
        'Declares a lambda',
        'Casts a type',
        'Returns the right side if the left side is null',
      ],
      3,
      2,
    ),
    q(
      'What are coroutines used for?',
      [
        'Styling layouts',
        'Writing asynchronous, non-blocking code in a sequential style',
        'Compiling to JavaScript only',
        'Managing Gradle plugins',
      ],
      1,
      3,
    ),
    q(
      'What does an extension function allow?',
      [
        'Deleting a class',
        'Making a class final',
        'Adding a function to an existing class without modifying or inheriting from it',
        'Importing Java libraries only',
      ],
      2,
      3,
    ),
    q(
      'What is the difference between lateinit and lazy?',
      [
        'They are identical',
        'lateinit is for a non-null var initialized later, lazy computes a val on first access',
        'lazy is for functions only',
        'lateinit runs at compile time',
      ],
      1,
      3,
    ),
  ],

  // ───────────── Cybersecurity ─────────────
  cybersecurity: [
    q(
      'What does the CIA triad stand for in security?',
      [
        'Control, Inspection, Audit',
        'Confidentiality, Integrity, Availability',
        'Cryptography, Identity, Access',
        'Central Intelligence Agency',
      ],
      1,
      1,
    ),
    q(
      'What is phishing?',
      [
        'A hardware failure',
        'Fraudulent messages that trick users into revealing sensitive information',
        'A type of firewall',
        'A backup method',
      ],
      1,
      1,
    ),
    q(
      'Which password is the strongest?',
      [
        '123456',
        'password',
        'A long passphrase mixing letters, numbers and symbols',
        'Your birth date',
      ],
      2,
      1,
    ),
    q(
      'What does a firewall do?',
      [
        'Speeds up the internet',
        'Filters network traffic according to rules',
        'Stores passwords',
        'Compresses files',
      ],
      1,
      2,
    ),
    q(
      'What does multi-factor authentication (MFA) add?',
      [
        'A second proof of identity besides the password',
        'A faster login',
        'A bigger password',
        'A backup of the data',
      ],
      0,
      2,
    ),
    q(
      'What is SQL injection?',
      [
        'A database backup tool',
        'Inserting malicious SQL into an input to manipulate the database',
        'A way to speed up queries',
        'A type of index',
      ],
      1,
      2,
    ),
    q(
      'What is the difference between encryption and hashing?',
      [
        'Hashing is reversible, encryption is not',
        'They are the same',
        'Encryption is reversible with a key, hashing is one-way',
        'Hashing needs two keys',
      ],
      2,
      2,
    ),
    q(
      'What is Cross-Site Scripting (XSS)?',
      [
        'Copying a website design',
        'Injecting malicious scripts into pages viewed by other users',
        'Linking two servers',
        'A type of DDoS attack',
      ],
      1,
      3,
    ),
    q(
      'What does the principle of least privilege mean?',
      [
        'Users get only the minimum access needed for their job',
        'Everyone shares one admin account',
        'Privileges never expire',
        'Only the CEO has access',
      ],
      0,
      3,
    ),
    q(
      'What is a zero-day vulnerability?',
      [
        'A bug fixed on day zero',
        'A flaw unknown to the vendor, with no patch available yet',
        'A virus that deletes data in zero days',
        'A test environment',
      ],
      1,
      3,
    ),
  ],

  // ───────────── Networking ─────────────
  networking: [
    q(
      'What does IP stand for?',
      ['Internet Protocol', 'Internal Process', 'Input Port', 'Integrated Platform'],
      0,
      1,
    ),
    q(
      'Which protocol is used to load web pages securely?',
      ['FTP', 'HTTPS', 'SMTP', 'Telnet'],
      1,
      1,
    ),
    q(
      'Which device routes packets between different networks?',
      ['Switch', 'Hub', 'Router', 'Repeater'],
      2,
      1,
    ),
    q(
      'Which protocol translates domain names into IP addresses?',
      ['DHCP', 'DNS', 'ARP', 'NAT'],
      1,
      2,
    ),
    q('How many layers does the OSI model have?', ['4', '5', '6', '7'], 3, 2),
    q(
      'What does DHCP do?',
      [
        'Encrypts traffic',
        'Automatically assigns IP addresses to devices',
        'Blocks viruses',
        'Translates domain names',
      ],
      1,
      2,
    ),
    q('What is the default port of HTTPS?', ['80', '21', '443', '25'], 2, 2),
    q(
      'What is the difference between TCP and UDP?',
      [
        'TCP is connection-oriented and reliable, UDP is connectionless and faster without guarantees',
        'UDP is reliable, TCP is not',
        'They are the same',
        'TCP is only for email',
      ],
      0,
      3,
    ),
    q(
      'How many usable host addresses does a /24 network have?',
      ['256', '255', '254', '253'],
      2,
      3,
    ),
    q(
      'At which OSI layer do routers mainly operate?',
      ['Layer 1 (Physical)', 'Layer 2 (Data link)', 'Layer 3 (Network)', 'Layer 7 (Application)'],
      2,
      3,
    ),
  ],

  // ───────────── Node.js ─────────────
  nodejs: [
    q(
      'What is Node.js?',
      [
        "A JavaScript runtime built on Chrome's V8 engine that runs JavaScript outside the browser",
        'A CSS framework',
        'A database',
        'A code editor',
      ],
      0,
      1,
    ),
    q(
      'Which command installs a package with npm?',
      ['npm get', 'npm install', 'npm add-package', 'npm fetch'],
      1,
      1,
    ),
    q(
      "Which file lists a project's dependencies?",
      ['index.html', 'node.config', 'package.json', 'dependencies.txt'],
      2,
      1,
    ),
    q('Which built-in module is used to work with files?', ['http', 'fs', 'os', 'url'], 1, 2),
    q(
      'What is Express?',
      ['A minimal web framework for Node.js', 'A database', 'A testing tool', 'A package manager'],
      0,
      2,
    ),
    q(
      'What does "npm start" run?',
      [
        'The script named "start" in package.json',
        'The first file in the folder',
        'A test suite',
        'An update of all packages',
      ],
      0,
      2,
    ),
    q(
      'What does module.exports (or export) do?',
      [
        'Deletes a module',
        'Makes functions or values available to other files',
        'Starts the server',
        'Installs a package',
      ],
      1,
      2,
    ),
    q(
      'What does the event loop allow Node.js to do?',
      [
        'Run several threads for each request',
        'Handle many I/O operations without blocking, on a single main thread',
        'Compile TypeScript',
        'Open browser windows',
      ],
      1,
      3,
    ),
    q(
      'What is middleware in Express?',
      [
        'A database driver',
        'A function that runs between the request and the response and can call next()',
        'A CSS file',
        'A type of route',
      ],
      1,
      3,
    ),
    q(
      'Why is a heavy synchronous computation a problem in Node.js?',
      [
        'It uses too much disk space',
        'It blocks the event loop, so all other requests have to wait',
        'It deletes variables',
        'It is not allowed by npm',
      ],
      1,
      3,
    ),
  ],

  // ───────────── Spring Boot ─────────────
  spring: [
    q(
      'What is Spring Boot?',
      [
        'A JavaScript library',
        'A Java framework that simplifies creating stand-alone Spring applications with auto-configuration',
        'A database',
        'A cloud provider',
      ],
      1,
      1,
    ),
    q(
      'Which annotation marks the main class of a Spring Boot application?',
      ['@Main', '@SpringBootApplication', '@Start', '@Application'],
      1,
      1,
    ),
    q('Which language is Spring Boot mainly used with?', ['Python', 'PHP', 'Java', 'Ruby'], 2, 1),
    q(
      'Which annotation creates a REST controller?',
      ['@RestController', '@Service', '@Entity', '@Repository'],
      0,
      2,
    ),
    q(
      'What is dependency injection?',
      [
        'A component receives its dependencies from the container instead of creating them',
        'Copying code between projects',
        'A security attack',
        'A database migration',
      ],
      0,
      2,
    ),
    q(
      'Which annotation asks Spring to inject a bean automatically?',
      ['@Inject-me', '@Autowired', '@Create', '@Bean-it'],
      1,
      2,
    ),
    q(
      'Which file holds the main configuration of a Spring Boot app?',
      ['pom.xml only', 'application.properties (or application.yml)', 'config.js', 'settings.ini'],
      1,
      2,
    ),
    q(
      'What is Spring Data JPA used for?',
      [
        'Drawing the UI',
        'Simplifying database access with repositories',
        'Sending emails',
        'Compiling Java',
      ],
      1,
      3,
    ),
    q(
      'What does @Transactional do?',
      [
        'Runs the method in a transaction, with rollback on runtime exceptions',
        'Makes the method faster',
        'Makes the method private',
        'Encrypts the method result',
      ],
      0,
      3,
    ),
    q(
      'What is the default scope of a Spring bean?',
      ['Prototype', 'Request', 'Singleton', 'Session'],
      2,
      3,
    ),
  ],

  // ───────────── Django ─────────────
  django: [
    q('Which language is Django written in?', ['Ruby', 'Python', 'Java', 'PHP'], 1, 1),
    q(
      'Which command creates a new Django project?',
      ['django-admin startproject', 'django new', 'python create-django', 'pip start django'],
      0,
      1,
    ),
    q(
      'Which pattern does Django follow?',
      ['MVVM', 'MVC only', 'MTV (Model-Template-View)', 'Flux'],
      2,
      1,
    ),
    q(
      'Where are database models defined in a Django app?',
      ['views.py', 'models.py', 'urls.py', 'admin.py'],
      1,
      2,
    ),
    q(
      'What does "python manage.py migrate" do?',
      [
        'Starts the server',
        'Applies the model changes to the database schema',
        'Creates a superuser',
        'Runs the tests',
      ],
      1,
      2,
    ),
    q(
      'What is the Django admin?',
      [
        'A built-in interface to manage the data of your models',
        'A deployment tool',
        'A CSS library',
        'A testing framework',
      ],
      0,
      2,
    ),
    q('Which file maps URLs to views?', ['models.py', 'settings.py', 'urls.py', 'wsgi.py'], 2, 2),
    q(
      'What does the Django ORM let you do?',
      [
        'Query the database using Python objects instead of raw SQL',
        'Design web pages',
        'Send emails',
        'Compress images',
      ],
      0,
      3,
    ),
    q(
      'What does {% csrf_token %} protect against?',
      ['SQL injection', 'Cross-Site Request Forgery', 'Slow queries', 'Memory leaks'],
      1,
      3,
    ),
    q(
      'What is the difference between select_related and prefetch_related?',
      [
        'select_related uses a SQL JOIN for single-valued relations, prefetch_related runs separate queries and joins them in Python',
        'They are identical',
        'prefetch_related only works with images',
        'select_related deletes related objects',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Vue.js ─────────────
  vuejs: [
    q('Who created Vue.js?', ['Evan You', 'Jordan Walke', 'Misko Hevery', 'Brendan Eich'], 0, 1),
    q(
      'Which directive binds an attribute dynamically?',
      ['v-if', 'v-bind', 'v-text-only', 'v-link'],
      1,
      1,
    ),
    q('Which directive loops over a list?', ['v-loop', 'v-each', 'v-for', 'v-repeat'], 2, 1),
    q(
      'Which directive gives two-way binding on form inputs?',
      ['v-model', 'v-bind', 'v-on', 'v-show'],
      0,
      2,
    ),
    q('What is the shorthand of v-on:click?', ['#click', ':click', '@click', '&click'], 2, 2),
    q(
      'What is a computed property?',
      [
        'A cached value that is recalculated only when its dependencies change',
        'A CSS rule',
        'A server function',
        'An HTML attribute',
      ],
      0,
      2,
    ),
    q(
      'Which functions create reactive state in the Composition API?',
      ['ref() and reactive()', 'state() and store()', 'data() only', 'watchOnly()'],
      0,
      2,
    ),
    q(
      'What are props?',
      [
        'Local variables',
        'Custom attributes used to pass data from a parent to a child component',
        'CSS classes',
        'Server routes',
      ],
      1,
      3,
    ),
    q(
      'What is the difference between v-if and v-show?',
      [
        'v-if adds/removes the element from the DOM, v-show toggles its CSS display',
        'They are identical',
        'v-show removes the element from the DOM',
        'v-if only works on buttons',
      ],
      0,
      3,
    ),
    q(
      'What is Pinia?',
      [
        'The official state management library for Vue',
        'A CSS framework',
        'A testing library',
        'A build tool',
      ],
      0,
      3,
    ),
  ],

  // ───────────── PostgreSQL ─────────────
  postgresql: [
    q(
      'What is PostgreSQL?',
      [
        'An open-source relational database',
        'A JavaScript framework',
        'A cloud provider',
        'A text editor',
      ],
      0,
      1,
    ),
    q(
      'Which command-line tool opens an interactive PostgreSQL terminal?',
      ['pgsh', 'psql', 'postgres-cli', 'pgrun'],
      1,
      1,
    ),
    q('Which data type stores text of any length?', ['CHAR(1)', 'INT', 'TEXT', 'BOOLEAN'], 2, 1),
    q(
      'What does SERIAL do for a column?',
      [
        'Encrypts it',
        'Creates an auto-incrementing integer',
        'Makes it a foreign key',
        'Sorts the table',
      ],
      1,
      2,
    ),
    q(
      'What is a foreign key?',
      [
        'A column that references the primary key of another table',
        'A password column',
        'A column with random values',
        'An index type',
      ],
      0,
      2,
    ),
    q(
      'What does EXPLAIN show?',
      [
        'The table structure',
        'The execution plan of a query',
        'The list of users',
        'The server logs',
      ],
      1,
      2,
    ),
    q(
      'Which data type stores JSON with indexing support?',
      ['JSONB', 'XMLTEXT', 'BLOBJSON', 'OBJECT'],
      0,
      2,
    ),
    q(
      'What does VACUUM do?',
      [
        'Deletes the database',
        'Reclaims storage from dead rows and helps keep statistics up to date',
        'Backs up the data',
        'Encrypts the tables',
      ],
      1,
      3,
    ),
    q(
      'Which index type is created by default with CREATE INDEX?',
      ['Hash', 'GiST', 'B-tree', 'BRIN'],
      2,
      3,
    ),
    q(
      'What does MVCC (Multi-Version Concurrency Control) allow?',
      [
        'Readers do not block writers, and writers do not block readers',
        'Only one user at a time',
        'Automatic backups',
        'Faster network',
      ],
      0,
      3,
    ),
  ],

  // ───────────── MongoDB ─────────────
  mongodb: [
    q(
      'What kind of database is MongoDB?',
      ['Relational (SQL)', 'NoSQL document database', 'Graph-only database', 'Spreadsheet'],
      1,
      1,
    ),
    q(
      'In which format does MongoDB store documents?',
      ['BSON (binary JSON)', 'CSV', 'YAML', 'Plain text'],
      0,
      1,
    ),
    q(
      'What is a collection in MongoDB?',
      ['A group of documents, similar to a table', 'A user account', 'A backup', 'A query'],
      0,
      1,
    ),
    q(
      'Which method inserts a single document?',
      ['add()', 'insertOne()', 'push()', 'create-one()'],
      1,
      2,
    ),
    q(
      'Which filter selects documents where age is greater than 18?',
      ['{ age: { $gt: 18 } }', '{ age > 18 }', '{ $age: 18+ }', '{ age: "bigger" }'],
      0,
      2,
    ),
    q(
      'What is the _id field?',
      [
        'A password',
        'A unique identifier of each document (an ObjectId by default)',
        'The collection name',
        'The database size',
      ],
      1,
      2,
    ),
    q(
      'What does the aggregation pipeline do?',
      [
        'Backs up data',
        'Processes documents through stages such as $match and $group',
        'Creates users',
        'Compresses collections',
      ],
      1,
      2,
    ),
    q(
      'Why create an index on a field?',
      [
        'To speed up queries on that field',
        'To delete duplicates automatically',
        'To encrypt the field',
        'To rename the field',
      ],
      0,
      3,
    ),
    q(
      'What is sharding?',
      [
        'Copying data to a second disk',
        'Distributing data across several servers horizontally',
        'Encrypting data',
        'Deleting old data',
      ],
      1,
      3,
    ),
    q(
      'What is a replica set?',
      [
        'A group of MongoDB servers holding the same data for redundancy and high availability',
        'A set of indexes',
        'A set of queries',
        'A single large server',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Pandas ─────────────
  pandas: [
    q(
      'What is Pandas?',
      [
        'A Python library for data analysis and manipulation',
        'A web browser',
        'A database server',
        'A JavaScript framework',
      ],
      0,
      1,
    ),
    q(
      'What is the main 2D data structure of Pandas?',
      ['Array', 'DataFrame', 'Tuple', 'Graph'],
      1,
      1,
    ),
    q(
      'Which function reads a CSV file?',
      ['pd.load_csv()', 'pd.open_csv()', 'pd.read_csv()', 'pd.csv()'],
      2,
      1,
    ),
    q(
      'Which method shows the first 5 rows of a DataFrame?',
      ['head()', 'first()', 'top()', 'begin()'],
      0,
      2,
    ),
    q(
      'How do you select the column "age" of a DataFrame df?',
      ['df.get_row("age")', 'df["age"]', 'df(age)', 'df->age'],
      1,
      2,
    ),
    q(
      'Which method gives summary statistics (count, mean, std...)?',
      ['stats()', 'summary()', 'describe()', 'info_all()'],
      2,
      2,
    ),
    q(
      'Which method removes rows with missing values?',
      ['dropna()', 'clean()', 'remove_nan()', 'fillna()'],
      0,
      2,
    ),
    q(
      'What is the difference between loc and iloc?',
      [
        'loc selects by labels, iloc selects by integer positions',
        'They are identical',
        'iloc selects by labels, loc by positions',
        'loc only works on columns',
      ],
      0,
      3,
    ),
    q(
      'What does groupby() do?',
      [
        'Sorts the columns',
        'Splits the data into groups so you can apply an aggregation',
        'Deletes duplicates',
        'Merges two files',
      ],
      1,
      3,
    ),
    q(
      'What does pd.merge() do?',
      [
        'Combines DataFrames with a SQL-like join on keys',
        'Splits a DataFrame',
        'Plots a chart',
        'Saves a file',
      ],
      0,
      3,
    ),
  ],

  // ───────────── TensorFlow ─────────────
  tensorflow: [
    q('Which company developed TensorFlow?', ['Facebook', 'Google', 'Amazon', 'IBM'], 1, 1),
    q(
      'What is a tensor?',
      [
        'A multi-dimensional array of numbers',
        'A type of database',
        'A web server',
        'A neural network layer only',
      ],
      0,
      1,
    ),
    q(
      'Which high-level API is used to build models in TensorFlow?',
      ['Keras', 'Flask', 'Pandas', 'Django'],
      0,
      1,
    ),
    q(
      'Which layer type is commonly used for images?',
      ['Embedding', 'Conv2D', 'LSTM only', 'Dropout'],
      1,
      2,
    ),
    q(
      'What does model.fit() do?',
      ['Saves the model', 'Trains the model on data', 'Deletes the model', 'Draws the model'],
      1,
      2,
    ),
    q(
      'What is an epoch?',
      [
        'One full pass over the training dataset',
        'One neuron',
        'One batch of data',
        'One prediction',
      ],
      0,
      2,
    ),
    q(
      'Which activation function is typical for the output of a binary classifier?',
      ['ReLU', 'Softmax only', 'Sigmoid', 'Tanh'],
      2,
      2,
    ),
    q(
      'What is overfitting?',
      [
        'The model is too small',
        'The model performs well on training data but poorly on new data',
        'The model trains too fast',
        'The data has no labels',
      ],
      1,
      3,
    ),
    q(
      'What does a Dropout layer do?',
      [
        'Randomly deactivates neurons during training to reduce overfitting',
        'Deletes the dataset',
        'Adds more data',
        'Speeds up the GPU',
      ],
      0,
      3,
    ),
    q(
      'What is the role of an optimizer such as Adam?',
      [
        'It loads the data',
        'It updates the weights to minimize the loss, using gradients',
        'It draws charts',
        'It exports the model',
      ],
      1,
      3,
    ),
  ],

  // ───────────── Kubernetes ─────────────
  kubernetes: [
    q(
      'What is Kubernetes?',
      [
        'An open-source platform to orchestrate containers',
        'A programming language',
        'A database',
        'A web browser',
      ],
      0,
      1,
    ),
    q(
      'What is the smallest deployable unit in Kubernetes?',
      ['Node', 'Pod', 'Cluster', 'Namespace'],
      1,
      1,
    ),
    q(
      'Which command-line tool is used to talk to a cluster?',
      ['kubectl', 'kubeadmin-cli', 'k8run', 'dockerctl'],
      0,
      1,
    ),
    q(
      'What does a Deployment manage?',
      [
        'Only the network',
        'The desired number of pod replicas and rolling updates',
        'The cluster hardware',
        'The DNS',
      ],
      1,
      2,
    ),
    q(
      'What does a Service provide?',
      [
        'A stable network endpoint to reach a set of pods',
        'A container image',
        'A disk',
        'A CPU limit',
      ],
      0,
      2,
    ),
    q(
      'What is a Node?',
      [
        'A worker machine (virtual or physical) that runs pods',
        'A type of secret',
        'A YAML file',
        'A container image',
      ],
      0,
      2,
    ),
    q(
      'What is a Namespace used for?',
      [
        'Encrypting traffic',
        'Creating a virtual cluster to isolate resources',
        'Building images',
        'Monitoring only',
      ],
      1,
      2,
    ),
    q(
      'What is a ConfigMap used for?',
      [
        'Storing non-sensitive configuration data',
        'Storing passwords only',
        'Running containers',
        'Scaling pods',
      ],
      0,
      3,
    ),
    q(
      'What does the kubelet do?',
      [
        'Builds images',
        'Runs on each node and makes sure the containers of the pods are running',
        'Stores the cluster state',
        'Routes external traffic',
      ],
      1,
      3,
    ),
    q(
      'What does the Horizontal Pod Autoscaler (HPA) do?',
      [
        'Adds nodes manually',
        'Changes the number of pod replicas based on metrics such as CPU usage',
        'Updates the Kubernetes version',
        'Deletes unused images',
      ],
      1,
      3,
    ),
  ],

  // ───────────── Microsoft Azure ─────────────
  azure: [
    q('Which company provides Azure?', ['Amazon', 'Microsoft', 'Google', 'Oracle'], 1, 1),
    q(
      'Which service provides virtual machines in Azure?',
      ['Azure Virtual Machines', 'Azure Blob Storage', 'Azure DevOps', 'Azure Monitor'],
      0,
      1,
    ),
    q(
      'Which Azure service stores unstructured objects such as files and images?',
      ['Azure SQL', 'Blob Storage', 'Azure AD', 'Azure Functions'],
      1,
      1,
    ),
    q(
      'What is a Resource Group?',
      [
        'A logical container for related Azure resources',
        'A type of virtual machine',
        'A billing account',
        'A network cable',
      ],
      0,
      2,
    ),
    q(
      "Which service is Azure's identity and access management service?",
      ['Azure Blob', 'Azure DevOps', 'Microsoft Entra ID (Azure AD)', 'Azure Monitor'],
      2,
      2,
    ),
    q(
      'Which service runs serverless code in Azure?',
      ['Azure Functions', 'Azure Disk', 'Azure Files', 'Azure Backup'],
      0,
      2,
    ),
    q(
      'What does AKS stand for?',
      [
        'Azure Key Service',
        'Azure Kubernetes Service',
        'Azure Kernel System',
        'Application Kit Studio',
      ],
      1,
      2,
    ),
    q(
      'Which service is a managed relational database in Azure?',
      ['Azure Cosmos DB only', 'Azure Queue', 'Azure SQL Database', 'Azure Front Door'],
      2,
      3,
    ),
    q(
      'What does Azure Monitor do?',
      [
        'Collects and analyzes metrics and logs from your resources',
        'Creates virtual networks',
        'Hosts websites only',
        'Manages invoices',
      ],
      0,
      3,
    ),
    q(
      'What are Availability Zones?',
      [
        'Physically separate locations inside a region, used for resilience',
        'Billing categories',
        'Types of storage',
        'Different Azure subscriptions',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Google Cloud ─────────────
  googlecloud: [
    q(
      'What does GCP stand for?',
      [
        'General Cloud Provider',
        'Google Cloud Platform',
        'Global Computing Protocol',
        'Google Code Pipeline',
      ],
      1,
      1,
    ),
    q(
      'Which service provides virtual machines in Google Cloud?',
      ['Compute Engine', 'BigQuery', 'Cloud Storage', 'Pub/Sub'],
      0,
      1,
    ),
    q(
      'Which service provides object storage?',
      ['Cloud SQL', 'Cloud Storage', 'Cloud Build', 'Cloud DNS'],
      1,
      1,
    ),
    q(
      'Which service runs serverless functions?',
      ['Cloud Functions', 'Compute Engine', 'Cloud Armor', 'Cloud NAT'],
      0,
      2,
    ),
    q(
      "Which service is Google Cloud's serverless data warehouse?",
      ['Cloud Storage', 'BigQuery', 'Cloud Run', 'Firestore'],
      1,
      2,
    ),
    q(
      'What does GKE stand for?',
      [
        'Google Kernel Engine',
        'Google Kubernetes Engine',
        'Global Key Exchange',
        'Google Knowledge Editor',
      ],
      1,
      2,
    ),
    q(
      'Which service controls who can do what on resources?',
      ['IAM', 'VPC', 'CDN', 'KMS only'],
      0,
      2,
    ),
    q(
      'What is Cloud Run?',
      [
        'A serverless platform to run containers',
        'A code editor',
        'A relational database',
        'A monitoring dashboard',
      ],
      0,
      3,
    ),
    q(
      'What is a Project in Google Cloud?',
      [
        'An entity that groups resources, billing and permissions',
        'A type of VM',
        'A programming language',
        'A network cable',
      ],
      0,
      3,
    ),
    q(
      'What is Pub/Sub used for?',
      [
        'Asynchronous messaging between services',
        'Storing images',
        'Running SQL queries',
        'Managing DNS',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Terraform ─────────────
  terraform: [
    q(
      'What is Terraform?',
      ['An Infrastructure as Code tool', 'A programming language', 'A web browser', 'A database'],
      0,
      1,
    ),
    q(
      'Which language is used to write Terraform configurations?',
      ['HCL (HashiCorp Configuration Language)', 'Java', 'C#', 'Assembly'],
      0,
      1,
    ),
    q(
      'Which file extension do Terraform configuration files use?',
      ['.tfx', '.terra', '.tf', '.hcl-only'],
      2,
      1,
    ),
    q(
      'What does "terraform init" do?',
      [
        'Deletes the infrastructure',
        'Initializes the working directory and downloads providers',
        'Applies the changes',
        'Shows the state',
      ],
      1,
      2,
    ),
    q(
      'What does "terraform plan" do?',
      [
        'Shows the changes that would be made, without applying them',
        'Creates the infrastructure immediately',
        'Destroys everything',
        'Formats the code',
      ],
      0,
      2,
    ),
    q(
      'What does "terraform apply" do?',
      [
        'Only validates the syntax',
        'Creates or updates the infrastructure to match the configuration',
        'Downloads Terraform',
        'Deletes the state file',
      ],
      1,
      2,
    ),
    q(
      'What is a provider?',
      [
        'A plugin that lets Terraform talk to an API such as AWS or Azure',
        'A person who writes the code',
        'A type of server',
        'A state backup',
      ],
      0,
      2,
    ),
    q(
      'What does the state file record?',
      [
        'The mapping between your configuration and the real infrastructure',
        'The list of developers',
        'The cost of the cloud',
        'The syntax errors',
      ],
      0,
      3,
    ),
    q(
      'What is a Terraform module?',
      ['A reusable group of resources', 'A cloud region', 'A kind of provider', 'A log file'],
      0,
      3,
    ),
    q(
      'Why use a remote backend with state locking in a team?',
      [
        'To share the state and avoid two people changing it at the same time',
        'To make the code shorter',
        'To avoid writing providers',
        'To remove the need for plan',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Ansible ─────────────
  ansible: [
    q(
      'What is Ansible?',
      [
        'An automation tool for configuration management and deployment',
        'A database',
        'A programming language',
        'A web framework',
      ],
      0,
      1,
    ),
    q('Which format are Ansible playbooks written in?', ['XML', 'YAML', 'Binary', 'CSV'], 1, 1),
    q(
      'How does Ansible usually connect to managed machines?',
      [
        'With an agent installed on each machine',
        'Over SSH, without any agent',
        'By email',
        'With Bluetooth',
      ],
      1,
      1,
    ),
    q(
      'What is an inventory?',
      ['A list of managed hosts', 'A list of playbooks', 'A backup file', 'A log file'],
      0,
      2,
    ),
    q(
      'What is a playbook?',
      [
        'A file describing tasks to run on hosts',
        'A type of server',
        'A password file',
        'A network cable',
      ],
      0,
      2,
    ),
    q(
      'What is an Ansible module?',
      [
        'A unit of work, such as apt or copy, executed by a task',
        'A cloud region',
        'A type of inventory',
        'A user account',
      ],
      0,
      2,
    ),
    q(
      'Which command runs a playbook?',
      ['ansible-run', 'ansible-playbook', 'playbook-start', 'ansible --play'],
      1,
      2,
    ),
    q(
      'What does idempotence mean?',
      [
        'Running a task several times gives the same final result',
        'Running tasks in parallel',
        'Tasks always fail',
        'Tasks need a password',
      ],
      0,
      3,
    ),
    q(
      'What are roles?',
      [
        'A reusable way to organize tasks, variables and files',
        'User permissions in Linux',
        'Types of hosts',
        'Cloud accounts',
      ],
      0,
      3,
    ),
    q(
      'What is Ansible Vault used for?',
      [
        'Encrypting sensitive data such as passwords',
        'Compressing playbooks',
        'Monitoring servers',
        'Creating virtual machines',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Jenkins ─────────────
  jenkins: [
    q(
      'What is Jenkins?',
      [
        'An open-source automation server for CI/CD',
        'A database',
        'A programming language',
        'A cloud provider',
      ],
      0,
      1,
    ),
    q('Which language is Jenkins written in?', ['Python', 'Java', 'Go', 'Ruby'], 1, 1),
    q(
      'What does CI stand for?',
      ['Code Inspection', 'Continuous Integration', 'Cloud Infrastructure', 'Central Interface'],
      1,
      1,
    ),
    q(
      'What is a Jenkinsfile?',
      ['A file that defines the pipeline as code', 'A log file', 'A plugin', 'A user database'],
      0,
      2,
    ),
    q(
      'Which two syntaxes exist for Jenkins pipelines?',
      ['Declarative and Scripted', 'Simple and Complex', 'Static and Dynamic', 'Fast and Slow'],
      0,
      2,
    ),
    q(
      'What is a "stage" in a pipeline?',
      ['A logical step such as Build, Test or Deploy', 'A user', 'A server room', 'A plugin'],
      0,
      2,
    ),
    q(
      'What is an agent (node) in Jenkins?',
      [
        'A machine where pipeline steps run',
        'A person who approves builds',
        'A type of plugin',
        'A Git branch',
      ],
      0,
      2,
    ),
    q(
      'How can a build start automatically after a code push?',
      [
        'With a webhook or SCM polling',
        'Only by clicking a button',
        'By restarting the server',
        'It is impossible',
      ],
      0,
      3,
    ),
    q(
      'What are Jenkins plugins?',
      ['Extensions that add features to Jenkins', 'Test files', 'Docker images', 'Git commits'],
      0,
      3,
    ),
    q(
      'Where should secrets such as passwords be stored in Jenkins?',
      [
        'In the Jenkinsfile in plain text',
        'In the Jenkins Credentials store',
        'In a public README',
        'In the build log',
      ],
      1,
      3,
    ),
  ],

  // ───────────── GitHub ─────────────
  github: [
    q(
      'What is GitHub?',
      [
        'A platform that hosts Git repositories with collaboration features',
        'A programming language',
        'A database',
        'An operating system',
      ],
      0,
      1,
    ),
    q(
      'What is a pull request?',
      [
        'A request to download a file',
        'A proposal to merge changes from one branch into another, with review',
        'A bug report',
        'A backup',
      ],
      1,
      1,
    ),
    q(
      'What is a fork?',
      [
        'A deleted repository',
        'A personal copy of another repository',
        'A type of commit',
        'A merge conflict',
      ],
      1,
      1,
    ),
    q(
      'What are GitHub Actions?',
      [
        'Automation workflows for CI/CD and other tasks',
        'Social media posts',
        'Code editors',
        'Billing plans',
      ],
      0,
      2,
    ),
    q(
      'Where are GitHub Actions workflows stored?',
      [
        'In YAML files in .github/workflows',
        'In the Settings page only',
        'In the README',
        'In a database',
      ],
      0,
      2,
    ),
    q(
      'What is a GitHub issue?',
      [
        'A way to track tasks, bugs and ideas',
        'A security breach',
        'A type of branch',
        'A deployment',
      ],
      0,
      2,
    ),
    q(
      'What is the README.md file for?',
      ['Describing the project', 'Storing passwords', 'Compiling the code', 'Listing commits'],
      0,
      2,
    ),
    q(
      'What can branch protection rules require?',
      [
        'Reviews and passing status checks before merging',
        'Nothing, they are decorative',
        'Deleting old branches',
        'Using a specific editor',
      ],
      0,
      3,
    ),
    q(
      'What does Dependabot do?',
      [
        'Opens pull requests to update outdated or vulnerable dependencies',
        'Writes code for you',
        'Deletes repositories',
        'Hosts websites',
      ],
      0,
      3,
    ),
    q(
      'What are GitHub Secrets used for?',
      [
        'Storing encrypted sensitive values for workflows',
        'Hiding repositories from the owner',
        'Writing private issues',
        'Encrypting commits',
      ],
      0,
      3,
    ),
  ],

  // ───────────── Bash ─────────────
  bash: [
    q(
      'What does the first line "#!/bin/bash" do?',
      [
        'It is a comment with no effect',
        'It tells the system to run the script with Bash',
        'It imports a library',
        'It deletes the script',
      ],
      1,
      1,
    ),
    q(
      'How do you assign a variable in Bash?',
      ['name = "value"', 'name="value"', 'var name := "value"', 'let name -> "value"'],
      1,
      1,
    ),
    q('Which command prints text on the screen?', ['print', 'echo', 'say', 'out'], 1, 1),
    q(
      'How do you read the first argument passed to a script?',
      ['$1', '$first', '%1', 'arg[0]'],
      0,
      2,
    ),
    q(
      'What does $? contain?',
      [
        'The process ID',
        'The exit status of the last command',
        'The current user',
        'The script name',
      ],
      1,
      2,
    ),
    q(
      'How do you make a script executable?',
      ['chmod +x script.sh', 'exec script.sh', 'run script.sh', 'make script.sh'],
      0,
      2,
    ),
    q(
      'Which syntax is a correct for loop?',
      [
        'for i in 1 2 3; do echo $i; done',
        'for (i = 0; i < 3; i++)',
        'foreach i in 1 2 3 { }',
        'loop 1 to 3',
      ],
      0,
      2,
    ),
    q(
      'What does "set -e" do?',
      [
        'Exits the script immediately if a command fails',
        'Enables colors',
        'Edits the script',
        'Sets an environment variable',
      ],
      0,
      3,
    ),
    q(
      'What is the difference between single and double quotes?',
      [
        'Double quotes expand variables, single quotes keep the text literal',
        'They are identical',
        'Single quotes expand variables',
        'Double quotes are only for numbers',
      ],
      0,
      3,
    ),
    q(
      'What does "cmd1 && cmd2" do?',
      [
        'Runs cmd2 only if cmd1 succeeds',
        'Runs both at the same time',
        'Runs cmd2 only if cmd1 fails',
        'Pipes cmd1 into cmd2',
      ],
      0,
      3,
    ),
  ],

  // ───────────── C ─────────────
  c: [
    q(
      'Who created the C language?',
      ['Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling', 'Guido van Rossum'],
      1,
      1,
    ),
    q(
      'Which function prints formatted text to the console?',
      ['print()', 'printf()', 'echo()', 'write()'],
      1,
      1,
    ),
    q(
      'Which header file is needed for printf?',
      ['<stdlib.h>', '<math.h>', '<stdio.h>', '<string.h>'],
      2,
      1,
    ),
    q(
      'What is a pointer?',
      ['A variable that stores a memory address', 'A type of loop', 'A function', 'A comment'],
      0,
      2,
    ),
    q(
      'What does sizeof return?',
      [
        'The size in bytes of a type or variable',
        'The number of lines',
        'The value of a pointer',
        'The length of a string',
      ],
      0,
      2,
    ),
    q(
      'How is a string represented in C?',
      [
        'As a special String type',
        "As an array of chars ending with the null character '\\0'",
        'As an integer',
        'As a struct of two numbers',
      ],
      1,
      2,
    ),
    q(
      'What does malloc do?',
      [
        'Frees memory',
        'Dynamically allocates memory on the heap',
        'Copies a string',
        'Opens a file',
      ],
      1,
      2,
    ),
    q(
      'What happens if you allocate with malloc but never call free?',
      ['Nothing, ever', 'A memory leak', 'A compile error', 'The program runs faster'],
      1,
      3,
    ),
    q(
      'What is a segmentation fault?',
      [
        'A syntax error',
        'A crash caused by accessing memory the program is not allowed to access',
        'A slow loop',
        'A missing header',
      ],
      1,
      3,
    ),
    q(
      'What is the main difference between stack and heap memory?',
      [
        'Stack memory is managed automatically and is fast, heap memory is managed manually',
        'They are the same',
        'Heap memory is managed automatically',
        'The stack is only for strings',
      ],
      0,
      3,
    ),
  ],

  // ───────────── C++ ─────────────
  cplusplus: [
    q('C++ is an extension of which language?', ['Java', 'C', 'Python', 'Pascal'], 1, 1),
    q(
      'Which object is used to print to the console?',
      ['std::print', 'std::cout', 'System.out', 'console.log'],
      1,
      1,
    ),
    q(
      'Which header is needed for std::cout?',
      ['<iostream>', '<stdio>', '<console>', '<output.h>'],
      0,
      1,
    ),
    q(
      'What is a class?',
      [
        'A blueprint that combines data and functions',
        'A type of loop',
        'A compiler option',
        'A comment style',
      ],
      0,
      2,
    ),
    q(
      'What is a reference (&)?',
      [
        'A copy of a value',
        'An alias for an existing variable',
        'A pointer to a function only',
        'A constant',
      ],
      1,
      2,
    ),
    q(
      'Which STL container is a dynamic array?',
      ['std::vector', 'std::map', 'std::pair', 'std::queue'],
      0,
      2,
    ),
    q(
      'What is a constructor?',
      [
        'A special method called when an object is created',
        'A method that deletes an object',
        'A global variable',
        'A header file',
      ],
      0,
      2,
    ),
    q(
      'What does the virtual keyword enable?',
      ['Runtime polymorphism', 'Faster compilation', 'Static variables', 'Multi-threading'],
      0,
      3,
    ),
    q(
      'What is RAII?',
      [
        'Resource Acquisition Is Initialization: resources are tied to the lifetime of objects',
        'A debugging tool',
        'A type of template',
        'A compiler flag',
      ],
      0,
      3,
    ),
    q(
      'What does std::unique_ptr do?',
      [
        'Automatically frees the memory it owns when it goes out of scope',
        'Shares ownership between many pointers',
        'Disables memory allocation',
        'Converts pointers into integers',
      ],
      0,
      3,
    ),
  ],
};
