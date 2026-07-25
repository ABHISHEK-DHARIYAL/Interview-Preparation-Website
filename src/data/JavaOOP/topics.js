// OOP in Java — full topic data
// Shape reference: see src/data/CN/topics.js for the canonical example.
// This subject deliberately focuses on what's DIFFERENT or Java-specific
// compared to the general OOP subject (src/data/OOP/topics.js) — no destructor
// (garbage collection instead), the extra "default" access level, packages,
// interfaces vs abstract classes, and the static keyword.

const javaOopTopics = [
  {
    id: 'java-class-object',
    title: 'Classes, Objects & this',
    description: 'The building blocks of Java OOP, and how "this" refers to the current object.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'A class is a user-defined blueprint for an object\'s properties and behaviors; an object is a runtime instance of that class. In Java, "this" refers to the current object instance.',
    easyExplanation:
      'A Student class is just a blueprint — no memory is used until you actually write "new Student()". Each object you create (s1, s2, s3…) gets its own separate copy of name and age. Inside the class\'s own methods, "this" is how the class refers to "the specific object currently running this code" — this.name means "MY name, not some other Student\'s."',
    whyImportant: '"What does \'this\' actually refer to?" is a guaranteed early Java question — get it solid before constructors and overloading build on top of it.',
    keyPoints: [
      'Class — a blueprint; uses zero memory until an object is instantiated',
      'Object — a runtime instance, created with the "new" keyword',
      'new Student() allocates space on the heap; the reference/address is stored on the stack',
      '"this" refers to the current object instance',
      'Use 1: passing the current object as a parameter to another method',
      'Use 2: referring to the current class\'s instance variable (e.g. this.name = name)',
    ],
    memoryTrick: { type: 'story', text: 'A class is a cookie cutter; every "new" is a fresh cookie. "this" is simply each cookie saying "me, specifically" whenever it talks about its own ingredients.' },
    visuals: [
      { type: 'flow', title: 'What "new Student()" actually does', steps: ['JVM reads the Student blueprint (class)', 'Allocates memory for the object on the heap', 'Stores the object\'s address in a stack reference (s1)', 's1.name and s1.age now point to this object\'s own memory'] },
      {
        type: 'circle',
        title: 'The two uses of "this"',
        center: 'this',
        satellites: ['Refers to current instance variable', 'Passes current object as a parameter'],
      },
      {
        type: 'table',
        title: 'Two Students, two separate objects',
        columns: ['Object', 'name', 'age'],
        rows: [['s1', '"Aman"', '24'], ['s2', '"Shradha"', '22']],
      },
    ],
    realWorldExample:
      'Creating Student s1 and Student s2 from the same class is like using one cookie cutter to make two cookies — same shape (class), but each is a separate cookie (object) that can be decorated (assigned data) differently.',
    interviewQuestions: [
      { q: 'What does the "this" keyword refer to?', a: 'The current object instance — the specific object whose method is currently executing.' },
      { q: 'Where does an object\'s data actually live in memory?', a: 'On the heap — the "new" keyword allocates it there, while the reference/address to it is stored on the stack.' },
      { q: 'Why doesn\'t a class itself use any memory?', a: 'A class is only a blueprint; memory is only allocated once an actual object is instantiated with "new".' },
    ],
    commonMistakes: [
      { title: '"this.name = name; is redundant"', detail: 'It\'s essential whenever a parameter shares a name with an instance variable — "this.name" (the object\'s field) would otherwise be shadowed by "name" (the parameter).' },
    ],
    revision: ['Class = blueprint, 0 memory used', 'Object = instance, created via "new"', 'new → heap memory, reference → stack', '"this" = current object (refers to fields, or passes itself)'],
    relatedTopics: ['java-constructors', 'java-super-keyword', 'java-access-modifiers'],
  },

  {
    id: 'java-constructors',
    title: 'Constructors (and No Destructor!)',
    description: 'Non-parameterized, parameterized & copy constructors — plus why Java skips destructors entirely.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'A constructor is a special method, sharing the class\'s name and having no return type, that runs automatically once at object creation to initialize its data — Java has three kinds, and (unlike C++) no destructor at all.',
    easyExplanation:
      'If you don\'t write any constructor yourself, Java quietly creates a default, empty one for you. A parameterized constructor lets every object start with its own custom values right away. A copy constructor builds a new object using another object\'s values — but unlike C++, Java never generates one automatically; you always have to write it yourself.',
    whyImportant: '"Why doesn\'t Java have a destructor?" is a favorite follow-up the moment you mention constructors — it\'s a clean way to show you understand Java\'s memory model.',
    keyPoints: [
      'A constructor shares its class\'s exact name',
      'A constructor has NO return type — not even void',
      'A constructor runs automatically, exactly once, at object creation',
      'Non-Parameterized (default) constructor — no arguments; Java auto-generates one if you write none',
      'Parameterized constructor — takes arguments to give each object custom starting values',
      'Copy constructor — builds a new object from another object\'s values; Java only has a user-defined version (unlike C++, which also provides a default one)',
      'Java has NO destructor — its garbage collector automatically frees memory instead',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Same Name, No Return, Runs Once — that\'s a constructor. And Java just lets the garbage collector clean up after itself, no destructor needed.' },
    visuals: [
      {
        type: 'circle',
        title: 'Java\'s 3 constructor types',
        center: 'Constructors',
        satellites: ['Non-Parameterized', 'Parameterized', 'Copy'],
      },
      {
        type: 'comparison',
        title: 'Java vs C++: cleanup duty',
        left: { title: 'C++', points: ['Has an explicit destructor (~ClassName)', 'Programmer controls exact cleanup timing', 'Manual memory management'] },
        right: { title: 'Java', points: ['No destructor at all', 'Garbage collector reclaims unused memory automatically', 'Cleanup timing is not programmer-controlled'] },
      },
      {
        type: 'table',
        title: 'Constructor rules at a glance',
        columns: ['Rule', 'Detail'],
        rows: [
          ['Name', 'Must exactly match the class name'],
          ['Return type', 'None — not even void'],
          ['Called', 'Automatically, exactly once, at object creation'],
          ['Copy constructor default?', 'C++ provides one automatically; Java does not'],
        ],
      },
    ],
    realWorldExample:
      'Registering on a website and having your profile auto-filled with "New User" defaults is a non-parameterized constructor at work; signing up with your own name and email immediately is a parameterized constructor doing the same job with your specific data.',
    interviewQuestions: [
      { q: 'Why can a constructor never have a return type?', a: 'A constructor isn\'t called like a normal method to produce a value — it exists purely to initialize the object being created, so it has no return type, not even void.' },
      { q: 'Does Java provide a default copy constructor like C++?', a: 'No — Java only supports a user-defined copy constructor; you always have to write it yourself.' },
      { q: 'Why doesn\'t Java need a destructor?', a: 'Java\'s garbage collector automatically detects and frees memory from objects no longer in use, removing the need for explicit manual cleanup.' },
    ],
    commonMistakes: [
      { title: '"If I write no constructor, my class has none"', detail: 'Java automatically supplies a no-argument (non-parameterized) constructor for you if you don\'t define any constructor at all.' },
    ],
    revision: ['Constructor: same name as class, no return type, runs once', '3 types: Non-Parameterized, Parameterized, Copy', 'Java copy constructor is always user-defined', 'No destructor — garbage collector handles cleanup'],
    relatedTopics: ['java-class-object', 'java-polymorphism'],
  },

  {
    id: 'java-polymorphism',
    title: 'Polymorphism in Java',
    description: 'Method overloading (compile-time) and method overriding (runtime) via extends.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Polymorphism means presenting one interface for different underlying forms. Java achieves it at compile-time through method overloading, and at runtime through method overriding in a subclass.',
    easyExplanation:
      'Overloading is having several methods with the identical name in the SAME class, but different parameter types or counts — Java figures out which one to call just by looking at what you passed in, before the program even runs. Overriding is a subclass redefining a method it inherited from its parent, so which version actually runs is decided at runtime, based on the real object type.',
    whyImportant: 'Interviewers love asking you to spot whether a given code snippet is overloading or overriding — the parameter list is always the tell.',
    keyPoints: [
      'Compile-Time (Static) Polymorphism — resolved before the program runs; achieved via Method Overloading',
      'Method Overloading — same method name in the same class, differing by parameter type and/or parameter count',
      'Note: unlike some languages, overloading in Java is NOT based on return type alone',
      'Runtime (Dynamic) Polymorphism — resolved while the program runs; achieved via Method Overriding',
      'Method Overriding — a subclass redefines a method already present in its parent class, via "extends"',
      'Which overridden version runs is decided at runtime, based on the actual object type',
    ],
    memoryTrick: { type: 'story', text: 'Overloading is one chef with several identical-name recipe cards that differ only by ingredient list (parameters) — you pick the right card before cooking starts. Overriding is a trainee chef swapping out a recipe they inherited from their head chef — you only find out which version gets cooked once the order actually comes in.' },
    visuals: [
      {
        type: 'circle',
        title: 'Two forms in Java',
        center: 'Polymorphism',
        satellites: ['Method Overloading (compile-time)', 'Method Overriding (runtime)'],
      },
      {
        type: 'comparison',
        title: 'Overloading vs Overriding',
        left: { title: 'Overloading', points: ['Same class', 'Different parameter list', 'Resolved at compile-time', 'Not based on return type'] },
        right: { title: 'Overriding', points: ['Parent + child class (extends)', 'Same signature', 'Resolved at runtime', 'Based on actual object type'] },
      },
      { type: 'flow', title: 'How overriding is resolved at runtime', steps: ['Shape s = new Triangle()', 's.area() is called', 'JVM checks the real object type at runtime', 'Triangle\'s area() runs, not Shape\'s'] },
    ],
    realWorldExample:
      'A Shape class with a generic area() method, overridden separately by Triangle and Circle subclasses, is classic runtime polymorphism — calling area() on a Shape reference actually runs whichever subclass\'s version matches the real object underneath.',
    interviewQuestions: [
      { q: 'What are the two bases for method overloading in Java?', a: 'The type of the parameters, and/or the number of parameters passed.' },
      { q: 'Can you overload a method by changing only its return type?', a: 'No — Java does not allow overloading based on return type alone; the parameter list must differ.' },
      { q: 'Why is overriding called "runtime" polymorphism?', a: 'Because the JVM decides which overridden version of the method to actually run based on the real object type, determined only once the program is executing.' },
    ],
    commonMistakes: [
      { title: '"Changing just the return type is enough to overload"', detail: 'Java requires the parameter list itself (type or count) to differ — two methods with the same name, same parameters, and only a different return type won\'t even compile.' },
    ],
    revision: ['Overloading: same class, different params, compile-time', 'Overriding: parent/child via extends, same signature, runtime', 'Overloading is NOT based on return type'],
    relatedTopics: ['java-inheritance', 'java-constructors'],
  },

  {
    id: 'java-inheritance',
    title: 'Inheritance in Java',
    description: 'Single, hierarchical, multilevel & hybrid inheritance via extends — and why "multiple" is missing.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Inheritance lets one class (the derived/child class) automatically acquire the properties and behaviors of another (the base/parent class) using the "extends" keyword — Java supports Single, Hierarchical, Multilevel, and Hybrid inheritance, but deliberately not Multiple inheritance through classes.',
    easyExplanation:
      'A Triangle extending Shape gets everything Shape already has, for free, plus whatever extra Triangle adds. Java lets many classes share one parent (Hierarchical), lets a chain of classes inherit from each other (Multilevel), and lets these combine (Hybrid) — but it deliberately will NOT let one class extend two classes directly (Multiple), to avoid the ambiguity that causes real problems in languages like C++.',
    whyImportant: '"Why doesn\'t Java support multiple inheritance through classes?" is one of the most-asked Java-specific OOP questions — interfaces are the follow-up answer.',
    keyPoints: [
      'Uses the "extends" keyword to inherit from a class',
      'Single Inheritance — one class inherits from exactly one other class',
      'Hierarchical Inheritance — multiple classes each inherit from the same single base class',
      'Multilevel Inheritance — a class inherits from a class that is itself already a derived class (a chain)',
      'Hybrid Inheritance — a combination of the above patterns',
      'Java classes deliberately do NOT support Multiple Inheritance (extending 2+ classes directly) — this avoids the "Diamond Problem" ambiguity',
      'Multiple inheritance-like behavior is instead achieved safely through Interfaces',
    ],
    memoryTrick: { type: 'story', text: 'Shape is the parent; Triangle and Circle both extend it (Hierarchical). EquilateralTriangle then extends Triangle itself (Multilevel) — but no Java class is ever allowed to extend two parents directly.' },
    visuals: [
      {
        type: 'tree',
        title: 'Hierarchical + Multilevel, combined',
        root: 'Shape',
        children: [
          { label: 'Triangle', children: [{ label: 'EquilateralTriangle (multilevel)' }] },
          { label: 'Circle' },
        ],
      },
      {
        type: 'comparison',
        title: 'What Java allows vs skips',
        left: { title: 'Supported', points: ['Single', 'Hierarchical', 'Multilevel', 'Hybrid'] },
        right: { title: 'NOT supported (for classes)', points: ['Multiple inheritance', 'Avoids the Diamond Problem', 'Use Interfaces instead'] },
      },
    ],
    realWorldExample:
      'A Vehicle base class extended separately by Car and Bike is Hierarchical inheritance; if SportsCar then extends Car, that\'s Multilevel — but Java won\'t let SportsCar extend both Car and Boat directly, since that ambiguity is exactly what Multiple inheritance avoids by design.',
    interviewQuestions: [
      { q: 'What keyword does Java use for inheritance?', a: '"extends" — a class extends another class to inherit its members.' },
      { q: 'Why doesn\'t Java support multiple inheritance through classes?', a: 'To avoid the "Diamond Problem" — ambiguity over which parent\'s method should run if two parents define the same method.' },
      { q: 'How does Java achieve multiple-inheritance-like behavior safely?', a: 'Through Interfaces, which a single class can implement several of at once, without the ambiguity classes would create.' },
    ],
    commonMistakes: [
      { title: '"Java doesn\'t support multiple inheritance at all"', detail: 'It only blocks multiple inheritance through classes — a class can still implement multiple interfaces, which gives similar flexibility safely.' },
    ],
    revision: ['extends = inherit from a class', 'Single, Hierarchical, Multilevel, Hybrid: all supported', 'Multiple inheritance (classes): NOT supported — avoids Diamond Problem', 'Interfaces achieve it safely instead'],
    relatedTopics: ['java-polymorphism', 'java-abstraction'],
  },

  {
    id: 'java-packages',
    title: 'Packages',
    description: 'Grouping related classes, interfaces, and sub-packages together.',
    readingTime: 3,
    difficulty: 'Easy',
    quickDefinition:
      'A package is a group of related classes, interfaces, and sub-packages, either built into Java itself or defined by the user, brought into a file using an import statement.',
    easyExplanation:
      'Think of a package as a labeled folder of related tools — java.util holds utility classes like Scanner, java.io holds input/output classes. Instead of hunting for one class at a time, "import java.util.Scanner;" tells Java exactly which folder to pull a specific tool from.',
    whyImportant: 'Packages are the foundation the "default" (package-private) access modifier is built on — understanding one makes the other click immediately.',
    keyPoints: [
      'A package groups similar classes, interfaces, and sub-packages together',
      'Built-in packages — provided by Java itself, e.g. java.util, java.io',
      'User-defined packages — created by a developer to organize their own code',
      'import statement — brings a specific class (or an entire package) into scope for use',
      'Example: import java.util.Scanner; or import java.io.IOException;',
    ],
    memoryTrick: { type: 'mnemonic', text: 'A package is a labeled toolbox drawer — import just tells Java which drawer to open before you reach for a tool.' },
    visuals: [
      {
        type: 'tree',
        title: 'Package types',
        root: 'Packages',
        children: [
          { label: 'Built-in', children: [{ label: 'java.util' }, { label: 'java.io' }] },
          { label: 'User-defined', children: [{ label: 'e.g. package newpackage;' }] },
        ],
      },
    ],
    realWorldExample:
      'Writing "import java.util.Scanner;" at the top of a file so you can read user input, versus declaring your own "package newpackage;" to organize a personal project\'s classes.',
    interviewQuestions: [
      { q: 'What is a package in Java?', a: 'A grouping of related classes, interfaces, and sub-packages, used to organize code.' },
      { q: 'Name the difference between a built-in and a user-defined package.', a: 'Built-in packages (like java.util) ship with Java itself; user-defined packages are created by a developer to organize their own project\'s classes.' },
      { q: 'What does an import statement do?', a: 'It brings a specific class, or an entire package, into scope so it can be referenced without its full qualified name.' },
    ],
    commonMistakes: [
      { title: '"import copies code into my file"', detail: 'import only tells the compiler where to find a class\'s definition — it doesn\'t paste any code in; the class still lives in its own package.' },
    ],
    revision: ['Package = group of related classes/interfaces', 'Built-in (java.util, java.io) vs user-defined', 'import brings a class/package into scope'],
    relatedTopics: ['java-access-modifiers', 'java-class-object'],
  },

  {
    id: 'java-access-modifiers',
    title: 'Access Modifiers',
    description: 'Private, default, protected, and public — Java\'s four levels of visibility.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'Access modifiers control where a class member can be seen and used from — Java has four levels: Private, Default (package-private), Protected, and Public, each progressively more open than the last.',
    easyExplanation:
      'Private is a personal diary — only the class itself can read it. Default (what you get if you specify nothing at all) is a family conversation — anyone in the same package can hear it, but outsiders can\'t. Protected extends that family conversation to your own children, even if they\'ve moved to a different package (via inheritance). Public is a public announcement — anyone, anywhere, can access it.',
    whyImportant: 'Java\'s extra "Default" level (which doesn\'t exist the same way in C++) is a favorite trick question — many learners forget it even exists.',
    keyPoints: [
      'Private — accessible only within the same class',
      'Default (package-private) — accessible only within the same package; this is what you get if you specify NO modifier at all',
      'Protected — accessible within the same package, AND from outside the package through a child (subclass) relationship',
      'Public — accessible from anywhere: same class, same package, other packages, everywhere',
      'This is exactly how Encapsulation is implemented — keep fields private, expose controlled public getters/setters',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Private diary → Default family chat → Protected family + your own kids → Public megaphone. Each one opens up a little wider than the last.' },
    visuals: [
      {
        type: 'circle',
        title: 'The 4 access levels',
        center: 'Access Modifiers',
        satellites: ['Private', 'Default', 'Protected', 'Public'],
      },
      {
        type: 'table',
        title: 'Who can access what?',
        columns: ['Modifier', 'Same class', 'Same package', 'Subclass (other package)', 'Everywhere'],
        rows: [
          ['Private', '✓', '✗', '✗', '✗'],
          ['Default', '✓', '✓', '✗', '✗'],
          ['Protected', '✓', '✓', '✓', '✗'],
          ['Public', '✓', '✓', '✓', '✓'],
        ],
      },
    ],
    realWorldExample:
      'In an Account class, "password" is private (only Account itself touches it directly), "email" is protected (a subclass elsewhere could still see it), and "name" is public (anyone using the object can read/write it directly).',
    interviewQuestions: [
      { q: 'What access level applies if you specify no modifier at all?', a: 'Default (package-private) — accessible only within the same package.' },
      { q: 'Difference between Default and Protected?', a: 'Default only allows access within the same package; Protected additionally allows access from a subclass even in a different package.' },
      { q: 'Which modifier best supports Encapsulation, and why?', a: 'Private — it keeps fields hidden from direct outside access, forcing interaction through public getter/setter methods instead.' },
    ],
    commonMistakes: [
      { title: '"No modifier means public"', detail: 'Specifying no modifier at all actually gives Default (package-private) access — not Public, which must be stated explicitly.' },
    ],
    revision: ['Private: same class only', 'Default: same package only (no keyword needed)', 'Protected: package + subclasses elsewhere', 'Public: everywhere', 'Encapsulation = private fields + public getters/setters'],
    relatedTopics: ['java-packages', 'java-abstraction'],
  },

  {
    id: 'java-abstraction',
    title: 'Abstraction: Abstract Class vs Interface',
    description: 'Two different ways Java hides implementation details behind a clean contract.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'Abstraction hides unnecessary implementation detail behind a simple contract. Java achieves this two ways: Abstract Classes (partial abstraction, can mix implemented and unimplemented methods) and Interfaces (pure abstraction, historically 100% abstract).',
    easyExplanation:
      'An abstract Animal class can define breathe() fully (every animal breathes the same basic way) while leaving walk() unimplemented (a Horse and a Chicken walk very differently) — subclasses are forced to fill in only what actually varies. An Interface goes further: it\'s a pure contract of method signatures with (traditionally) zero implementation — any class that "implements" it promises to define every single method itself.',
    whyImportant: '"Abstract class vs Interface — when would you use which?" is one of the single most-asked Java interview questions, full stop.',
    keyPoints: [
      'Abstract class — declared with the "abstract" keyword; can hold both abstract AND regular (non-abstract) methods',
      'Abstract classes cannot be instantiated directly',
      'Abstract classes CAN have constructors and static methods',
      'Abstract classes can have "final" methods, which subclasses are forbidden from changing',
      'Interface — every field is public, static, and final by default',
      'Interface — every method is public and abstract by default',
      'A class using "implements" must define every single method declared in that interface',
      'Interfaces are how Java supports multiple-inheritance-like behavior — a class can implement several interfaces at once',
    ],
    memoryTrick: { type: 'story', text: 'An abstract Animal class is a half-finished form — some fields already filled in (breathe()), some blank spots you must complete (walk()). An Interface is a completely blank contract — you sign it (implements) and must fill in every single line yourself.' },
    visuals: [
      {
        type: 'comparison',
        title: 'Abstract Class vs Interface',
        left: { title: 'Abstract Class', points: ['Keyword: abstract', 'Mix of abstract & concrete methods', 'Can have constructors', 'Can have static & final methods', 'A class can extend only ONE'] },
        right: { title: 'Interface', points: ['Keyword: interface', 'Fields: public, static, final by default', 'Methods: public & abstract by default', 'No constructors', 'A class can implement MANY at once'] },
      },
      { type: 'flow', title: 'Using an abstract class', steps: ['abstract class Animal { abstract walk(); breathe(){...} }', 'class Horse extends Animal { walk() {...} }', 'Horse must implement walk()', 'Horse inherits breathe() as-is'] },
      {
        type: 'table',
        title: 'When to reach for which',
        columns: ['Situation', 'Reach for'],
        rows: [
          ['Shared code + some subclass-specific behavior', 'Abstract Class'],
          ['A pure contract with zero shared implementation', 'Interface'],
          ['Need "multiple inheritance"-like flexibility', 'Interface (implement several)'],
        ],
      },
    ],
    realWorldExample:
      'An abstract Animal class defines breathe() once for every animal but leaves walk() abstract, since a Horse walks on 4 legs and a Chicken walks on 2 — each subclass is forced to supply its own version of just that one method.',
    interviewQuestions: [
      { q: 'Can you instantiate an abstract class directly?', a: 'No — abstract classes exist to be extended, and cannot be instantiated on their own.' },
      { q: 'What are the default modifiers for interface fields and methods?', a: 'Fields are public, static, and final by default; methods are public and abstract by default.' },
      { q: 'Why do interfaces support multiple-inheritance-like behavior when classes don\'t?', a: 'A class can implement several interfaces at once without the ambiguity of the Diamond Problem, since interfaces traditionally carry no method implementation to conflict over.' },
    ],
    commonMistakes: [
      { title: '"Abstract classes can\'t have any implemented methods"', detail: 'They absolutely can — an abstract class can mix fully-implemented methods (like breathe()) alongside abstract ones (like walk()) that subclasses must fill in.' },
    ],
    revision: ['Abstract class: partial abstraction, mix of implemented/unimplemented', 'Interface: pure contract, public+static+final fields, public+abstract methods', 'extends one abstract class vs implements many interfaces'],
    relatedTopics: ['java-inheritance', 'java-static-keyword'],
  },

  {
    id: 'java-static-keyword',
    title: 'The static Keyword',
    description: 'One shared copy per class, not per object — for variables, methods, blocks, and nested classes.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'The static keyword marks something as belonging to the class itself rather than to any individual object — every object of that class shares the exact same static member.',
    easyExplanation:
      'A regular field like "name" is different for every Student object — but a static field like "school" is shared by ALL Student objects at once. Change it through any one object (or the class name directly), and every other object instantly sees that same updated value, because there\'s really only one copy of it in the entire program.',
    whyImportant: '"What happens if you change a static variable through one object?" is a classic trick question testing whether you truly understand shared vs per-object state.',
    keyPoints: [
      'static Variable (class variable) — one single copy shared across every object of the class',
      'static Method (class method) — can be called directly on the class itself, without creating an object',
      'static Block — runs once, automatically, when the class is first loaded',
      'static Nested Class — a class defined inside another, not tied to any specific outer object instance',
      'Static members can be accessed via the class name directly (e.g. Student.school), not just through an object',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Static = "shared," not "solo." One static value is stapled to the whole class, not handed out separately to every object.' },
    visuals: [
      {
        type: 'circle',
        title: 'Four things static can apply to',
        center: 'static',
        satellites: ['Variable', 'Method', 'Block', 'Nested Class'],
      },
      {
        type: 'comparison',
        title: 'Instance field vs static field',
        left: { title: 'Instance field (e.g. name)', points: ['One separate copy per object', 'Changing s1\'s copy doesn\'t affect s2', 'Accessed via an object reference'] },
        right: { title: 'static field (e.g. school)', points: ['Exactly one copy, shared by all', 'Changing it through ANY object affects everyone', 'Can be accessed via the class name directly'] },
      },
    ],
    realWorldExample:
      'A "school" field marked static on a Student class means every single Student object reports the exact same school name — set it once (Student.school = "JMV") and every student object reflects that same value immediately.',
    interviewQuestions: [
      { q: 'What does marking a variable static actually change?', a: 'Instead of every object getting its own separate copy, exactly one shared copy exists at the class level for all objects to use.' },
      { q: 'Can a static method be called without creating an object?', a: 'Yes — that\'s the entire point; static methods (and variables) can be accessed directly through the class name.' },
      { q: 'What is a static block used for?', a: 'Code that runs automatically, exactly once, the very first time the class is loaded — commonly used for one-time static setup.' },
    ],
    commonMistakes: [
      { title: '"Each object gets its own copy of a static variable"', detail: 'The entire purpose of static is the opposite — there\'s exactly ONE shared copy across every object of that class, not one per object.' },
    ],
    revision: ['static = belongs to the class, not any one object', 'Applies to: Variable, Method, Block, Nested Class', 'One shared copy — changing it anywhere changes it everywhere', 'Accessible via ClassName.member directly'],
    relatedTopics: ['java-abstraction', 'java-class-object'],
  },

  {
    id: 'java-super-keyword',
    title: 'The super Keyword',
    description: '"this" points to the current object — "super" points straight to its parent.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'The super keyword refers to the immediate parent class, letting a subclass call the parent\'s constructor, access the parent\'s field, or call the parent\'s version of an overridden method.',
    easyExplanation:
      'If "this" means "me, the current object," then "super" means "my parent, specifically." When a Triangle overrides area() but still wants Shape\'s original version too, super.area() reaches straight past its own override to run the parent\'s code. super() (as the very first line of a constructor) calls the parent\'s constructor to make sure it gets set up before the child adds its own initialization.',
    whyImportant: 'Since the source material skips "super" entirely, students often walk into interviews knowing "this" cold but freezing the moment "super" comes up — yet the two are always asked as a pair.',
    keyPoints: [
      'super() — calls the immediate parent class\'s constructor; must be the first line in the child\'s constructor if used',
      'If a child constructor doesn\'t explicitly call super(), Java inserts a call to the parent\'s no-argument constructor automatically',
      'super.fieldName — accesses the parent class\'s field, even if the child has a field with the same name',
      'super.methodName() — calls the parent class\'s version of a method the child has overridden',
      'super cannot be used in a static context, just like this',
    ],
    memoryTrick: { type: 'mnemonic', text: '"this" = me, right now. "super" = my parent, specifically. Say them out loud together and they\'ll never be confused again.' },
    visuals: [
      {
        type: 'comparison',
        title: '"this" vs "super"',
        left: { title: 'this', points: ['Refers to the current object', 'Calls another constructor in the SAME class', 'Accesses the current class\'s own field/method'] },
        right: { title: 'super', points: ['Refers to the immediate parent object', 'Calls the PARENT class\'s constructor', 'Accesses the parent\'s field/method version'] },
      },
      {
        type: 'flow',
        title: 'super() in a child constructor',
        steps: ['Child\'s constructor starts', 'super(...) runs first — parent is fully initialized', 'Child\'s own initialization runs next', 'Object is now fully constructed'],
      },
      {
        type: 'table',
        title: 'Three things super can reach',
        columns: ['Form', 'What it does'],
        rows: [
          ['super()', "Calls the parent class's constructor"],
          ['super.field', "Accesses the parent's field, even if shadowed by the child's own"],
          ['super.method()', "Calls the parent's version of an overridden method"],
        ],
      },
    ],
    realWorldExample:
      'A Manager class extending Employee might override getDetails() to add manager-specific info, but still call super.getDetails() first to reuse all the shared Employee formatting instead of rewriting it from scratch.',
    interviewQuestions: [
      { q: 'What does super() do inside a constructor?', a: 'It explicitly calls the immediate parent class\'s constructor, and must be the very first statement in the child\'s constructor if used.' },
      { q: 'What happens if a child constructor never calls super() explicitly?', a: 'Java automatically inserts a call to the parent\'s no-argument constructor as the first line, behind the scenes.' },
      { q: 'When would you use super.methodName() instead of just methodName()?', a: 'When a child class has overridden a method but still wants to run and reuse the parent class\'s original version of that same method.' },
    ],
    commonMistakes: [
      { title: '"super() can go anywhere in a constructor"', detail: 'If used at all, super() must be the very first statement in the constructor — Java needs the parent object fully constructed before the child adds anything on top.' },
    ],
    revision: ['super() = call parent\'s constructor (must be first line)', 'super.field / super.method() = reach the parent\'s version', 'No explicit super()? Java auto-calls the parent\'s no-arg constructor', '"this" = me, "super" = my parent'],
    relatedTopics: ['java-class-object', 'java-inheritance'],
  },

  {
    id: 'java-final-keyword',
    title: 'The final Keyword (vs finally & finalize)',
    description: 'One keyword that locks things down — plus the two similarly-named traps that aren\'t related to it at all.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'final locks a variable\'s value, a method against overriding, or a class against being extended. It is completely unrelated to finally (an exception-handling block) and finalize() (a deprecated pre-garbage-collection hook) — despite the very similar names.',
    easyExplanation:
      'A final variable is like setting something in concrete — assign it once, and it can never be reassigned again. A final method is a family recipe a parent explicitly forbids any child class from changing. A final class is a class so complete on its own that Java won\'t let anyone extend it at all (like String). None of this has anything to do with finally, which is a block that always runs after a try/catch, or finalize(), an old method the garbage collector used to call before cleaning up an object.',
    whyImportant: 'final / finally / finalize() sound almost identical and get mixed up constantly — untangling the three cleanly is an easy way to stand out in an interview.',
    keyPoints: [
      'final variable — once assigned, its value can never be changed (a constant)',
      'final method — cannot be overridden by any subclass',
      'final class — cannot be extended/inherited by any other class (e.g. Java\'s own String class)',
      'finally — NOT related to final; it\'s a block in exception handling that always executes after try/catch, whether or not an exception occurred',
      'finalize() — NOT related to final either; a deprecated method the garbage collector used to call on an object right before reclaiming it',
    ],
    memoryTrick: { type: 'mnemonic', text: 'final LOCKS something (variable/method/class). finally ALWAYS RUNS (try/catch cleanup). finalize() is the GC\'s old GOODBYE call. Three different jobs, one confusing family of names.' },
    visuals: [
      {
        type: 'circle',
        title: 'What final can lock down',
        center: 'final',
        satellites: ['Variable (constant)', 'Method (no override)', 'Class (no extends)'],
      },
      {
        type: 'table',
        title: 'final vs finally vs finalize() — do not confuse these',
        columns: ['Keyword', 'Category', 'Purpose'],
        rows: [
          ['final', 'Modifier', 'Locks a variable, method, or class from being changed/overridden/extended'],
          ['finally', 'Exception handling', 'A block that always runs after try/catch, error or not'],
          ['finalize()', 'Garbage collection (deprecated)', 'Used to run just before an object was garbage collected'],
        ],
      },
    ],
    realWorldExample:
      'Java\'s own String class is marked final specifically so no one can extend it and secretly change how strings behave — while a database connection\'s cleanup code belongs in a finally block, guaranteeing it closes whether the query succeeds or throws an error.',
    interviewQuestions: [
      { q: 'Can a final method be overridden by a subclass?', a: 'No — marking a method final specifically prevents any subclass from overriding it.' },
      { q: 'Are final, finally, and finalize() related to each other?', a: 'No, despite the similar names — final is a modifier for locking variables/methods/classes, finally is an exception-handling block, and finalize() was a deprecated garbage-collection hook.' },
      { q: 'Why is Java\'s String class declared final?', a: 'To prevent anyone from extending it and altering its guaranteed immutable behavior.' },
    ],
    commonMistakes: [
      { title: '"final, finally, and finalize() are variations of the same concept"', detail: 'They solve three completely unrelated problems — variable/method/class locking, guaranteed exception cleanup, and old-style pre-GC cleanup, respectively.' },
    ],
    revision: ['final variable = constant, can\'t reassign', 'final method = can\'t override', 'final class = can\'t extend (e.g. String)', 'finally = always-run block; finalize() = deprecated GC hook — neither is related to final'],
    relatedTopics: ['java-static-keyword', 'java-inheritance'],
  },
];

export default javaOopTopics;
