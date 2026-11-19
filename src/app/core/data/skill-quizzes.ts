import { Difficulty, QuizQuestion } from '../models/quiz.model';

const q = (
  question: string,
  options: string[],
  answer: number,
  difficulty: Difficulty,
): QuizQuestion => ({ question, options, answer, difficulty });

// The key is the id of the skill in SKILL_CATALOG
export const SKILL_QUIZZES: Record<string, QuizQuestion[]> = {
  python: [
    q('Which keyword defines a function in Python?', ['function', 'def', 'fun', 'define'], 1, 1),
    q('What does len([1, 2, 3]) return?', ['2', '4', '3', 'It raises an error'], 2, 1),
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
    q(
      'Given def f(a, b=[]): b.append(a); return b — what does print(f(2)) show right after calling f(1)?',
      ['[2]', '[1, 2]', '[1]', 'An error'],
      1,
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
    q("What is the result of '5' + 3 in JavaScript?", ['8', '"53"', 'NaN', 'An error'], 1, 2),
    q(
      'Which array method returns a NEW array with the result of a function applied to each element?',
      ['forEach', 'filter', 'map', 'push'],
      2,
      2,
    ),
    q(
      'What does console.log(0.1 + 0.2 === 0.3) print?',
      ['true', 'false', 'undefined', 'It throws an error'],
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
      'Which type forces you to check a value before using it?',
      ['any', 'unknown', 'void', 'never'],
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
      'Which RxJS operator cancels the previous inner request when a new value arrives (live search)?',
      ['mergeMap', 'concatMap', 'switchMap', 'exhaustMap'],
      2,
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
  ],

  sql: [
    q('Which statement retrieves data from a table?', ['GET', 'FETCH', 'SELECT', 'OPEN'], 2, 1),
    q('Which clause filters rows?', ['ORDER BY', 'WHERE', 'GROUP BY', 'LIMIT'], 1, 1),
    q(
      'Which join returns all rows from the left table, even without a match?',
      ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'SELF JOIN'],
      1,
      2,
    ),
    q('Which expression counts all rows?', ['SUM(*)', 'TOTAL(*)', 'ROWS(*)', 'COUNT(*)'], 3, 2),
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
  ],

  html: [
    q(
      'Which element defines the main heading of a page?',
      ['<head>', '<h1>', '<title>', '<header>'],
      1,
      1,
    ),
    q('Which attribute sets the destination of a link?', ['src', 'link', 'href', 'url'], 2, 1),
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
      'Which selector has the highest specificity?',
      ['.a .b .c', 'div p span', 'ul li.active', '#id'],
      3,
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
  ],

  linux: [
    q('Which command lists files in a directory?', ['cd', 'rm', 'ls', 'pwd'], 2, 1),
    q('Which command prints the current directory?', ['pwd', 'whoami', 'cd', 'ls'], 0, 1),
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
  ],
};
