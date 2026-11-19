import { Difficulty, QuizQuestion } from '../models/quiz.model';
import { EXTRA_QUIZZES } from './skill-quizzes-extra';

const q = (
  question: string,
  options: string[],
  answer: number,
  difficulty: Difficulty,
): QuizQuestion => ({ question, options, answer, difficulty });

// The key is the id of the skill in SKILL_CATALOG.
// Each test: 3 easy (1 pt) + 4 medium (2 pts) + 3 hard (3 pts) = 20 points.
const CORE_QUIZZES: Record<string, QuizQuestion[]> = {
  python: [
    q('Which keyword defines a function in Python?', ['function', 'def', 'fun', 'define'], 1, 1),
    q('What does len([1, 2, 3]) return?', ['2', '4', '3', 'It raises an error'], 2, 1),
    q('Which symbol starts a single-line comment in Python?', ['//', '#', '--', '/*'], 1, 1),
    q(
      'What does print(type([])) display?',
      ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'array'>"],
      0,
      2,
    ),
    q(
      'Which expression builds the LIST of squares of 0 to 4?',
      [
        '[x^2 for x in range(5)]',
        '(x**2 for x in range(5))',
        '[x**2 for x in range(5)]',
        '{x**2 for x in range(5)}',
      ],
      2,
      2,
    ),
    q("What does 'hello'[1:3] return?", ["'he'", "'el'", "'ell'", "'hel'"], 1, 2),
    q('Which of these data types is immutable?', ['list', 'dict', 'set', 'tuple'], 3, 2),
    q(
      'Given def f(a, b=[]): b.append(a); return b — what does print(f(2)) show right after calling f(1)?',
      ['[2]', '[1, 2]', '[1]', 'An error'],
      1,
      3,
    ),
    q(
      'What does the yield keyword do in a function?',
      [
        'It stops the program',
        'It turns the function into a generator that produces values lazily',
        'It imports a module',
        'It raises an exception',
      ],
      1,
      3,
    ),
    q(
      'What is the average time complexity of checking "x in my_set" for a Python set?',
      ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      2,
      3,
    ),
  ],

  javascript: [
    q(
      'Which keyword declares a block-scoped variable that can be reassigned?',
      ['var', 'const', 'let', 'def'],
      2,
      1,
    ),
    q('What does typeof null return?', ['"null"', '"undefined"', '"object"', '"number"'], 2, 1),
    q(
      'Which array method adds an element at the end of an array?',
      ['push', 'pop', 'shift', 'unshift'],
      0,
      1,
    ),
    q("What is the result of '5' + 3 in JavaScript?", ['8', '"53"', 'NaN', 'An error'], 1, 2),
    q(
      'Which array method returns a NEW array with the result of a function applied to each element?',
      ['forEach', 'filter', 'map', 'push'],
      2,
      2,
    ),
    q(
      'What is the difference between == and ===?',
      [
        'No difference',
        '=== compares type and value, == converts types first',
        '== compares type and value, === converts types first',
        '=== only works with strings',
      ],
      1,
      2,
    ),
    q(
      'What does Promise.all() do?',
      [
        'Runs the promises one after another',
        'Resolves when all promises resolve, and rejects if one rejects',
        'Resolves with the first promise that finishes',
        'Cancels all the promises',
      ],
      1,
      2,
    ),
    q(
      'What does console.log(0.1 + 0.2 === 0.3) print?',
      ['true', 'false', 'undefined', 'It throws an error'],
      1,
      3,
    ),
    q(
      'What is a closure?',
      [
        'A function that closes the browser tab',
        'A function that keeps access to the variables of its outer scope, even after the outer function has returned',
        'A way to end a loop',
        'A function without parameters',
      ],
      1,
      3,
    ),
    q(
      "What is the order of the output? console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');",
      ['A, B, C', 'A, C, B', 'B, A, C', 'C, A, B'],
      1,
      3,
    ),
  ],

  typescript: [
    q(
      'What is TypeScript?',
      [
        'A database engine',
        'A superset of JavaScript that adds static types',
        'A CSS framework',
        'A replacement for HTML',
      ],
      1,
      1,
    ),
    q(
      'Which line declares a typed variable correctly?',
      [
        'let age = number 20;',
        'number age = 20;',
        'let age: number = 20;',
        'var age(number) = 20;',
      ],
      2,
      1,
    ),
    q('Which command compiles TypeScript into JavaScript?', ['tsc', 'tsjs', 'ts-run', 'jsc'], 0, 1),
    q(
      'What is an interface used for?',
      [
        'Running code at runtime',
        'Describing the shape of an object',
        'Importing modules',
        'Sending HTTP requests',
      ],
      1,
      2,
    ),
    q(
      'What does Partial<User> do?',
      [
        'Makes all properties of User optional',
        'Removes all properties',
        'Makes all properties readonly',
        'Converts User into an array',
      ],
      0,
      2,
    ),
    q(
      'What does the ? mean in "name?: string" inside an interface?',
      [
        'The property is optional',
        'The property is private',
        'The property can only be a number',
        'The property is readonly',
      ],
      0,
      2,
    ),
    q(
      'What does "let id: string | number" mean?',
      [
        'id must be both a string and a number',
        'id can hold a string or a number',
        'id is a function',
        'id is always empty',
      ],
      1,
      2,
    ),
    q(
      'Which type forces you to check a value before using it?',
      ['any', 'unknown', 'void', 'never'],
      1,
      3,
    ),
    q(
      'What does "function identity<T>(value: T): T" illustrate?',
      [
        'A decorator',
        'A generic: a reusable function that works with any type while keeping it',
        'An enum',
        'A namespace',
      ],
      1,
      3,
    ),
    q(
      'What does "keyof User" produce?',
      [
        'The values of User',
        'A union of the property names of User',
        'A copy of User',
        'The number of properties of User',
      ],
      1,
      3,
    ),
  ],

  angular: [
    q(
      'Which decorator declares an Angular component?',
      ['@Injectable', '@Component', '@Directive', '@Pipe'],
      1,
      1,
    ),
    q(
      'Which syntax is string interpolation in a template?',
      ['[value]', '(value)', '{{ value }}', '*value'],
      2,
      1,
    ),
    q(
      'Which command creates a new Angular project?',
      ['ng new', 'ng create', 'ng start', 'ng init'],
      0,
      1,
    ),
    q(
      'Which syntax is an event binding?',
      ['[click]="save()"', '(click)="save()"', '{{ click }}', '*click="save()"'],
      1,
      2,
    ),
    q(
      "What does providedIn: 'root' do on a service?",
      [
        'Creates a new instance for each component',
        'Provides one shared instance for the whole app',
        'Makes the service private to one module',
        'Deletes the service after first use',
      ],
      1,
      2,
    ),
    q(
      'What is an @Input() (or input()) used for?',
      [
        'Passing data from a parent component to a child component',
        'Sending data to the server',
        'Styling a component',
        'Creating a route',
      ],
      0,
      2,
    ),
    q(
      'Which Angular class is used to make HTTP requests?',
      ['HttpClient', 'FetchService', 'AjaxModule', 'RequestManager'],
      0,
      2,
    ),
    q(
      'Which RxJS operator cancels the previous inner request when a new value arrives (live search)?',
      ['mergeMap', 'concatMap', 'switchMap', 'exhaustMap'],
      2,
      3,
    ),
    q(
      'What does the async pipe do?',
      [
        'Makes a function run faster',
        'Subscribes to an Observable or Promise in the template and unsubscribes automatically',
        'Sorts an array',
        'Formats a date',
      ],
      1,
      3,
    ),
    q(
      'What is the role of a route guard such as canActivate?',
      [
        'It styles the active link',
        'It decides whether the navigation to a route is allowed',
        'It loads images faster',
        'It compiles the template',
      ],
      1,
      3,
    ),
  ],

  react: [
    q(
      'What is React?',
      [
        'A JavaScript library for building user interfaces',
        'A database',
        'A CSS preprocessor',
        'A Java framework',
      ],
      0,
      1,
    ),
    q(
      'Which hook manages state in a function component?',
      ['useFetch', 'useState', 'useClass', 'useRender'],
      1,
      1,
    ),
    q(
      'How do you pass data from a parent component to a child component?',
      ['Through props', 'Through CSS', 'Through the DOM id', 'Through cookies'],
      0,
      1,
    ),
    q(
      'What is JSX?',
      [
        'A database query language',
        'A CSS extension',
        'A syntax that lets you write HTML-like markup in JavaScript',
        'A testing tool',
      ],
      2,
      2,
    ),
    q(
      'What does the dependency array of useEffect control?',
      [
        'The CSS applied to the component',
        'When the effect runs again',
        'The component name',
        'The number of renders allowed',
      ],
      1,
      2,
    ),
    q(
      'What happens when you call the setter returned by useState?',
      [
        'Nothing',
        'React re-renders the component with the new state',
        'The page reloads',
        'The component is deleted',
      ],
      1,
      2,
    ),
    q(
      'Which is the correct way to handle a click in JSX?',
      [
        'onclick="handleClick()"',
        'onClick={handleClick}',
        '(click)="handleClick()"',
        'on-click=handleClick',
      ],
      1,
      2,
    ),
    q(
      'Why should list items have a stable "key" prop?',
      [
        'To style them differently',
        'To help React identify which items changed',
        'To sort them automatically',
        'To make them clickable',
      ],
      1,
      3,
    ),
    q(
      'What is useMemo used for?',
      [
        'Fetching data from an API',
        'Memoizing an expensive computed value between renders',
        'Creating a new component',
        'Handling routes',
      ],
      1,
      3,
    ),
    q(
      'Why should you avoid mutating state directly (for example state.push(x))?',
      [
        'It is slower to type',
        'React may not detect the change, so the UI may not update',
        'It deletes the component',
        'It is forbidden by the browser',
      ],
      1,
      3,
    ),
  ],

  java: [
    q(
      'Which is the entry point of a Java program?',
      [
        'public static void main(String[] args)',
        'void start()',
        'public main()',
        'static void run(String args)',
      ],
      0,
      1,
    ),
    q('Which of these is a primitive type?', ['String', 'ArrayList', 'int', 'Integer'], 2, 1),
    q('Which keyword creates a new object?', ['new', 'create', 'make', 'object'], 0, 1),
    q(
      'Which keyword makes a class inherit from another class?',
      ['implements', 'inherits', 'super', 'extends'],
      3,
      2,
    ),
    q(
      'What does the final keyword do on a variable?',
      [
        'It makes it global',
        'It prevents it from being reassigned',
        'It deletes it after use',
        'It makes it private',
      ],
      1,
      2,
    ),
    q(
      'Which collection does not allow duplicate elements?',
      ['List', 'Set', 'ArrayList', 'Queue'],
      1,
      2,
    ),
    q(
      'What does the static keyword mean on a method?',
      [
        'It can only be called once',
        'It belongs to the class, not to an instance',
        'It cannot return a value',
        'It is private',
      ],
      1,
      2,
    ),
    q(
      'What is the difference between == and equals() for Strings?',
      [
        'No difference',
        '== compares references, equals() compares content',
        '== compares content, equals() compares references',
        'equals() only works with numbers',
      ],
      1,
      3,
    ),
    q(
      'What happens if a method can throw a checked exception that is neither caught nor declared?',
      [
        'It runs normally',
        'The code does not compile',
        'The exception is ignored silently',
        'The JVM restarts',
      ],
      1,
      3,
    ),
    q(
      'What is the cost of get(i) on an ArrayList compared to a LinkedList?',
      [
        'ArrayList is O(1), LinkedList is O(n)',
        'Both are O(1)',
        'ArrayList is O(n), LinkedList is O(1)',
        'Both are O(n)',
      ],
      0,
      3,
    ),
  ],

  sql: [
    q('Which statement retrieves data from a table?', ['GET', 'FETCH', 'SELECT', 'OPEN'], 2, 1),
    q('Which clause filters rows?', ['ORDER BY', 'WHERE', 'GROUP BY', 'LIMIT'], 1, 1),
    q(
      'Which statement adds a new row to a table?',
      ['INSERT INTO', 'ADD ROW', 'NEW ROW', 'PUSH INTO'],
      0,
      1,
    ),
    q(
      'Which join returns all rows from the left table, even without a match?',
      ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'SELF JOIN'],
      1,
      2,
    ),
    q('Which expression counts all rows?', ['SUM(*)', 'TOTAL(*)', 'ROWS(*)', 'COUNT(*)'], 3, 2),
    q(
      'What is a primary key?',
      [
        'A column that uniquely identifies each row',
        'A password for the database',
        'The first column of a table',
        'A column that can contain duplicates',
      ],
      0,
      2,
    ),
    q(
      'What does SELECT DISTINCT do?',
      [
        'Sorts the result',
        'Removes duplicate rows from the result',
        'Deletes the table',
        'Counts the rows',
      ],
      1,
      2,
    ),
    q(
      'What is the difference between WHERE and HAVING?',
      [
        'None, they are identical',
        'HAVING filters groups after GROUP BY, WHERE filters rows before',
        'WHERE filters groups, HAVING filters rows',
        'HAVING only works with numbers',
      ],
      1,
      3,
    ),
    q(
      'What does this query return? SELECT * FROM a LEFT JOIN b ON a.id = b.a_id WHERE b.a_id IS NULL',
      [
        'Rows of a that have no match in b',
        'Rows of b that have no match in a',
        'Only rows that match in both tables',
        'All rows of both tables',
      ],
      0,
      3,
    ),
    q(
      'What does the Atomicity property of ACID guarantee?',
      [
        'Queries run faster',
        'A transaction is all-or-nothing',
        'Data is encrypted',
        'Tables never have duplicates',
      ],
      1,
      3,
    ),
  ],

  html: [
    q(
      'Which element defines the main heading of a page?',
      ['<head>', '<h1>', '<title>', '<header>'],
      1,
      1,
    ),
    q('Which attribute sets the destination of a link?', ['src', 'link', 'href', 'url'], 2, 1),
    q('Which element creates a paragraph?', ['<p>', '<para>', '<text>', '<pg>'], 0, 1),
    q(
      'Which element is semantic for a group of navigation links?',
      ['<div>', '<span>', '<section>', '<nav>'],
      3,
      2,
    ),
    q(
      'Which attribute gives alternative text to an image?',
      ['title', 'alt', 'caption', 'text'],
      1,
      2,
    ),
    q(
      'What is the difference between <div> and <span>?',
      [
        '<div> is block-level, <span> is inline',
        '<div> is inline, <span> is block-level',
        'There is no difference',
        '<span> can only contain images',
      ],
      0,
      2,
    ),
    q(
      'Which attribute makes a form field mandatory?',
      ['mandatory', 'needed', 'required', 'important'],
      2,
      2,
    ),
    q(
      'What is the purpose of <!DOCTYPE html>?',
      [
        'It links the CSS file',
        'It tells the browser the page uses HTML5 standards mode',
        'It adds a comment',
        'It sets the page language',
      ],
      1,
      3,
    ),
    q(
      'What is the purpose of <meta name="viewport" content="width=device-width, initial-scale=1">?',
      [
        'It sets the page title',
        'It controls the layout on mobile devices (responsive design)',
        'It loads a script',
        'It adds a favicon',
      ],
      1,
      3,
    ),
    q(
      'Which script attribute downloads the file in parallel and runs it only after the HTML is fully parsed?',
      ['async', 'defer', 'preload', 'lazy'],
      1,
      3,
    ),
  ],

  css: [
    q(
      'Which property changes the text color?',
      ['font-color', 'text-color', 'color', 'foreground'],
      2,
      1,
    ),
    q(
      'Which selector targets the element with id="main"?',
      ['.main', '#main', 'main', '*main'],
      1,
      1,
    ),
    q(
      "Which property sets the space INSIDE an element's border?",
      ['margin', 'padding', 'spacing', 'gap'],
      1,
      1,
    ),
    q(
      'Which declaration creates a flex container?',
      ['display: flex;', 'flex: container;', 'position: flex;', 'layout: flex;'],
      0,
      2,
    ),
    q(
      'What does box-sizing: border-box do?',
      [
        'Removes borders',
        'Includes padding and border in the element width',
        'Adds a shadow',
        'Makes the box round',
      ],
      1,
      2,
    ),
    q(
      'What is an element with position: absolute positioned relative to?',
      [
        'The browser window only',
        'Its nearest positioned ancestor',
        'The previous sibling',
        'The body, always',
      ],
      1,
      2,
    ),
    q(
      'Which unit is relative to the font size of the root element?',
      ['px', 'em', 'rem', 'pt'],
      2,
      2,
    ),
    q(
      'Which selector has the highest specificity?',
      ['.a .b .c', 'div p span', 'ul li.active', '#id'],
      3,
      3,
    ),
    q(
      'What does z-index control?',
      [
        'The zoom level',
        'The stacking order of overlapping elements',
        'The font weight',
        'The animation speed',
      ],
      1,
      3,
    ),
    q(
      'What does "grid-template-columns: repeat(3, 1fr)" create?',
      [
        'Three rows of equal height',
        'Three columns of equal width',
        'A grid with three gaps',
        'Three nested grids',
      ],
      1,
      3,
    ),
  ],

  git: [
    q(
      'Which command creates a new Git repository?',
      ['git start', 'git init', 'git new', 'git create'],
      1,
      1,
    ),
    q(
      'Which command stages changes for the next commit?',
      ['git add', 'git push', 'git pull', 'git clone'],
      0,
      1,
    ),
    q(
      'Which command shows the state of your working directory?',
      ['git state', 'git look', 'git status', 'git show-all'],
      2,
      1,
    ),
    q(
      'Which command downloads remote changes and merges them?',
      ['git push', 'git init', 'git pull', 'git stash'],
      2,
      2,
    ),
    q(
      'What does git checkout -b feature do?',
      [
        'Deletes the branch feature',
        'Creates the branch feature and switches to it',
        'Merges feature into main',
        'Shows the history of feature',
      ],
      1,
      2,
    ),
    q(
      'What does git stash do?',
      [
        'Deletes all your commits',
        'Temporarily saves your uncommitted changes',
        'Uploads your code to the server',
        'Renames the branch',
      ],
      1,
      2,
    ),
    q(
      'What is a .gitignore file for?',
      [
        'Listing the files Git should not track',
        'Storing passwords',
        'Listing the contributors',
        'Compressing the repository',
      ],
      0,
      2,
    ),
    q(
      'What is the main difference between merge and rebase?',
      [
        'Rebase replays your commits on top of another branch, merge keeps both histories with a merge commit',
        'Merge deletes the old branch, rebase does not',
        'They are exactly the same',
        'Rebase only works on remote branches',
      ],
      0,
      3,
    ),
    q(
      'What does git reset --hard HEAD~1 do?',
      [
        'Creates a new commit',
        'Moves the branch back by one commit and discards the changes',
        'Renames the last commit',
        'Pushes the last commit',
      ],
      1,
      3,
    ),
    q(
      'What does git cherry-pick <hash> do?',
      [
        'Deletes a commit',
        'Applies a specific commit on top of the current branch',
        'Merges all branches',
        'Shows the author of a commit',
      ],
      1,
      3,
    ),
  ],

  docker: [
    q(
      'What is a container?',
      [
        'A full virtual machine with its own kernel',
        'A lightweight isolated process packaged with its dependencies',
        'A database',
        'A code editor',
      ],
      1,
      1,
    ),
    q(
      'Which command lists the running containers?',
      ['docker list', 'docker show', 'docker ps', 'docker status'],
      2,
      1,
    ),
    q(
      'Which command downloads an image from a registry?',
      ['docker pull', 'docker fetch', 'docker get', 'docker load-remote'],
      0,
      1,
    ),
    q(
      'Which file describes how to build an image?',
      ['package.json', 'Dockerfile', 'Makefile', '.env'],
      1,
      2,
    ),
    q(
      'What does docker run -p 8080:80 nginx do?',
      [
        'Maps host port 8080 to container port 80',
        'Maps container port 8080 to host port 80',
        'Runs nginx 80 times',
        'Limits nginx to 8080 MB',
      ],
      0,
      2,
    ),
    q(
      'What is the difference between an image and a container?',
      [
        'An image is a read-only template, a container is a running instance of it',
        'They are the same thing',
        'A container is a template, an image is a running instance',
        'An image is a database',
      ],
      0,
      2,
    ),
    q(
      'What is Docker Compose used for?',
      [
        'Compressing images',
        'Defining and running multi-container applications with a YAML file',
        'Monitoring the CPU',
        'Writing the Dockerfile automatically',
      ],
      1,
      2,
    ),
    q(
      'What is a Docker volume used for?',
      [
        'Making the image smaller',
        'Persisting data outside the container lifecycle',
        'Increasing CPU speed',
        'Encrypting the network',
      ],
      1,
      3,
    ),
    q(
      'What is the difference between RUN and CMD in a Dockerfile?',
      [
        'RUN executes at build time, CMD defines the default command at container start',
        'They are identical',
        'RUN starts the container, CMD builds the image',
        'CMD can only be used once per project',
      ],
      0,
      3,
    ),
    q(
      'What is the main advantage of a multi-stage build?',
      [
        'Faster internet',
        'A smaller final image, because build tools are left behind',
        'More containers at once',
        'Automatic backups',
      ],
      1,
      3,
    ),
  ],

  linux: [
    q('Which command lists files in a directory?', ['cd', 'rm', 'ls', 'pwd'], 2, 1),
    q('Which command prints the current directory?', ['pwd', 'whoami', 'cd', 'ls'], 0, 1),
    q('Which command creates a new directory?', ['newdir', 'mkdir', 'touch', 'mk'], 1, 1),
    q(
      'What does chmod 755 file mean?',
      [
        'Everyone can only read',
        'Owner: read/write/execute; group and others: read/execute',
        'Only root can access it',
        'The file is deleted after execution',
      ],
      1,
      2,
    ),
    q('Which command searches for text inside files?', ['find', 'cat', 'chmod', 'grep'], 3, 2),
    q(
      'Which command shows the end of a file and can follow it live with -f?',
      ['head', 'tail', 'less', 'cat'],
      1,
      2,
    ),
    q(
      'What does sudo do?',
      [
        'Deletes a user',
        'Runs a command with administrator (root) privileges',
        'Shuts the computer down',
        'Lists the users',
      ],
      1,
      2,
    ),
    q(
      'What does the pipe | do in "ls | grep txt"?',
      [
        'Sends the output of ls as input of grep',
        'Runs both commands at the same time on different files',
        'Saves the output into a file named grep',
        'Ignores errors',
      ],
      0,
      3,
    ),
    q(
      'What does ">>" do in "echo hi >> file.txt"?',
      [
        'Overwrites the file',
        'Appends the output to the end of the file',
        'Deletes the file',
        'Reads the file',
      ],
      1,
      3,
    ),
    q(
      'What does "kill -9 PID" do?',
      [
        'Pauses the process',
        'Forcefully terminates the process',
        'Lists the process',
        'Restarts the process',
      ],
      1,
      3,
    ),
  ],
};

export const SKILL_QUIZZES: Record<string, QuizQuestion[]> = {
  ...CORE_QUIZZES,
  ...EXTRA_QUIZZES,
};
