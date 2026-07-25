// Object-Oriented Programming — full topic data
// Shape reference: see src/data/CN/topics.js for the canonical example.

const oopTopics = [
  {
    id: 'classes-objects',
    title: 'Classes & Objects',
    description: 'The blueprint and its real-world instance.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A class is a user-defined blueprint describing an entity\'s properties and behaviors; an object is a runtime instance of that class, occupying real memory.',
    easyExplanation:
      'Human being is a class — its body parts are its properties, and the actions it performs are its functions. A class doesn\'t occupy any memory on its own; memory is only allocated once an actual object is instantiated from it.',
    whyImportant: 'Every other OOP concept builds on this distinction — get it fuzzy here, and everything downstream gets confusing too.',
    keyPoints: [
      'Class = blueprint/template; no memory allocated until an object exists',
      'Object = a runtime entity; an actual instance of a class',
      'Objects created with `new` are allocated on the heap, with a pointer stored on the stack',
      'Objects created without `new` live directly on the stack',
      'A class bundles both data members and member functions together',
    ],
    memoryTrick: { type: 'story', text: 'A class is a cookie cutter; objects are the actual cookies. The cutter itself takes up no dough — but every cookie made from it does.' },
    visuals: [
      {
        type: 'comparison',
        title: 'Class vs Object',
        left: { title: 'Class', points: ['Blueprint / template', 'No memory allocated', 'Defined once'] },
        right: { title: 'Object', points: ['Actual instance', 'Occupies real memory', 'Many can exist'] },
      },
      { type: 'flow', title: 'Bringing a class to life', steps: ['Define the class', 'Instantiate an object (new)', 'Memory allocated on the heap', 'Pointer/reference stored on the stack'] },
    ],
    realWorldExample:
      '"Human being" is a class — body parts are its properties, and actions performed are its functions. Every actual person you meet is an object: a real instance of that "Human" blueprint.',
    interviewQuestions: [
      { q: 'What is a class?', a: 'A user-defined blueprint that defines an entity\'s properties (data) and functions (behavior).' },
      { q: 'What is an object?', a: 'A runtime instance of a class that actually occupies memory and can use the class\'s data and functions.' },
      { q: 'What\'s the memory difference between creating an object with `new` vs. without it?', a: 'With `new`, the object is allocated on the heap and a pointer to it is stored on the stack; without `new`, the object lives directly on the stack.' },
    ],
    commonMistakes: [
      { title: '"A class itself takes up memory"', detail: 'A class is only a blueprint — no memory is allocated until an object is actually instantiated from it.' },
    ],
    revision: ['Class = blueprint, Object = instance', 'Class takes no memory on its own', '`new` → heap; no `new` → stack'],
    relatedTopics: ['encapsulation', 'constructors-destructors'],
  },

  {
    id: 'inheritance',
    title: 'Inheritance',
    description: 'Single, multiple, hierarchical, multilevel, and hybrid.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'Inheritance lets one class automatically acquire the properties and behaviors of another, enabling code reuse and specialization.',
    easyExplanation:
      'The class doing the inheriting is called the derived class, and the class it inherits from is the base class. The derived class is a specialized version of the base — it gets everything the base has, plus whatever extra it adds.',
    whyImportant: 'Interviewers love asking you to tell the 5 inheritance types apart with quick examples.',
    keyPoints: [
      'Single Inheritance — one class inherits from exactly one other class',
      'Multiple Inheritance — one class inherits from two or more classes at once',
      'Hierarchical Inheritance — multiple classes all inherit from one common base class',
      'Multilevel Inheritance — a class inherits from an already-derived class, forming a chain',
      'Hybrid Inheritance — a combination of two or more of the above types',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Think of a family tree: Single = one parent, one child. Multiple = a child with traits from two parents. Hierarchical = one parent, many children. Multilevel = grandparent → parent → child chain. Hybrid = a big, mixed family tree combining all of these.',
    },
    visuals: [
      { type: 'tree', title: 'Hierarchical Inheritance', root: 'Vehicle (Base)', children: [{ label: 'Car' }, { label: 'Bike' }] },
      { type: 'tree', title: 'Multilevel Inheritance', root: 'Base', children: [{ label: 'Derived 1', children: [{ label: 'Derived 2' }] }] },
      {
        type: 'table',
        title: 'The 5 types, side by side',
        columns: ['Type', 'Meaning'],
        rows: [
          ['Single', 'One class inherits one class'],
          ['Multiple', 'One class inherits 2+ classes'],
          ['Hierarchical', 'Multiple classes inherit one base'],
          ['Multilevel', 'A chain of derived classes'],
          ['Hybrid', 'A combination of the above'],
        ],
      },
    ],
    realWorldExample:
      'A "Vehicle" base class might be inherited by both "Car" and "Bike" (hierarchical inheritance) — both reuse Vehicle\'s shared properties like speed and fuel, while adding their own specific features.',
    interviewQuestions: [
      { q: 'What is inheritance?', a: 'A mechanism where one class automatically acquires the properties and behaviors of another class.' },
      { q: 'Difference between hierarchical and multilevel inheritance?', a: 'Hierarchical has one base class with multiple direct children; multilevel is a chain where a derived class itself becomes the base for another.' },
      { q: 'What is hybrid inheritance?', a: 'A combination of two or more inheritance types — for example, mixing multiple and hierarchical inheritance together.' },
    ],
    commonMistakes: [
      { title: 'Confusing hierarchical with multilevel', detail: 'Hierarchical is one base with several direct children; multilevel is a chain — base → child → grandchild — going deeper, not wider.' },
    ],
    revision: ['Single: 1 base → 1 derived', 'Multiple: 2+ bases → 1 derived', 'Hierarchical: 1 base → many derived', 'Multilevel: a chain', 'Hybrid: a mix'],
    relatedTopics: ['classes-objects', 'polymorphism'],
  },

  {
    id: 'encapsulation',
    title: 'Encapsulation',
    description: 'Bundling data and functions, and hiding what shouldn\'t be exposed.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'Encapsulation bundles data and functions into a single class and restricts direct access to that data, exposing it only through controlled public methods.',
    easyExplanation:
      'Think of a medicine capsule: the actual ingredients (data) are wrapped inside a shell (the class) with a controlled way to release them (getter/setter methods) — you never touch the raw ingredients directly.',
    whyImportant: 'Encapsulation is the concept most often confused with abstraction — interviewers specifically probe whether you can tell them apart.',
    keyPoints: [
      'Bundles data and functions together into one class',
      'Attributes are kept private; access happens only through public getter/setter methods',
      'Enables "data hiding" — restricting direct outside access to internal state',
      'Reduces unwanted dependencies between outside code and a class\'s internal representation',
      'Achieved in C++ using access specifiers (private / protected)',
    ],
    memoryTrick: { type: 'story', text: 'A medicine capsule: the ingredients (data) are sealed inside a shell (the class), released only through a controlled channel (getter/setter methods) rather than being loose and directly touchable.' },
    visuals: [
      { type: 'flow', title: 'How access is controlled', steps: ['Private data (hidden)', 'Public getter/setter methods', 'Outside code interacts only through those methods'] },
    ],
    realWorldExample:
      "A car's engine internals are hidden under the hood — you interact only through the accelerator and brake pedal (its \"public methods\"), never by touching the engine parts directly.",
    interviewQuestions: [
      { q: 'What is encapsulation?', a: 'Bundling data and functions into a class and restricting direct access to that data via controlled public methods.' },
      { q: 'How is data hiding achieved in C++?', a: 'Using access specifiers — marking attributes as private or protected so outside code can\'t touch them directly.' },
      { q: 'Why is encapsulation useful?', a: 'It protects internal state from accidental misuse, reduces external dependency on internal representation, and makes the class easier to maintain.' },
    ],
    commonMistakes: [
      { title: '"Encapsulation and Abstraction are the same thing"', detail: 'Encapsulation is about hiding the *data* (bundling + restricting access); abstraction is about hiding the *complexity* (showing only relevant details of behavior).' },
    ],
    revision: ['Bundles data + functions in one class', 'Private data + public getters/setters', 'Achieved via access specifiers'],
    relatedTopics: ['abstraction', 'access-specifiers'],
  },

  {
    id: 'abstraction',
    title: 'Abstraction',
    description: 'Hiding unnecessary detail behind a simple, general model.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'Abstraction models a real-world problem by exposing only relevant details and hiding the underlying complexity behind a simple interface.',
    easyExplanation:
      "Driving a car, you use the steering wheel and pedals — the abstracted interface — without needing to know how the engine's combustion or transmission actually works internally. That's abstraction: relevant control, hidden complexity.",
    whyImportant: 'It\'s almost always asked back-to-back with Encapsulation specifically to test whether you can articulate the difference.',
    keyPoints: [
      'Hides unnecessary implementation detail behind a simple interface',
      'Focuses only on the properties/operations relevant to the problem at hand',
      'In C++, achieved via abstract classes and pure virtual functions',
      'Data binding connects the UI and business logic, so changes in one reflect automatically in the other',
    ],
    memoryTrick: { type: 'story', text: 'A TV remote — you press a button (the interface); you don\'t need to know the internal circuitry (the implementation) that actually changes the channel.' },
    visuals: [
      {
        type: 'comparison',
        title: 'Abstraction vs Encapsulation',
        left: { title: 'Abstraction', points: ['Hides complexity', 'Focus on "what" it does', 'Achieved via abstract classes/interfaces'] },
        right: { title: 'Encapsulation', points: ['Hides data', 'Focus on protecting "how"', 'Achieved via access specifiers'] },
      },
    ],
    realWorldExample:
      "Driving a car — you use the steering wheel and pedals without needing to understand the engine's internal combustion process.",
    interviewQuestions: [
      { q: 'What is abstraction?', a: 'Modeling a problem by showing only relevant details and hiding unnecessary implementation complexity.' },
      { q: 'How is abstraction achieved in C++?', a: 'Through abstract classes and pure virtual functions, which define an interface without exposing implementation.' },
      { q: 'Difference between abstraction and encapsulation?', a: 'Abstraction hides complexity behind a simple interface; encapsulation hides data by bundling it with controlled access methods.' },
    ],
    commonMistakes: [
      { title: 'Treating abstraction and encapsulation as identical', detail: 'They\'re related but solve different problems — one hides complexity (abstraction), the other hides data (encapsulation).' },
    ],
    revision: ['Abstraction = hide complexity, show only what\'s needed', 'Achieved via abstract classes & pure virtual functions', 'Different from encapsulation (which hides data)'],
    relatedTopics: ['encapsulation', 'virtual-functions'],
  },

  {
    id: 'polymorphism',
    title: 'Polymorphism',
    description: 'Compile-time overloading vs runtime overriding.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Polymorphism lets the same interface represent different underlying forms — achieved at compile time via overloading, or at runtime via overriding.',
    easyExplanation:
      'A Point, a Circle, and a Square could all share a single "draw()" interface, but each needs completely different underlying data (a point just needs coordinates; a circle needs a center and radius) and implements "draw" completely differently. Same name, many forms — that\'s polymorphism.',
    whyImportant: 'Interviewers use this to test whether you truly separate "same name" (overloading) from "same name, same signature, different class" (overriding).',
    keyPoints: [
      'Poly = many, Morphism = forms — same interface, different underlying behavior',
      'Compile-time (static) polymorphism — achieved via Method/Function Overloading',
      'Runtime (dynamic) polymorphism — achieved via Function Overriding (using virtual functions)',
      'Overloading — same function name, different parameters, resolved at compile time',
      'Overriding — same function name AND signature in base and derived class, resolved at runtime',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Think of the word "bark": a dog\'s bark and a tree\'s bark — same name (interface), completely different meaning (form) depending on context. That\'s the core idea of polymorphism.',
    },
    visuals: [
      {
        type: 'circle',
        title: 'One interface, many forms',
        center: 'Polymorphism',
        satellites: ['Method Overloading', 'Operator Overloading', 'Method Overriding'],
      },
      {
        type: 'comparison',
        title: 'Overloading vs Overriding',
        left: { title: 'Overloading', points: ['Compile-time', 'Same class', 'Different parameters', 'Static binding'] },
        right: { title: 'Overriding', points: ['Runtime', 'Base + derived class', 'Same signature', 'Dynamic binding (virtual)'] },
      },
      { type: 'flow', title: 'Runtime polymorphism in action', steps: ['Base* ptr = &derivedObject', 'ptr->virtualFn() is called', 'C++ checks the actual object type at runtime', 'The Derived class\'s version runs'] },
    ],
    realWorldExample:
      'Different shapes — Point, Circle, Square — all respond to a shared "draw()" interface, but each implements it completely differently based on its own specific data. That\'s polymorphism in action.',
    interviewQuestions: [
      { q: 'What is polymorphism?', a: 'The ability for the same interface to represent different underlying implementations, resolved either at compile time (overloading) or runtime (overriding).' },
      { q: 'Difference between method overloading and method overriding?', a: 'Overloading is same class, same name, different parameters, resolved at compile time; overriding is base vs. derived class, same signature, resolved at runtime via virtual functions.' },
      { q: 'Which type of polymorphism is resolved at runtime?', a: 'Overriding — via virtual functions and dynamic binding.' },
    ],
    commonMistakes: [
      { title: 'Mixing up overloading with overriding', detail: 'Overloading is static/compile-time and stays within one class; overriding is dynamic/runtime and spans a base-derived pair — a very common interview trap.' },
    ],
    revision: ['Overloading = compile-time, same class', 'Overriding = runtime, base vs derived', 'Same interface, many forms'],
    relatedTopics: ['inheritance', 'virtual-functions'],
  },

  {
    id: 'constructors-destructors',
    title: 'Constructors & Destructors',
    description: 'Object lifecycle: setup and teardown.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'A constructor initializes an object automatically the moment it\'s created; a destructor automatically cleans it up the moment it\'s destroyed.',
    easyExplanation:
      "Checking into a hotel room, the constructor is the automatic check-in process that sets everything up for you. The destructor is check-out — cleaning up automatically after you leave, without you doing the teardown yourself.",
    whyImportant: 'The three constructor types (default, parameterized, copy) are asked constantly, often paired with a quick code-reading exercise.',
    keyPoints: [
      'Constructor — a special method invoked automatically at object creation, sharing the class\'s name',
      'Default constructor — takes no arguments; runs automatically when none are provided',
      'Parameterized constructor — accepts arguments to initialize distinct objects differently',
      'Copy constructor — creates a new object as a copy of an already-existing one',
      'Destructor — automatically invoked when an object is destroyed; same name as the class, prefixed with `~`',
      'A class can have only one destructor, and it can never take parameters',
    ],
    memoryTrick: { type: 'story', text: 'A constructor is hotel check-in — it automatically sets everything up for you. A destructor is check-out — it automatically cleans up before you leave.' },
    visuals: [
      { type: 'flow', title: 'An object\'s lifecycle', steps: ['Object created', 'Constructor runs automatically', 'Object is used', 'Object goes out of scope / is deleted', 'Destructor runs automatically'] },
      {
        type: 'table',
        title: 'The three constructor types',
        columns: ['Constructor type', 'When it\'s called'],
        rows: [
          ['Default', 'No arguments provided'],
          ['Parameterized', 'Arguments given for custom initialization'],
          ['Copy', 'Initializing a new object from an existing one'],
        ],
      },
    ],
    realWorldExample:
      'Checking into a hotel room — the constructor automatically sets everything up for you — and checking out — the destructor automatically cleans up after you leave — both happen without you manually doing the setup or teardown yourself.',
    interviewQuestions: [
      { q: 'What is a constructor?', a: 'A special method automatically invoked when an object is created, used to initialize its data members.' },
      { q: 'What are the three types of constructors in C++?', a: 'Default, Parameterized, and Copy constructors.' },
      { q: 'Why can a class have only one destructor, unlike constructors?', a: 'A destructor never takes parameters, so there\'s no way to overload it the way constructors can be overloaded with different parameter lists.' },
    ],
    commonMistakes: [
      { title: 'Trying to give a destructor parameters', detail: 'Destructors can never take arguments or be overloaded — they\'re always invoked implicitly with no parameters at all.' },
    ],
    revision: ['Constructor = auto setup, Destructor = auto teardown', '3 constructor types: Default, Parameterized, Copy', 'Only one destructor per class, never parameterized'],
    relatedTopics: ['classes-objects', 'virtual-functions'],
  },

  {
    id: 'virtual-functions',
    title: 'Virtual & Pure Virtual Functions',
    description: 'Runtime binding and abstract base classes.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'A virtual function is resolved at runtime based on the actual object type; a pure virtual function has no base implementation at all, making its class abstract.',
    easyExplanation:
      "Calling a base-class pointer's virtual function is like dialing 'the current manager' — you always reach whoever holds that job today (the actual derived object), not whoever held it when you first saved the number. That decision happens at the moment of the call: runtime.",
    whyImportant: 'Virtual functions are the C++ mechanism underneath runtime polymorphism — expect this to be tested with an actual code snippet.',
    keyPoints: [
      'Virtual function — declared in the base class, redefined in the derived class; resolved at runtime based on the actual object type',
      'Non-virtual functions are resolved at compile time, based on the pointer\'s declared type — not the object it actually points to',
      'Pure virtual function — has no implementation in the base class at all (`= 0`), forcing derived classes to implement it',
      'A class with at least one pure virtual function becomes an Abstract Class and can\'t be instantiated directly',
      'Virtual functions cannot be static; a class may have a virtual destructor, but never a virtual constructor',
    ],
    memoryTrick: {
      type: 'story',
      text: 'A base class pointer is like calling "the Manager" without knowing exactly who that is — but whenever the phone actually rings, it\'s always the *current* real person (the derived class) who picks up, decided only at the moment of the call.',
    },
    visuals: [
      {
        type: 'comparison',
        title: 'Virtual vs Non-virtual Function',
        left: { title: 'Virtual', points: ['Resolved at runtime', 'Based on actual object type', 'Enables dynamic polymorphism'] },
        right: { title: 'Non-virtual', points: ['Resolved at compile time', 'Based on pointer\'s declared type', 'Static binding'] },
      },
      { type: 'flow', title: 'Calling a virtual function', steps: ['Base* ptr = &derivedObject', 'ptr->virtualFn() is called', 'C++ checks the actual object type at runtime', 'The Derived class\'s version runs'] },
    ],
    realWorldExample:
      "Calling a base-class pointer's virtual show() function when it secretly points to a derived object always runs the derived class's version — like dialing \"the current manager\" and always reaching whoever holds that job today.",
    interviewQuestions: [
      { q: 'What is a virtual function?', a: 'A member function declared in a base class and redefined in a derived class, resolved at runtime based on the actual object\'s type.' },
      { q: 'What is a pure virtual function?', a: 'A function declared in the base class with no implementation at all (`= 0`), which every concrete derived class must implement.' },
      { q: 'What makes a class "abstract" in C++?', a: 'Having at least one pure virtual function — this prevents the class from being instantiated directly.' },
    ],
    commonMistakes: [
      { title: '"A virtual constructor is possible"', detail: 'C++ doesn\'t allow virtual constructors — an object\'s type must be known before construction even happens. Virtual destructors, though, are common and important.' },
    ],
    revision: ['Virtual function: resolved at runtime', 'Pure virtual function: `= 0`, no base implementation', 'Abstract class: has ≥1 pure virtual function', 'No virtual constructors, but virtual destructors exist'],
    relatedTopics: ['abstraction', 'polymorphism'],
  },

  {
    id: 'access-specifiers',
    title: 'Access Specifiers',
    description: 'private, public, and protected — who can see what.',
    readingTime: 3,
    difficulty: 'Easy',
    quickDefinition:
      'Access specifiers — private, public, and protected — control which parts of a program can access a class\'s members.',
    easyExplanation:
      'Private is like a personal diary — only you (the same class) can read it. Protected is like a family matter — you and your children (derived classes) can see it, but no outsiders. Public is like a notice on an office bulletin board — anyone can read it.',
    whyImportant: 'These three words are the actual mechanism behind encapsulation — expect a quick-fire "what can access what" question.',
    keyPoints: [
      'Private — accessible only within the same class',
      'Public — accessible from anywhere',
      'Protected — accessible within the class and its derived (child) classes, but nowhere else',
      'The default access level for class members in C++ is private, if unspecified',
      'Access specifiers are the actual mechanism that makes encapsulation and data hiding possible',
    ],
    memoryTrick: { type: 'story', text: 'Private is a personal diary (only you). Protected is a family matter (you and your kids). Public is a notice on the office bulletin board (anyone).' },
    visuals: [
      {
        type: 'circle',
        title: 'The three specifiers, at a glance',
        center: 'Access Control',
        satellites: ['Private', 'Protected', 'Public'],
      },
      {
        type: 'table',
        title: 'Who can access what',
        columns: ['Specifier', 'Who can access it'],
        rows: [
          ['Private', 'Only the same class'],
          ['Protected', 'The class and its derived (child) classes'],
          ['Public', 'Anyone, from anywhere'],
        ],
      },
    ],
    realWorldExample:
      'A personal diary (private) only you can read; a family matter (protected) you might share with your children (derived classes) but not strangers; a notice board (public) anyone walking by can read.',
    interviewQuestions: [
      { q: 'What are the three access specifiers in C++?', a: 'private, public, and protected.' },
      { q: 'Difference between private and protected?', a: 'Private is accessible only within the exact same class; protected extends that access to derived (child) classes as well.' },
      { q: 'What is the default access specifier for a class in C++?', a: 'Private, if no access specifier is written explicitly.' },
    ],
    commonMistakes: [
      { title: '"Protected members are accessible from anywhere outside"', detail: 'Protected members are only accessible within the class itself and its derived classes — never from unrelated outside code.' },
    ],
    revision: ['Private: same class only', 'Protected: class + derived classes', 'Public: anyone', 'Default (if unspecified) is private'],
    relatedTopics: ['encapsulation', 'classes-objects'],
  },

  {
    id: 'this-pointer-friend-aggregation',
    title: "'this' Pointer, Friend Functions & Aggregation",
    description: 'Referring to the current object, breaking encapsulation on purpose, and the HAS-A relationship.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'The `this` pointer refers to the current object instance inside a member function; a friend function is a non-member function granted special access to a class\'s private data; aggregation models a HAS-A relationship between classes.',
    easyExplanation:
      "`this` is simply how an object refers to \"me\" inside its own methods. A friend function is a trusted outsider let backstage — declared inside the class specifically so it alone can see private data that everyone else is denied. Aggregation is when one class simply holds another as a part, without inheriting from it — like a Car that HAS an Engine, rather than a Car that IS an Engine.",
    whyImportant: 'These are the "one more thing" concepts that round out a solid OOP interview after the big four pillars are covered.',
    keyPoints: [
      '`this` — refers to the current object instance inside a member function',
      'Used to pass the current object as a parameter, refer to the current instance\'s own variables, or declare indexers',
      'Friend function — a non-member function that can access private/protected members, declared inside the class it\'s friends with',
      'A friend function must be called using an object name and the dot operator — it isn\'t a member itself',
      'Aggregation — one class holds a reference to another as an entity, modeling a HAS-A relationship (reuse without inheritance)',
    ],
    memoryTrick: {
      type: 'story',
      text: '`this` is like saying "me" instead of naming yourself explicitly. A friend function is a trusted outsider let backstage — declared as a "friend" so it alone can see private data others are denied.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Three related concepts',
        columns: ['Concept', 'What it does'],
        rows: [
          ['`this` pointer', 'Refers to the current object inside its own member functions'],
          ['Friend function', 'A non-member function allowed to access private/protected data'],
          ['Aggregation', 'One class HAS-A reference to another (reuse without inheritance)'],
        ],
      },
    ],
    realWorldExample:
      'A friend function is like a family doctor being the one outsider allowed to see your private medical records, while everyone else is denied access. Aggregation is like a Car class that HAS an Engine object inside it, without Car needing to inherit from Engine at all.',
    interviewQuestions: [
      { q: 'What is the `this` pointer used for?', a: 'Referring to the current object instance from within one of its own member functions.' },
      { q: 'What is a friend function, and why is it useful?', a: 'A non-member function granted special access to a class\'s private/protected data — useful when an external function genuinely needs that access without being a full member.' },
      { q: 'What is aggregation, and how is it different from inheritance?', a: 'Aggregation is a HAS-A relationship via composition, with no inheritance hierarchy involved; inheritance is an IS-A relationship instead.' },
    ],
    commonMistakes: [
      { title: '"A friend function is a member of the class"', detail: 'It isn\'t — a friend function is an entirely separate, non-member function that has simply been granted special access to private data.' },
    ],
    revision: ['`this` = reference to the current object', 'Friend function = trusted non-member with private access', 'Aggregation = HAS-A, not IS-A'],
    relatedTopics: ['classes-objects', 'encapsulation'],
  },

  {
    id: 'namespaces-overloading',
    title: 'Namespaces, Overloading vs Overriding',
    description: 'Avoiding naming conflicts, and the key distinctions interviewers love to test.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'Namespaces prevent naming conflicts between identifiers with the same name; and it\'s crucial to clearly separate function overloading (same name, different parameters) from function overriding (same signature, base vs. derived class).',
    easyExplanation:
      'C++\'s own `std` namespace is why `std::cout` works without clashing with anyone else\'s `cout`. Without namespaces, defining your own function called `add()` in a large codebase would risk colliding with any other `add()` defined elsewhere.',
    whyImportant: 'Overloading-vs-overriding mix-ups are one of the single most common OOP interview slip-ups — this topic exists to make sure that never happens to you.',
    keyPoints: [
      'Namespace — a logical grouping that prevents naming conflicts between identifiers sharing the same name',
      '`std` is C++\'s built-in standard namespace, containing its default classes and functions',
      'Function Overloading — multiple functions with the same name but different parameter lists, in the SAME class; resolved at compile time (static binding)',
      'Function Overriding — the same function name AND signature in base and derived class; resolved at runtime (dynamic binding) via virtual functions',
      'Operator Overloading — redefining a standard operator (like `+`) to behave differently for objects of a class',
      '`delete` releases a single object\'s memory; `delete[]` releases an array\'s memory',
      'Virtual inheritance ensures only one copy of a shared base class exists, even if it appears multiple times in an inheritance hierarchy (the "diamond problem")',
    ],
    memoryTrick: {
      type: 'mnemonic',
      text: 'Overloading = same room, different furniture (parameters) — decided at compile time. Overriding = same furniture, different room (class) — decided at runtime.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Overloading vs Overriding, one more time',
        columns: ['', 'Binding', 'Where it happens'],
        rows: [
          ['Overloading', 'Static (compile-time)', 'Same class, different parameter lists'],
          ['Overriding', 'Dynamic (runtime)', 'Base vs. derived class, same signature (needs `virtual`)'],
        ],
      },
    ],
    realWorldExample:
      '`std::cout` works because of C++\'s built-in `std` namespace — without namespaces, defining your own function called `add()` would risk conflicting with any other `add()` already defined elsewhere in a large codebase.',
    interviewQuestions: [
      { q: 'What is a namespace, and why is it used?', a: 'A logical grouping of identifiers that prevents naming conflicts when the same name is used in different parts of a program.' },
      { q: 'What\'s the core difference between overloading and overriding?', a: 'Overloading stays within one class and is resolved at compile time based on parameters; overriding spans a base-derived pair and is resolved at runtime based on the actual object type.' },
      { q: 'What is virtual inheritance used for?', a: 'Ensuring only one copy of a shared base class exists, even when it appears multiple times in a diamond-shaped inheritance hierarchy.' },
    ],
    commonMistakes: [
      { title: '"Overloading and overriding are the same idea"', detail: 'Overloading is same-class and compile-time; overriding is base-vs-derived and runtime — mixing these up is one of the most common OOP interview traps.' },
    ],
    revision: ['Namespace = avoids naming conflicts', 'Overloading: same class, compile-time', 'Overriding: base/derived, runtime', 'delete vs delete[]; virtual inheritance solves the diamond problem'],
    relatedTopics: ['polymorphism', 'inheritance'],
  },

  {
    id: 'shallow-deep-copy',
    title: 'Shallow Copy vs Deep Copy',
    description: 'What actually happens when an object holding a pointer gets copied.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'A shallow copy duplicates an object\'s member values as-is, so if it holds a pointer, both the original and the copy end up pointing to the SAME memory; a deep copy duplicates the pointed-to data itself, giving each object its own independent copy.',
    easyExplanation:
      'Imagine an object holding a house key (a pointer) rather than the house itself. A shallow copy just photocopies the key — now two people hold keys to the exact same house, and anything one of them changes inside, the other sees too. A deep copy instead builds an entirely new house and hands over a key to THAT — now each person has their own separate, independent house to do whatever they want with.',
    whyImportant: 'This is the classic reason a hand-written copy constructor is needed — the compiler\'s free default copy constructor only ever does a shallow copy.',
    keyPoints: [
      'The compiler-generated default copy constructor performs a shallow copy automatically',
      'Shallow copy — copies member values directly; any pointer member ends up shared between original and copy',
      'Deep copy — allocates new memory and copies the pointed-to data itself, so each object owns independent memory',
      'Shallow copies of pointer-holding objects risk double-free errors (both destructors try to free the same memory) and unintended shared-state bugs',
      'To get a deep copy, you must write your own custom copy constructor (and typically an overloaded assignment operator too)',
    ],
    memoryTrick: { type: 'story', text: 'Shallow copy = photocopying the house KEY (same house, shared). Deep copy = building a whole new HOUSE and handing over its own key (separate, independent).' },
    visuals: [
      {
        type: 'comparison',
        title: 'Shallow Copy vs Deep Copy',
        left: { title: 'Shallow Copy', points: ['Compiler\'s default behavior', 'Pointer members are shared', 'Risk: double-free, shared mutation bugs'] },
        right: { title: 'Deep Copy', points: ['Requires a custom copy constructor', 'Pointed-to data is duplicated', 'Each object is fully independent'] },
      },
      {
        type: 'flow',
        title: 'What goes wrong with a shallow copy of a pointer',
        steps: ['Object A holds a pointer to heap memory', 'Shallow copy creates Object B, same pointer value', 'A and B now both "own" the same memory', 'When A is destroyed, that memory is freed', 'B\'s pointer is now dangling — using it crashes or corrupts data'],
      },
    ],
    realWorldExample:
      'A class wrapping a dynamically-allocated array needs a hand-written deep copy constructor — otherwise, copying one object and modifying its array would silently modify the "original" object\'s array too, since a shallow copy would leave them sharing the exact same underlying memory.',
    interviewQuestions: [
      { q: 'What kind of copy does the compiler\'s default copy constructor perform?', a: 'A shallow copy — it copies member values directly, without duplicating any memory a pointer member points to.' },
      { q: 'Why can a shallow copy cause a program crash?', a: 'If two objects share a pointer to the same heap memory, one object\'s destructor freeing that memory leaves the other holding a dangling pointer — using it afterward causes undefined behavior.' },
      { q: 'How do you actually implement a deep copy?', a: 'By writing a custom copy constructor (and usually an overloaded assignment operator) that allocates new memory and copies the pointed-to data itself, rather than just copying the pointer value.' },
    ],
    commonMistakes: [
      { title: '"The default copy constructor is always safe to use"', detail: 'It\'s only safe for classes with no pointer/dynamically-allocated members — otherwise it silently creates shared, unintentionally-linked state between the original and the copy.' },
    ],
    revision: ['Default copy constructor = shallow copy', 'Shallow: pointer shared, risk of double-free', 'Deep: pointed-to data duplicated, fully independent', 'Deep copy needs a hand-written copy constructor'],
    relatedTopics: ['constructors-destructors', 'this-pointer-friend-aggregation'],
  },

  {
    id: 'diamond-problem',
    title: 'The Diamond Problem & Virtual Inheritance',
    description: 'What goes wrong when multiple inheritance creates two paths to the same ancestor.',
    readingTime: 5,
    difficulty: 'Hard',
    quickDefinition:
      'The Diamond Problem occurs when a class inherits from two classes that both inherit from the same base class, creating ambiguity about which copy of the base class\'s members to use; virtual inheritance solves it by ensuring only one shared copy of that base class exists.',
    easyExplanation:
      'Picture class D inheriting from both B and C, while B and C both separately inherit from A. Without any fix, D actually ends up with TWO separate copies of A\'s data — one via B, one via C — and the compiler has no idea which one you mean when you reference A\'s members through D. Virtual inheritance fixes this by declaring "there\'s only ever ONE A, shared by everyone," collapsing those two copies back down into a single one.',
    whyImportant: 'The Diamond Problem is the single most common "why is multiple inheritance dangerous" interview question in C++ specifically — and it\'s exactly why Java refuses to support multiple inheritance through classes at all.',
    keyPoints: [
      'Diamond Problem — arises when class D inherits from both B and C, and B and C both inherit from the same class A',
      'Without a fix, D contains two separate, ambiguous copies of A\'s members (one through B, one through C)',
      'Virtual Inheritance — declaring "class B : virtual public A" (and similarly for C) ensures D shares just ONE copy of A',
      'Virtual inheritance is applied at the B/C level (where they inherit from A), not at D',
      'This is precisely why Java doesn\'t allow multiple inheritance through classes at all — it sidesteps the ambiguity entirely by disallowing it',
    ],
    memoryTrick: { type: 'story', text: 'Two children (B and C) both claim to have inherited grandma\'s (A\'s) recipe book. Without virtual inheritance, their kid (D) somehow ends up with two conflicting copies of the same book. Virtual inheritance is grandma saying "there\'s only ONE recipe book, and you\'re all sharing it" — no more ambiguity.' },
    visuals: [
      {
        type: 'tree',
        title: 'The diamond shape',
        root: 'A (base class)',
        children: [
          { label: 'B (inherits A)', children: [{ label: 'D (inherits B & C)' }] },
          { label: 'C (inherits A)', children: [{ label: 'D (inherits B & C)' }] },
        ],
      },
      {
        type: 'comparison',
        title: 'Without vs With virtual inheritance',
        left: { title: 'Without virtual inheritance', points: ['D gets 2 separate copies of A', 'Ambiguous which copy a member call means', 'Compiler error on direct access'] },
        right: { title: 'With virtual inheritance', points: ['D gets exactly 1 shared copy of A', 'No ambiguity — one unambiguous member set', 'B and C both declare "virtual public A"'] },
      },
    ],
    realWorldExample:
      'A class hierarchy like ElectricCar and HybridCar both inheriting from Vehicle, and a FutureCar class inheriting from both — without virtual inheritance, FutureCar would confusingly contain two separate Vehicle sub-objects instead of one shared one.',
    interviewQuestions: [
      { q: 'What is the Diamond Problem?', a: 'The ambiguity that arises when a class inherits from two classes that both themselves inherit from the same base class, resulting in two conflicting copies of that base class\'s members.' },
      { q: 'How does virtual inheritance solve the Diamond Problem?', a: 'It ensures only one single shared copy of the common base class exists, no matter how many inheritance paths lead to it.' },
      { q: 'Why doesn\'t Java need virtual inheritance?', a: 'Because Java simply disallows multiple inheritance through classes entirely, sidestepping the Diamond Problem rather than solving it.' },
    ],
    commonMistakes: [
      { title: '"Virtual inheritance and virtual functions are the same concept"', detail: 'Virtual functions enable runtime polymorphism (which overridden method runs); virtual inheritance is a completely separate mechanism that resolves ambiguous shared base classes in multiple inheritance.' },
    ],
    revision: ['Diamond Problem: D gets 2 copies of A via B and C', 'Virtual inheritance: only 1 shared copy of A', 'Declared at B/C level: "virtual public A"', 'Java avoids this by banning multiple class inheritance'],
    relatedTopics: ['inheritance', 'virtual-functions'],
  },

  {
    id: 'object-slicing',
    title: 'Object Slicing',
    description: 'What happens when a derived class object is squeezed into a base class variable.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'Object slicing happens when a derived class object is assigned to a base class object BY VALUE — only the base class portion is copied, and every derived-class-specific member is "sliced off" and lost.',
    easyExplanation:
      'Imagine a derived class object as a full multi-page form, and a base class object as a smaller form with fewer fields. Assigning the derived object directly into the base object (by value, not by pointer/reference) is like photocopying only the first page — everything on the extra pages that made it "derived" just gets cut off, permanently.',
    whyImportant: 'Object slicing is a subtle, silent bug — no compiler error, no crash, just quietly wrong behavior — making it a favorite "spot the bug" interview question.',
    keyPoints: [
      'Object slicing occurs specifically when assigning BY VALUE — Derived object assigned into a Base object variable (not a pointer or reference)',
      'Only the Base class\'s portion of the data is copied; all Derived-specific members are permanently lost ("sliced off")',
      'This is NOT the same as runtime polymorphism — polymorphism needs a Base pointer or reference to a Derived object, not a plain Base object copy',
      'Passing a Derived object into a function that takes a Base object BY VALUE (not by reference) also triggers slicing',
      'Fix — always use Base class pointers or references (Base* or Base&) instead of plain Base objects, to avoid slicing',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Assign by VALUE, and the derived parts get sliced clean off — like a cookie cutter shape cutting away everything outside its own outline.' },
    visuals: [
      {
        type: 'flow',
        title: 'How slicing happens',
        steps: ['Derived d; (has base + derived members)', 'Base b = d; ← assignment BY VALUE', 'Only the Base portion is copied into b', 'All Derived-specific members are silently lost'],
      },
      {
        type: 'comparison',
        title: 'Sliced vs Not Sliced',
        left: { title: 'Gets sliced', points: ['Base b = derivedObj; (by value)', 'void func(Base b) {...} passed a Derived by value'] },
        right: { title: 'Stays intact — no slicing', points: ['Base* b = &derivedObj; (pointer)', 'Base& b = derivedObj; (reference)'] },
      },
    ],
    realWorldExample:
      'Storing a vector of Shape objects (instead of Shape pointers) and pushing Circle or Triangle objects into it silently slices away every shape-specific field — a classic real-world bug when developers reach for value-type containers without thinking about polymorphism.',
    interviewQuestions: [
      { q: 'What is object slicing?', a: 'When a derived class object is assigned by value into a base class object, causing all derived-class-specific data to be silently lost, keeping only the base class portion.' },
      { q: 'How do you avoid object slicing?', a: 'Use base class pointers or references (Base* or Base&) instead of plain base class objects, so the full derived object stays intact.' },
      { q: 'Does object slicing cause a compiler error?', a: 'No — it compiles and runs fine; it just silently loses data, which is exactly what makes it dangerous.' },
    ],
    commonMistakes: [
      { title: '"Passing an object by value is always just a harmless copy"', detail: 'If that object is actually a derived class instance being passed into a base-class-typed parameter, the copy silently loses every derived-specific member — a real, common bug.' },
    ],
    revision: ['Slicing = assigning Derived → Base BY VALUE', 'Only Base portion survives; Derived parts are lost', 'No compiler error — silent bug', 'Fix: use Base* or Base& instead of plain Base objects'],
    relatedTopics: ['virtual-functions', 'inheritance'],
  },

  {
    id: 'static-members-cpp',
    title: 'Static Members in C++',
    description: 'One shared copy per class, not per object — for member variables and member functions.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A static member (variable or function) in C++ belongs to the class itself rather than to any individual object — every object of that class shares the exact same static member, and it can be accessed even without creating any object at all.',
    easyExplanation:
      'A regular member variable is separate for every object — but a static member variable is shared by ALL objects of that class at once, almost like a single shared notice board every object can read and write to. A static member function can be called directly through the class name, without ever creating an object, and it can only access other static members (it has no "this" pointer, because it isn\'t tied to any specific object).',
    whyImportant: '"Can a static member function access non-static members?" is a very common trap question testing whether you understand that static functions have no "this" pointer at all.',
    keyPoints: [
      'A static member variable is shared across every object of the class — there is exactly one copy',
      'A static member variable must be defined (given storage) once outside the class, in addition to being declared inside it',
      'A static member function can be called via the class name directly (ClassName::function()), with no object required',
      'A static member function has NO "this" pointer, so it can only access other static members — never non-static (instance) members',
      'Static members exist even before any object of the class has been created',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Static = "stapled to the class," not "handed to each object." One copy, shared, accessible even with zero objects around.' },
    visuals: [
      {
        type: 'comparison',
        title: 'Instance member vs static member',
        left: { title: 'Instance member', points: ['One separate copy per object', 'Needs an object to access it', 'Accessible via "this" inside member functions'] },
        right: { title: 'Static member', points: ['Exactly one copy, shared by the class', 'Accessible via ClassName:: with no object needed', 'No "this" pointer available in static functions'] },
      },
      {
        type: 'table',
        title: 'What a static function can and can\'t touch',
        columns: ['Can access', 'Cannot access'],
        rows: [['Other static members', 'Non-static (instance) members'], ['Called via ClassName::func()', 'The "this" pointer (doesn\'t exist here)']],
      },
    ],
    realWorldExample:
      'A "totalStudents" static variable on a Student class stays as one single shared counter — incrementing it in any one Student\'s constructor updates the same shared number every other Student object (and the class itself) sees.',
    interviewQuestions: [
      { q: 'Can a static member function access this class\'s non-static members?', a: 'No — a static function has no "this" pointer since it isn\'t tied to any specific object, so it can only access other static members.' },
      { q: 'Do you need to create an object to call a static member function?', a: 'No — it can be called directly through the class name, e.g. ClassName::function().' },
      { q: 'Why must a static member variable be defined outside the class as well as declared inside it?', a: 'The in-class declaration alone doesn\'t allocate storage for it — a single definition outside the class actually reserves the shared memory it needs.' },
    ],
    commonMistakes: [
      { title: '"Every object gets its own copy of a static member"', detail: 'The entire point of static is the opposite — there is exactly ONE shared copy across every object of that class, not one per object.' },
    ],
    revision: ['static member = one copy shared by the whole class', 'Callable via ClassName:: with no object needed', 'Static functions have no "this" — only touch other static members', 'Must define static variables once outside the class too'],
    relatedTopics: ['this-pointer-friend-aggregation', 'classes-objects'],
  },

  {
    id: 'operator-overloading',
    title: 'Operator Overloading',
    description: 'Making a standard operator like + behave differently for your own class.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'Operator overloading redefines what a standard operator (like +, ==, or <<) does when applied to objects of a user-defined class, letting objects be combined or compared with natural, familiar syntax.',
    easyExplanation:
      'By default, C++ has no idea what "+" should mean for two Complex-number objects or two Vector objects — it only knows + for built-in types like int and double. Operator overloading teaches the language a new meaning: "when you see obj1 + obj2 for THIS class, actually run this specific function instead." The object still looks like it\'s using ordinary math syntax, but underneath, a real function call is happening.',
    whyImportant: 'It was flagged as a top interview topic in the original notes for good reason — "overload the + operator for a class" is one of the most common live-coding exercises in a C++ round.',
    keyPoints: [
      'Operator overloading redefines a standard operator\'s behavior for a user-defined class',
      'Implemented either as a member function or as a friend function of the class',
      'Syntax: returnType operator+(const ClassName& obj) { ... } defines what + means for that class',
      'Most operators can be overloaded (+, -, ==, <<, [], (), etc.) — but a few (like ::, ., sizeof) cannot',
      'Overloading doesn\'t change an operator\'s precedence or number of operands, only what it actually computes',
      'This is Compile-Time Polymorphism, in the same family as method overloading',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Operator overloading doesn\'t invent new symbols — it teaches OLD symbols (+, ==, <<) a NEW trick, specific to your class.' },
    visuals: [
      {
        type: 'flow',
        title: 'What "obj1 + obj2" really does, once overloaded',
        steps: ['You write: obj1 + obj2', 'Compiler sees obj1 and obj2 are a class type', 'It calls operator+(obj1, obj2) behind the scenes', 'That function\'s return value becomes the result'],
      },
      {
        type: 'table',
        title: 'Commonly overloaded operators',
        columns: ['Operator', 'Typical use once overloaded'],
        rows: [
          ['+', 'Add two objects (e.g. two Complex numbers, two Vectors)'],
          ['==', 'Compare two objects for logical equality'],
          ['<<', 'Print an object directly via cout << obj'],
          ['[]', 'Access an object like an array (e.g. a custom container class)'],
          ['()', 'Make an object "callable" like a function'],
        ],
      },
      {
        type: 'comparison',
        title: 'Operator Overloading vs Method Overloading',
        left: { title: 'Operator Overloading', points: ['Redefines a symbol (+, ==, etc.)', 'Called via natural operator syntax', 'One class, teaching a symbol new meaning'] },
        right: { title: 'Method Overloading', points: ['Redefines a named function', 'Called by its normal function name', 'One class, multiple versions by parameter list'] },
      },
    ],
    realWorldExample:
      'A Complex number class overloading + lets you write c3 = c1 + c2 directly, exactly like adding two plain numbers, instead of having to call an awkward c3 = c1.add(c2) every time.',
    interviewQuestions: [
      { q: 'What is operator overloading?', a: 'Redefining what a standard operator does when applied to objects of a user-defined class, so it behaves meaningfully for that type.' },
      { q: 'Can every operator in C++ be overloaded?', a: 'No — most can, but a few (like ::, the member-access dot operator ., and sizeof) cannot be overloaded.' },
      { q: 'Is operator overloading compile-time or runtime polymorphism?', a: 'Compile-time — the compiler resolves exactly which overloaded operator function to call based on the operand types, before the program runs.' },
    ],
    commonMistakes: [
      { title: '"Overloading + changes its precedence or how many operands it takes"', detail: 'Overloading only changes WHAT the operator computes for your class — it can\'t alter its precedence, associativity, or the number of operands it works on.' },
    ],
    revision: ['Operator overloading = teaching a standard operator new class-specific behavior', 'Implemented as a member or friend function', 'Can\'t overload ::, ., sizeof, and a few others', 'Compile-time polymorphism, same family as method overloading'],
    relatedTopics: ['polymorphism', 'this-pointer-friend-aggregation'],
  },
];

export default oopTopics;
