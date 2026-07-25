// Operating Systems — full topic data
// Shape reference: see src/data/CN/topics.js for the canonical example.

const osTopics = [
  {
    id: 'os-basics',
    title: 'What is an OS?',
    description: 'The interface between user and hardware, and the five classic types of OS.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'An Operating System is the interface between a user and hardware — it manages process execution, resource allocation, CPU scheduling, and file management so programs run conveniently and efficiently.',
    easyExplanation:
      "Think of the OS as a hotel manager. Guests (your programs) never deal with electricity, plumbing, or room allocation directly — the manager handles all of that behind the scenes so guests just enjoy their stay. The OS does the same for your apps and the hardware underneath them.",
    whyImportant:
      'Every OS interview opens here — and the 5 classic types (Batch, Multiprogramming, Multitasking, Time Sharing, Real-Time) are a guaranteed rapid-fire question.',
    keyPoints: [
      'Interface between user and hardware',
      'Batch OS — runs similar jobs one after another, no interaction',
      'Multiprogramming OS — switches to another job during I/O wait so the CPU is never idle',
      'Multitasking OS — switches so fast between jobs it feels simultaneous to the user',
      'Time Sharing OS — interactive, responds to live user input (e.g. keyboard)',
      'Real Time OS — built for dedicated tasks with strict, fixed deadlines',
      'Multiprocessing (a separate concept from the 5 types above) — uses two or more CPUs within one system to run processes in true parallel, not just interleaved',
    ],
    memoryTrick: {
      type: 'story',
      text: 'A hotel manager evolves over time: first handles one guest group at a time (Batch), learns to juggle guests during downtime (Multiprogramming), gets so fast guests feel personally attended non-stop (Multitasking), starts live-chatting with guests (Time Sharing), and finally handles emergency requests within strict deadlines (Real-Time).',
    },
    visuals: [
      {
        type: 'table',
        title: 'The 5 types of OS',
        columns: ['Type', 'Key idea', 'Example'],
        rows: [
          ['Batch', 'Jobs run one after another automatically', 'Old payroll processing systems'],
          ['Multiprogramming', 'CPU switches to another job during I/O wait', 'Early multi-user mainframes'],
          ['Multitasking', 'Fast switching feels simultaneous', 'Your laptop running many apps at once'],
          ['Time Sharing', 'Interactive — user gives input directly', 'A Linux/Unix terminal session'],
          ['Real Time', 'Strict deadlines, dedicated tasks', 'Pacemakers, flight control systems'],
        ],
      },
      {
        type: 'comparison',
        title: 'Multiprogramming vs Multiprocessing — don\'t mix these up',
        left: { title: 'Multiprogramming', points: ['One CPU', 'Switches between jobs during I/O wait', 'Keeps the single CPU busy'] },
        right: { title: 'Multiprocessing', points: ['Two or more CPUs', 'Processes run in true parallel', 'Higher real throughput'] },
      },
    ],
    realWorldExample:
      'Your laptop running a browser, a music player, and a code editor "at once" is Multitasking OS in action — fast switching gives the illusion of true parallel execution.',
    interviewQuestions: [
      { q: 'What is an Operating System?', a: 'Software that acts as an interface between the user and hardware, managing execution, resources, memory, and files.' },
      { q: 'Difference between Multiprogramming and Multitasking?', a: 'Multiprogramming is about never leaving the CPU idle by switching jobs during I/O wait; multitasking is about fast, user-visible switching that feels simultaneous.' },
      { q: 'What is a Real-Time OS used for?', a: 'Dedicated systems with strict, fixed time constraints — like pacemakers or flight control systems.' },
      { q: 'How is Multiprocessing different from Multiprogramming?', a: 'Multiprogramming uses ONE CPU switching between jobs to avoid idle time; Multiprocessing uses two or more CPUs to run processes in genuine parallel.' },
    ],
    commonMistakes: [
      { title: '"Multiprogramming and Multitasking are the same thing"', detail: 'Multiprogramming just prevents CPU idle time; multitasking is specifically about rapid, user-perceptible switching between tasks.' },
      { title: '"Multiprocessing is just another name for Multiprogramming"', detail: 'Multiprogramming still runs on a single CPU via switching; Multiprocessing specifically requires multiple physical CPUs working in true parallel.' },
    ],
    revision: ['OS = interface between user & hardware', 'Batch → Multiprogramming → Multitasking → Time Sharing → Real-Time', 'Multiprocessing = multiple CPUs, true parallelism (a separate axis)'],
    relatedTopics: ['process-scheduling', 'threads'],
  },

  {
    id: 'process-scheduling',
    title: 'Process Scheduling',
    description: 'Arrival, burst, waiting & turnaround time — the vocabulary of scheduling.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A process is a program under execution, tracked by its Program Counter (PC) and represented by a Process Control Block (PCB). Process scheduling decides which process runs on the CPU next, tracked via five key metrics: arrival time, burst time, completion time, turnaround time, and waiting time.',
    easyExplanation:
      'Think of processes as customers in a bank queue. Arrival Time is when you enter, Burst Time is how long your transaction takes at the counter, Completion Time is when you leave, Turnaround Time is your total time in the bank, and Waiting Time is how long you stood around before it was your turn. The bank also keeps a file on you (the PCB) tracking exactly where you are in your transaction (the PC).',
    whyImportant:
      'Numerical problems computing turnaround/waiting time are a guaranteed part of almost every OS exam or interview, and "what is a process / PCB" is the near-universal opener before them.',
    keyPoints: [
      'Process — a program under execution, not just the static code sitting on disk',
      'Program Counter (PC) — points to the address of the next instruction to execute for that process',
      'Process Control Block (PCB) — the data structure holding a process\'s state, PC, registers, and scheduling info',
      'Arrival Time — when the process enters the ready queue',
      'Burst Time — time the process actually needs on the CPU',
      'Completion Time — when the process finishes execution',
      'Turnaround Time = Completion Time − Arrival Time',
      'Waiting Time = Turnaround Time − Burst Time',
    ],
    memoryTrick: {
      type: 'story',
      text: 'A bank queue: Arrival = when you enter, Burst = time at the counter, Completion = when you leave, Turnaround = total time in the bank, Waiting = time spent before your turn.',
    },
    visuals: [
      {
        type: 'tree',
        title: 'What\'s inside a PCB',
        root: 'Process Control Block',
        children: [
          { label: 'Process State' },
          { label: 'Program Counter (PC)' },
          { label: 'CPU Registers' },
          { label: 'Scheduling Info' },
        ],
      },
      { type: 'flow', title: 'A process\'s journey', steps: ['Process arrives (Arrival Time)', 'Waits in ready queue', 'Gets the CPU (Burst Time)', 'Finishes (Completion Time)'] },
      {
        type: 'table',
        title: 'The two key formulas',
        columns: ['Metric', 'Formula'],
        rows: [['Turnaround Time', 'Completion Time − Arrival Time'], ['Waiting Time', 'Turnaround Time − Burst Time']],
      },
    ],
    realWorldExample:
      'Ordering at a fast-food counter — Arrival is when you join the line, Burst is how long your order takes to prepare, and Waiting is all the standing-around time before you actually get served.',
    interviewQuestions: [
      { q: 'What is a process?', a: 'A program under execution — distinct from the static program code sitting on disk.' },
      { q: 'What is a PCB and what does it store?', a: 'The Process Control Block — a data structure holding a process\'s current state, program counter, CPU registers, and scheduling information.' },
      { q: 'What is Turnaround Time?', a: 'Completion Time minus Arrival Time — the total time a process spends in the system.' },
      { q: 'What is Waiting Time?', a: 'Turnaround Time minus Burst Time — the time spent waiting, excluding actual execution.' },
      { q: 'Why do we track these metrics at all?', a: 'To measure and compare how efficient different scheduling algorithms are.' },
    ],
    commonMistakes: [
      { title: 'Confusing a "process" with a "program"', detail: 'A program is just static code on disk; a process is that program actively running, with its own PCB, memory, and execution state.' },
      { title: 'Confusing Turnaround Time with Waiting Time', detail: 'Turnaround Time includes the burst (execution) time; Waiting Time is only the time NOT spent executing.' },
    ],
    revision: ['Process = program under execution', 'PCB stores PC, registers, state', 'Arrival → Burst → Completion', 'Turnaround = Completion − Arrival', 'Waiting = Turnaround − Burst'],
    relatedTopics: ['cpu-scheduling-algorithms', 'threads'],
  },

  {
    id: 'threads',
    title: 'Threads & Processes',
    description: 'The lightweight unit of CPU execution, and how it differs from a process.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'A thread is a lightweight process — the basic unit of CPU utilization — with its own program counter, registers, and stack, while sharing code, data, files and signals with sibling threads of the same process.',
    easyExplanation:
      'If a process is a whole restaurant, threads are the individual staff working inside it — a chef, a waiter, a cashier — each doing their own job with their own to-do list (stack), but all sharing the same kitchen, ingredients, and building (code, data, files).',
    whyImportant: '"Thread vs Process" is one of the most repeated OS theory questions in placement interviews.',
    keyPoints: [
      'Lightweight process — the basic unit of CPU utilization',
      'Has its own program counter, register set, and stack',
      'Shares code section, data section, files & signals with sibling threads',
      'fork() creates a new process; n calls of fork() generate 2ⁿ − 1 child processes',
      'Two types: User threads (managed by the app) and Kernel threads (managed by the OS)',
      'Advantages of multithreading: better responsiveness, resource sharing within the process, economical (cheaper than creating new processes), and full use of multiprocessing architecture',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Threads are staff members sharing one restaurant — each has their own task list (stack), but they all share the same kitchen and ingredients (code & data).',
    },
    visuals: [
      {
        type: 'comparison',
        title: 'Process vs Thread',
        left: { title: 'Process', points: ['Heavyweight', 'Own memory space', 'Expensive to create', 'Crash is isolated'] },
        right: { title: 'Thread', points: ['Lightweight', 'Shares memory with siblings', 'Cheap to create', 'Crash can affect the whole process'] },
      },
      { type: 'flow', title: 'What fork() does', steps: ['Process calls fork()', 'OS creates an exact copy', 'Parent process continues', 'Child process runs independently'] },
      {
        type: 'circle',
        title: 'Why go multithreaded?',
        center: 'Multithreading',
        satellites: ['Responsiveness', 'Resource Sharing', 'Economical', 'Uses Multiprocessing'],
      },
    ],
    realWorldExample:
      'A word processor might have one thread handling typing, another running spell-check in the background, and another auto-saving — all inside the same process, sharing the same open document in memory.',
    interviewQuestions: [
      { q: 'What is a thread?', a: 'A lightweight process and the basic unit of CPU utilization, with its own PC, registers, and stack.' },
      { q: 'What does a thread share vs. keep private?', a: 'It shares code, data, files, and signals with sibling threads, but keeps its own program counter, registers, and stack private.' },
      { q: 'How many child processes does n calls of fork() create?', a: '2ⁿ − 1 child processes.' },
      { q: 'What are the advantages of multithreaded programming?', a: 'Better responsiveness to users, resource sharing within the process, lower cost than spawning new processes, and fuller use of multiprocessing hardware.' },
    ],
    commonMistakes: [
      { title: '"A crashed thread never affects the rest of the process"', detail: 'Because threads share memory, an unhandled crash in one thread can bring down the entire shared process.' },
    ],
    revision: ['Thread = lightweight unit of CPU execution', 'Own PC, registers, stack', 'Shares code/data/files with siblings', 'n fork() calls → 2ⁿ − 1 children', 'Multithreading: responsive, shares resources, economical, uses multiprocessing fully'],
    relatedTopics: ['process-scheduling', 'synchronization'],
  },

  {
    id: 'cpu-scheduling-algorithms',
    title: 'CPU Scheduling Algorithms',
    description: 'FCFS, SJF, SRTF, Round Robin, Priority, HRRN, MLQ, MLFQ.',
    readingTime: 7,
    difficulty: 'Medium',
    quickDefinition:
      'CPU scheduling algorithms — FCFS, SJF, SRTF, Round Robin, Priority, HRRN, MLQ, and MLFQ — decide the order in which waiting processes get CPU time.',
    easyExplanation:
      'Imagine a coffee shop trying different queueing strategies: FCFS serves whoever\'s first in line. SJF serves the quickest orders first. SRTF is SJF that can reshuffle if a quicker order shows up mid-queue. Round Robin gives everyone a fixed 2-minute turn. Priority serves VIPs first. HRRN serves whoever has waited longest relative to their order size. MLQ keeps separate queues for VIPs vs regulars. MLFQ lets customers move between queues based on their behavior.',
    whyImportant: 'This exact list is asked constantly, and interviewers love testing whether you know which ones are preemptive.',
    keyPoints: [
      'FCFS — simplest; schedules strictly by arrival time',
      'SJF — shortest burst time goes first (non-preemptive)',
      'SRTF — preemptive version of SJF, based on shortest remaining time',
      'Round Robin — each process gets a fixed time slice, cyclically',
      'Priority (Non-preemptive) — highest priority runs first; ties broken by arrival time',
      'HRRN — highest response ratio next; specifically designed to avoid starvation. Response Ratio = (Waiting Time + Burst Time) / Burst Time',
      'MLQ — processes sorted into separate priority queues; higher queues fully clear first',
      'MLFQ — like MLQ, but processes can move between queues based on CPU behavior',
    ],
    memoryTrick: {
      type: 'story',
      text: 'A coffee shop tries every queueing strategy in turn: first-come-first-served, quickest-order-first, VIP-first, everyone-gets-2-minutes, and so on — each solving a different fairness or speed problem.',
    },
    visuals: [
      {
        type: 'table',
        title: 'At a glance',
        columns: ['Algorithm', 'Preemptive?', 'Best for', 'Downside'],
        rows: [
          ['FCFS', 'No', 'Simple systems', 'Convoy effect (short jobs stuck behind long ones)'],
          ['SJF', 'No', 'Minimizing average wait', 'Needs burst time known in advance'],
          ['SRTF', 'Yes', 'Dynamic workloads', 'Frequent switching overhead'],
          ['Round Robin', 'Yes', 'Time-sharing systems', 'Overhead if time quantum is too small'],
          ['Priority (NP)', 'No', 'Importance-based tasks', 'Starvation of low-priority processes'],
          ['HRRN', 'No', 'Avoiding starvation', 'More complex to calculate'],
          ['MLQ', 'Depends', 'Categorized workloads', 'Lower queues can starve'],
          ['MLFQ', 'Yes', 'Adaptive, mixed workloads', 'Complex to tune correctly'],
        ],
      },
      {
        type: 'table',
        title: 'Formula to remember',
        columns: ['Algorithm', 'Formula'],
        rows: [['HRRN', 'Response Ratio = (Waiting Time + Burst Time) ÷ Burst Time']],
      },
    ],
    realWorldExample:
      'A hospital ER mimics Priority Scheduling in real life — the most critical patients are treated first, while minor injuries wait, regardless of who arrived first.',
    interviewQuestions: [
      { q: 'Difference between SJF and SRTF?', a: 'SJF is non-preemptive — once started, a process runs to completion. SRTF is its preemptive version, switching if a shorter job arrives.' },
      { q: 'Which algorithm can cause starvation, and how is it fixed?', a: 'Priority Scheduling can starve low-priority processes; this is commonly fixed using Aging, which gradually increases a waiting process\'s priority.' },
      { q: 'What is the convoy effect in FCFS?', a: 'Short processes get stuck waiting behind one long process, inflating the average waiting time for everyone.' },
    ],
    commonMistakes: [
      { title: 'Confusing SJF (non-preemptive) with SRTF (preemptive)', detail: 'This is one of the most common exam traps — SJF commits once started; SRTF can interrupt for a shorter incoming job.' },
    ],
    revision: ['FCFS: arrival order', 'SJF/SRTF: shortest burst first (non-preemptive/preemptive)', 'RR: fixed time slices', 'Priority: importance-based, can starve', 'HRRN: avoids starvation', 'MLQ/MLFQ: multiple queues, MLFQ allows movement'],
    relatedTopics: ['process-scheduling', 'disk-scheduling'],
  },

  {
    id: 'critical-section',
    title: 'Critical Section Problem',
    description: 'Mutual exclusion, progress, and bounded waiting.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'The critical section is the part of a program that accesses shared variables — a valid solution to safely sharing it needs Mutual Exclusion, Progress, and Bounded Waiting.',
    easyExplanation:
      'Imagine a single shared notebook two people are trying to write in at the same time — write simultaneously and the sentence gets garbled. The critical section is the code that touches that shared notebook, and these three rules make sure only one writer goes at a time, fairly.',
    whyImportant: 'This is the conceptual foundation for every synchronization and deadlock question that follows it.',
    keyPoints: [
      'Critical Section — the code that accesses/updates shared variables',
      'Remainder Section — everything else in the program',
      'Race Condition — the outcome depends on the order operations happen to run in',
      'Mutual Exclusion — only one process may be in the critical section at a time',
      'Progress — the decision to enter can\'t be postponed indefinitely by outsiders',
      'Bounded Waiting — there\'s a limit on how many times others can "cut in line" first',
    ],
    memoryTrick: { type: 'story', text: 'A single notebook shared by two writers needs an "only one pen at a time" rule — that rule is the critical section solution.' },
    visuals: [
      { type: 'circle', title: 'The 3 required conditions', center: 'Valid Solution', satellites: ['Mutual Exclusion', 'Progress', 'Bounded Waiting'] },
      { type: 'flow', title: 'Entering a critical section', steps: ['Process wants to enter', 'Checks entry rule / lock', 'Enters critical section', 'Exits critical section', 'Continues in remainder section'] },
    ],
    realWorldExample:
      'A single bathroom key shared by an office — only one person can use it at a time (mutual exclusion), it\'s available to whoever needs it next when free (progress), and no one should wait forever while others keep cutting in (bounded waiting).',
    interviewQuestions: [
      { q: 'What is the critical section problem?', a: 'Ensuring multiple processes can safely access shared resources without corrupting data.' },
      { q: 'Name the 3 required conditions for a valid solution.', a: 'Mutual Exclusion, Progress, and Bounded Waiting.' },
      { q: 'What is a race condition?', a: 'A bug where the final output depends on the unpredictable timing/order in which processes access shared data.' },
    ],
    commonMistakes: [
      { title: '"Race condition" and "deadlock" are the same thing', detail: 'A race condition produces corrupted or inconsistent output due to timing; a deadlock is processes getting permanently stuck waiting on each other.' },
    ],
    revision: ['Critical section = code touching shared data', 'Needs: Mutual Exclusion + Progress + Bounded Waiting', 'Race condition = order-dependent, incorrect output'],
    relatedTopics: ['synchronization', 'deadlocks'],
  },

  {
    id: 'synchronization',
    title: 'Synchronization: Semaphores & Mutex',
    description: 'How concurrent processes avoid stepping on each other.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Semaphores and mutexes are synchronization tools that coordinate access to shared resources so concurrent processes don\'t corrupt shared data.',
    easyExplanation:
      'A semaphore is like a signboard showing how many parking spots are free — processes check the number before entering. A mutex is simpler: a single key, and only whoever is holding it may proceed.',
    whyImportant: 'Producer-consumer style questions using semaphores/mutex show up constantly in both interviews and coding rounds.',
    keyPoints: [
      'Semaphore — a protected variable indicating a shared resource\'s status',
      'Binary semaphore (0 or 1) — implements mutual exclusion',
      'Counting semaphore — an integer over an unrestricted range, for multiple resource instances',
      'Mutex — provides mutual exclusion via a single "key"; only its holder can proceed',
      'At any moment, only one thread can hold the mutex and work with the shared buffer',
    ],
    memoryTrick: {
      type: 'story',
      text: 'A public restroom with a single key (mutex) — whoever holds it can go in, everyone else waits. A parking garage sign showing "5 spots free" (counting semaphore) — each car checks and decrements before entering.',
    },
    visuals: [
      {
        type: 'comparison',
        title: 'Binary vs Counting Semaphore',
        left: { title: 'Binary Semaphore', points: ['Value: 0 or 1', 'Implements mutual exclusion', 'One resource instance'] },
        right: { title: 'Counting Semaphore', points: ['Value: unrestricted range', 'Manages multiple instances', 'Useful for resource pools'] },
      },
    ],
    realWorldExample:
      'In a producer-consumer setup, either the producer or the consumer can hold the mutex (key) at a time — as long as the buffer is being filled by the producer, the consumer waits, and vice versa.',
    interviewQuestions: [
      { q: 'What is a semaphore?', a: 'A protected variable used to lock a shared resource, with its value indicating the resource\'s current status.' },
      { q: 'Difference between binary and counting semaphore?', a: 'Binary only takes 0/1 for simple mutual exclusion; counting can range over any integer for managing multiple resource instances.' },
      { q: 'How is a mutex different from a semaphore?', a: 'A mutex is essentially a lock with ownership — only the thread that locked it can unlock it — while a semaphore is a more general signaling mechanism without that ownership restriction.' },
    ],
    commonMistakes: [
      { title: '"Mutex and binary semaphore are always identical"', detail: 'In practice, a mutex has ownership (only the locking thread can release it); a binary semaphore doesn\'t enforce that restriction.' },
    ],
    revision: ['Semaphore = protected status variable', 'Binary → mutual exclusion, Counting → resource pools', 'Mutex = single key, ownership-based lock'],
    relatedTopics: ['critical-section', 'deadlocks'],
  },

  {
    id: 'deadlocks',
    title: 'Deadlocks',
    description: 'Mutual exclusion, hold & wait, no preemption, circular wait.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'A deadlock is a state where a set of processes are permanently blocked — each one holding a resource while waiting for another resource held by someone else in the same cycle.',
    easyExplanation:
      "Imagine two cars facing each other on a single-lane bridge — each is blocking the other's path and waiting for the other to reverse first. Neither will ever move unless something intervenes. That's a deadlock.",
    whyImportant: 'The 4 necessary conditions and Banker\'s Algorithm are marked "Important" for a reason — they\'re asked in almost every OS round.',
    keyPoints: [
      'Mutual Exclusion — a resource is non-sharable; only one process can use it at a time',
      'Hold and Wait — a process holds at least one resource while waiting for more',
      'No Preemption — a resource can\'t be forcibly taken; it must be released voluntarily',
      'Circular Wait — a set of processes are waiting on each other in a closed loop',
      'All four conditions must hold simultaneously for a deadlock to occur',
      'Banker\'s Algorithm avoids deadlock by never allocating resources it can\'t fully satisfy later',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Picture 4 cars stuck on a bridge: Mutual Exclusion (only one lane), Hold & Wait (each holds their spot while waiting), No Preemption (no one is forced to reverse), Circular Wait (they\'re all facing each other in a loop).',
    },
    visuals: [
      {
        type: 'tree',
        title: 'The 4 necessary conditions',
        root: 'Deadlock',
        children: [{ label: 'Mutual Exclusion' }, { label: 'Hold and Wait' }, { label: 'No Preemption' }, { label: 'Circular Wait' }],
      },
      {
        type: 'table',
        title: 'Handling a deadlock',
        columns: ['Approach', 'Idea'],
        rows: [
          ['Prevention / Avoidance', 'Never let the system enter a deadlock state (e.g. Banker\'s Algorithm)'],
          ['Detection & Recovery', 'Let it happen, detect it, then preempt resources to break it'],
          ['Ignore it entirely', 'If deadlock is rare, just let it happen and reboot — Windows & UNIX both take this approach'],
        ],
      },
    ],
    realWorldExample:
      'Two cars meeting on a narrow bridge, each waiting for the other to back up first — nobody moves until an outside force (like the OS killing a process) intervenes.',
    interviewQuestions: [
      { q: 'What are the 4 necessary conditions for deadlock?', a: 'Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait — all four must hold at once.' },
      { q: 'What is Banker\'s Algorithm used for?', a: 'A deadlock-avoidance method that only allocates resources if doing so keeps the system in a "safe state" for everyone.' },
      { q: 'What are the three ways to handle deadlock?', a: 'Prevention/avoidance, detection & recovery, or simply ignoring the problem (the "ostrich" approach used by Windows and UNIX).' },
    ],
    commonMistakes: [
      { title: '"Any one of the four conditions causes deadlock"', detail: 'All four conditions — Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait — must hold simultaneously; missing even one prevents deadlock.' },
    ],
    revision: ['4 conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait', 'Banker\'s Algorithm = avoidance', 'Handling: prevent, detect & recover, or ignore'],
    relatedTopics: ['critical-section', 'synchronization'],
  },

  {
    id: 'memory-management',
    title: 'Memory Management',
    description: 'Partitioning, overlays, swapping and allocation schemes.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Memory management techniques let multiple processes share physical memory efficiently, through overlays, swapping, and partition-based allocation strategies.',
    easyExplanation:
      "Picture memory as office floor space shared by many companies (processes). Overlays keep only what's currently needed in that space; swapping temporarily moves an idle company's belongings to storage, freeing the floor for someone else who needs it right now.",
    whyImportant: 'Allocation strategy trade-offs (First/Best/Worst Fit) are a classic "what would you pick and why" interview question.',
    keyPoints: [
      'Overlays — keep only the currently-needed instructions/data in memory',
      'Swapping — idle processes are moved out of memory to free space for others',
      'Single Partition — memory split simply into OS space + user space',
      'Fixed Partition — memory divided into equal, fixed-size blocks',
      'Variable Partition — memory divided into flexible-size blocks',
      'Allocation strategies: First Fit, Best Fit, Worst Fit',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Parking a car: First Fit takes the very first open spot you see. Best Fit hunts for the tightest spot that still fits (less wasted space). Worst Fit deliberately picks the biggest open spot, leaving a large leftover gap.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Allocation strategies',
        columns: ['Strategy', 'How it picks', 'Downside'],
        rows: [
          ['First Fit', 'The first hole the process fits into completely', 'Can leave small unusable gaps early in memory'],
          ['Best Fit', 'The hole that leaves the least leftover space', 'Doesn\'t always give the best overall result — leaves many tiny gaps over time'],
          ['Worst Fit', 'The hole that leaves the most leftover space', 'Wastes large chunks of memory quickly'],
        ],
      },
    ],
    realWorldExample:
      'Parking a car in a lot — First Fit takes the very first open spot you see; Best Fit hunts for the tightest spot that still fits; Worst Fit picks the biggest open spot, leaving a large leftover gap.',
    interviewQuestions: [
      { q: 'What is swapping?', a: 'Temporarily moving a process\'s memory contents to disk to free up space for other processes, then bringing it back later.' },
      { q: 'Difference between First Fit and Best Fit?', a: 'First Fit takes the first hole large enough; Best Fit searches for the hole that wastes the least space.' },
      { q: 'Does Best Fit always give the best allocation?', a: 'No — it can still leave many small, unusable gaps scattered across memory over time.' },
    ],
    commonMistakes: [
      { title: '"Best Fit always performs best"', detail: 'Despite the name, Best Fit doesn\'t guarantee optimal memory use — it tends to accumulate many tiny leftover fragments over time.' },
    ],
    revision: ['Overlays: only load what\'s needed now', 'Swapping: move idle processes out temporarily', 'First/Best/Worst Fit trade-offs'],
    relatedTopics: ['paging-segmentation', 'page-replacement'],
  },

  {
    id: 'paging-segmentation',
    title: 'Paging, Segmentation & Virtual Memory',
    description: 'Two ways to organize memory, plus the virtual memory trick that lets big programs run in small RAM.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'Paging divides physical memory into equal fixed-size frames; segmentation divides it into variable-sized logical segments — both solve the fragmentation caused by requiring one contiguous memory block per process.',
    easyExplanation:
      "Paging is like tearing a book into equal-sized pages that can be stored anywhere on a shelf — order doesn't matter as long as there's a table of contents (page table). Segmentation instead keeps the book split into meaningful chapters (variable length) rather than equal-sized chunks. Virtual memory takes this further: it lets a program run even if it's bigger than the physical RAM available, by keeping only the actively-used parts in memory and the rest on disk.",
    whyImportant:
      'Virtual memory and demand paging are both flagged "Important" in most OS courses — and page faults are the natural bridge into the Page Replacement topic.',
    keyPoints: [
      'Paging — fixed, equal-sized frames; the physical & virtual frame sizes match',
      'Segmentation — variable-sized logical segments that mirror how a program is actually structured',
      'Both remove the old requirement that a process sit in one contiguous memory block',
      'External fragmentation is exactly the problem Paging was introduced to solve',
      'Logical address (generated by the CPU) vs Physical address (seen by the memory unit)',
      'Virtual memory lets processes execute even when they don\'t fully fit in physical memory',
      'Demand paging — a memory area is only swapped in from disk when it\'s actually needed',
      'A page fault is the interrupt raised when a needed page isn\'t currently loaded in memory',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Paging is a library storing every book chopped into identical-sized index cards it can slot in anywhere. Segmentation keeps whole chapters together, since chapters naturally vary in length.',
    },
    visuals: [
      {
        type: 'comparison',
        title: 'Paging vs Segmentation',
        left: { title: 'Paging', points: ['Fixed, equal-size frames', 'No external fragmentation', 'Invisible to the user'] },
        right: { title: 'Segmentation', points: ['Variable-size segments', 'Matches program structure', 'Can suffer external fragmentation'] },
      },
      { type: 'flow', title: 'What happens on a page fault', steps: ['CPU accesses a memory page', 'Page not currently in physical memory', 'Hardware raises a page fault interrupt', 'OS loads the page from disk', 'Execution resumes'] },
    ],
    realWorldExample:
      'Paging is like a library storing every book chopped into identical-sized index cards it can file anywhere; segmentation is like keeping whole chapters together since they naturally vary in size. Virtual memory is why you can run a 4GB game on an 8GB laptop that\'s also running twenty browser tabs — only the parts actually being used sit in RAM at any moment.',
    interviewQuestions: [
      { q: 'Why was paging introduced?', a: 'To eliminate external fragmentation caused by requiring a process to occupy one contiguous block of memory.' },
      { q: 'What\'s the key difference between paging and segmentation?', a: 'Paging uses fixed, equal-size units invisible to the user; segmentation uses variable-size units that map to a program\'s logical structure.' },
      { q: 'What is a page fault?', a: 'A hardware interrupt raised when a running program accesses a memory page that\'s valid but not currently loaded into physical memory.' },
      { q: 'What is demand paging?', a: 'Only loading a memory page from disk when it\'s actually needed, instead of loading everything upfront.' },
    ],
    commonMistakes: [
      { title: 'Mixing up internal and external fragmentation here', detail: 'Paging can still waste a little space in its last page (internal fragmentation) — but it\'s segmentation, not paging, that\'s prone to external fragmentation.' },
    ],
    revision: ['Paging: fixed-size frames, no external fragmentation', 'Segmentation: variable-size, matches program logic', 'Page fault = needed page not in memory', 'Virtual memory lets big programs run in small RAM'],
    relatedTopics: ['memory-management', 'page-replacement'],
  },

  {
    id: 'page-replacement',
    title: 'Page Replacement Algorithms',
    description: 'FIFO, Optimal, and LRU — and Belady\'s Anomaly.',
    readingTime: 6,
    difficulty: 'Hard',
    quickDefinition:
      'Page replacement algorithms — FIFO, Optimal, and LRU — decide which page to evict from memory when a new page must be loaded and no free frame is available.',
    easyExplanation:
      "Imagine a small whiteboard that can only hold 4 sticky notes at once. When a new note needs to go up and there's no space left, you have to pick one to remove — the oldest one on the board (FIFO), the one you genuinely won't need again for the longest time (Optimal), or the one you haven't touched in the longest time (LRU).",
    whyImportant: 'Marked "Important" for a reason — working through a reference string by hand is a guaranteed exam and interview exercise.',
    keyPoints: [
      'FIFO — removes the oldest page currently in memory',
      'Optimal — removes the page not needed again for the longest time in the future (best possible, but unrealistic since it needs future knowledge)',
      'LRU — removes the Least Recently Used page',
      'Belady\'s Anomaly — FIFO can cause MORE page faults even when given MORE frames',
      'Optimal is used only as a theoretical benchmark to judge other algorithms against',
    ],
    memoryTrick: { type: 'story', text: 'A whiteboard with room for only 4 sticky notes: FIFO removes the oldest note, LRU removes the one you haven\'t touched in the longest time, Optimal removes the one you genuinely won\'t need again soonest (if only you could know the future).' },
    visuals: [
      {
        type: 'table',
        title: 'FIFO worked example — reference string 1,3,0,3,5,6 with 3 frames',
        columns: ['Reference', 'Frames after', 'Page Fault?'],
        rows: [
          ['1', '{1}', 'Yes'],
          ['3', '{1, 3}', 'Yes'],
          ['0', '{1, 3, 0}', 'Yes'],
          ['3', '{1, 3, 0}', 'No — already in memory'],
          ['5', '{3, 0, 5} — replaced 1 (oldest)', 'Yes'],
          ['6', '{0, 5, 6} — replaced 3 (oldest)', 'Yes'],
        ],
      },
      {
        type: 'timeline',
        title: 'Belady\'s Anomaly',
        events: [
          'FIFO run with reference string (3 2 1 0 3 2 4 3 2 1 0 4) and 3 frames → 9 page faults',
          'Same reference string, but with 4 frames → 10 page faults (more frames, MORE faults)',
          'Proves more memory doesn\'t always mean fewer faults — but only for FIFO',
        ],
      },
    ],
    realWorldExample:
      "A phone with only 4 app slots visible in the app switcher — FIFO removes whichever app you opened longest ago (even if you still use it constantly), while LRU removes the app you simply haven't touched in the longest time.",
    interviewQuestions: [
      { q: 'What is Belady\'s Anomaly?', a: 'A counter-intuitive case where FIFO produces more page faults with more available frames, proving more memory doesn\'t always reduce faults.' },
      { q: 'Why is Optimal page replacement not used in practice?', a: 'It requires knowing future page requests in advance, which is impossible — it\'s only useful as a theoretical benchmark.' },
      { q: 'Difference between FIFO and LRU?', a: 'FIFO evicts whatever page has been in memory longest, regardless of use; LRU evicts whichever page hasn\'t been *used* in the longest time.' },
    ],
    commonMistakes: [
      { title: '"More memory always means fewer page faults"', detail: 'Belady\'s Anomaly disproves this specifically for FIFO — more frames can occasionally cause more faults, not fewer.' },
    ],
    revision: ['FIFO: evict oldest page', 'Optimal: evict page needed furthest in future (benchmark only)', 'LRU: evict least recently used page', 'Belady\'s Anomaly: FIFO can get worse with more frames'],
    relatedTopics: ['paging-segmentation', 'memory-management'],
  },

  {
    id: 'disk-scheduling',
    title: 'Disk Scheduling',
    description: 'FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Disk scheduling algorithms decide the order pending I/O requests are served in, to minimize how far and how often the disk arm has to move (seek time).',
    easyExplanation:
      'The disk read/write head is like an elevator moving across floors (tracks). Different algorithms decide its route: go in arrival order, jump to the nearest request, sweep in one direction like a real elevator, and so on.',
    whyImportant: 'Marked "Important" — SCAN vs LOOK trip up almost everyone the first time, which is exactly why it\'s asked so often.',
    keyPoints: [
      'Disk Access Time = Seek Time + Rotational Latency + Transfer Time',
      'FCFS — serves requests in arrival order (simple, but can be inefficient)',
      'SSTF — serves the request with the shortest seek time first (efficient short-term, can starve far-away requests)',
      'SCAN — sweeps in one direction and reverses at the disk\'s end ("elevator algorithm")',
      'C-SCAN — sweeps in one direction only, then jumps straight back to the start',
      'LOOK / C-LOOK — like SCAN/C-SCAN, but reverse at the last actual request instead of the disk\'s physical end',
    ],
    memoryTrick: {
      type: 'story',
      text: 'The disk arm is an elevator: SCAN rides all the way to the top floor even with no one waiting there; LOOK is smarter — it turns around right after the highest floor someone actually requested.',
    },
    visuals: [
      {
        type: 'table',
        title: 'Disk scheduling algorithms',
        columns: ['Algorithm', 'Behavior', 'Nickname'],
        rows: [
          ['FCFS', 'Serves requests in arrival order', '—'],
          ['SSTF', 'Nearest request first', 'Greedy'],
          ['SCAN', 'Sweeps one way, reverses at the disk\'s end', 'Elevator algorithm'],
          ['C-SCAN', 'Sweeps one way, then jumps back to the start', '—'],
          ['LOOK', 'Like SCAN, but reverses at the last request', '—'],
          ['C-LOOK', 'Like C-SCAN, but jumps to the last request (not the disk\'s end)', '—'],
        ],
      },
    ],
    realWorldExample:
      "A real elevator picking up people: SCAN keeps riding all the way to the top floor even if nobody called it there; LOOK is smarter and turns around right after the highest floor that was actually requested.",
    interviewQuestions: [
      { q: 'Why is SCAN called the elevator algorithm?', a: 'Because it moves in one direction servicing requests along the way, then reverses — exactly like a building elevator.' },
      { q: 'Difference between SCAN and LOOK?', a: 'SCAN always travels to the physical end of the disk before reversing; LOOK only travels as far as the last actual pending request.' },
      { q: 'What three components make up Disk Access Time?', a: 'Seek Time, Rotational Latency, and Transfer Time.' },
    ],
    commonMistakes: [
      { title: 'Mixing up SCAN and LOOK', detail: 'SCAN always travels to the disk\'s physical end regardless of pending requests there; LOOK stops and reverses at the last real request, saving unnecessary travel.' },
    ],
    revision: ['Disk Access Time = Seek + Rotational Latency + Transfer', 'SCAN = elevator algorithm', 'LOOK/C-LOOK skip unnecessary travel to the disk\'s end'],
    relatedTopics: ['memory-management', 'page-replacement'],
  },

  {
    id: 'key-os-terms',
    title: 'Key OS Terms',
    description: 'Kernel types, RAID, fragmentation, spooling, starvation & aging — quick-fire interview vocabulary.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'A cluster of high-frequency OS vocabulary — kernel types, RAID, fragmentation, spooling, starvation, aging, and re-entrancy — that interviewers love firing as rapid one-liners.',
    easyExplanation:
      "These terms don't fit neatly into one big topic, but they show up constantly as quick clarifying questions right after bigger topics like deadlocks or memory management — so it's worth having sharp, one-line answers ready for each.",
    whyImportant: 'These are exactly the kind of "oh, and one more thing" questions interviewers ask at the end of an OS round to see how broad your knowledge is.',
    keyPoints: [
      'Monolithic kernel — all OS code bundled into a single executable image',
      'Microkernel — only minimal, performance-critical services live in the kernel; everything else runs outside it',
      'Macro kernel — a hybrid combining monolithic and microkernel design',
      'RAID (Redundant Array of Independent Disks) — stores data redundantly across disks to improve performance/reliability; 7 RAID levels exist',
      'Internal fragmentation — wasted space inside a fixed-size allocation unit',
      'External fragmentation — wasted space scattered between variable-size allocation units',
      'Spooling — jobs are queued on disk before being sent to a slow device like a printer',
      'Starvation — a process is endlessly denied a resource it needs',
      'Aging — gradually raising a waiting process\'s priority over time to prevent starvation',
      'Re-entrancy — a program can be safely shared by multiple users if its code never modifies itself and each user\'s local data is stored separately',
      'Thrashing — the processor spends most of its time swapping pages instead of executing instructions',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Aging is like an airport check-in line that slowly bumps up the priority of anyone who\'s been waiting too long, so no one gets stuck behind an endless stream of people cutting in.',
    },
    visuals: [
      {
        type: 'circle',
        title: 'Kernel types',
        center: 'Kernel',
        satellites: ['Monolithic', 'Microkernel', 'Macro (hybrid)'],
      },
      {
        type: 'table',
        title: 'Quick reference',
        columns: ['Term', 'One-line meaning'],
        rows: [
          ['RAID', 'Redundant storage across disks for performance/reliability'],
          ['Spooling', 'Queueing jobs on disk before sending to a slow device (e.g. printer)'],
          ['Starvation', 'A process is endlessly denied a resource it needs'],
          ['Aging', 'Priority increases the longer a process waits — prevents starvation'],
          ['Thrashing', 'CPU spends more time swapping pages than executing instructions'],
        ],
      },
    ],
    realWorldExample:
      'Aging is like an airport check-in line that slowly bumps up the priority of anyone who\'s been waiting too long, so nobody gets stuck behind an endless stream of people cutting in line ahead of them.',
    interviewQuestions: [
      { q: 'Difference between a monolithic and microkernel?', a: 'A monolithic kernel bundles all OS services into one executable; a microkernel keeps only minimal core services in the kernel and runs the rest outside it.' },
      { q: 'What is RAID used for?', a: 'Storing data redundantly across multiple disks to improve performance and/or reliability.' },
      { q: 'How does aging prevent starvation?', a: 'By gradually increasing the priority of a process the longer it waits, guaranteeing it eventually gets served.' },
    ],
    commonMistakes: [
      { title: '"Starvation only happens during a deadlock"', detail: 'Starvation can happen purely from poor scheduling priority, with no deadlock involved at all — a low-priority process can be starved indefinitely even while the system runs perfectly fine otherwise.' },
    ],
    revision: ['Monolithic vs Micro vs Macro kernel', 'RAID = redundant multi-disk storage', 'Starvation ≠ Deadlock; Aging fixes starvation', 'Thrashing = excessive page swapping'],
    relatedTopics: ['deadlocks', 'memory-management'],
  },

  {
    id: 'classic-sync-problems',
    title: 'Classic Synchronization Problems',
    description: 'Producer-Consumer, Readers-Writers, and Dining Philosophers — the three problems every OS course builds semaphores around.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'Producer-Consumer, Readers-Writers, and Dining Philosophers are three named, classic problems used to teach and test process synchronization using semaphores and mutexes.',
    easyExplanation:
      'Producer-Consumer is a shared buffer where one side adds items and another removes them — too fast on either side causes overflow or starvation without careful locking. Readers-Writers is a shared resource where many readers can safely look at once, but a writer needs it all to itself. Dining Philosophers is five philosophers sharing five forks between them, where careless forking rules can leave everyone stuck waiting forever (a deadlock in disguise).',
    whyImportant: 'These three named problems are the concrete examples interviewers use to make you actually apply semaphore/mutex theory instead of just reciting definitions.',
    keyPoints: [
      'Producer-Consumer — producers add to a shared buffer, consumers remove from it; semaphores prevent overflow (buffer full) and underflow (buffer empty)',
      'Readers-Writers — multiple readers can access shared data simultaneously, but a writer needs exclusive access; solutions can favor readers, writers, or be fair to both',
      'Dining Philosophers — 5 philosophers, 5 forks; each needs both neighboring forks to eat, and a naive solution can deadlock if everyone grabs their left fork at once',
      'A common Dining Philosophers fix — allow at most 4 philosophers to try picking up forks simultaneously, breaking the circular wait',
      'All three are typically solved using semaphores (or mutex + condition variables)',
    ],
    memoryTrick: { type: 'story', text: 'A factory conveyor belt (Producer-Consumer), a library where anyone can read but only one person can edit the book at a time (Readers-Writers), and a round table where everyone reaches for the same shared forks at once (Dining Philosophers) — three different shared-resource headaches, one shared toolkit (semaphores) to fix them.' },
    visuals: [
      {
        type: 'circle',
        title: 'The 3 classic problems',
        center: 'Sync Problems',
        satellites: ['Producer-Consumer', 'Readers-Writers', 'Dining Philosophers'],
      },
      {
        type: 'table',
        title: 'What each problem is really testing',
        columns: ['Problem', 'Core risk', 'Typical fix'],
        rows: [
          ['Producer-Consumer', 'Buffer overflow / underflow', 'Semaphores tracking empty & full slots'],
          ['Readers-Writers', 'A writer and reader (or two writers) colliding', 'Reader-count tracking + a writer-exclusive lock'],
          ['Dining Philosophers', 'Circular wait → deadlock', 'Limit simultaneous fork-pickup attempts (e.g. max 4 of 5)'],
        ],
      },
      { type: 'flow', title: 'Why Dining Philosophers can deadlock', steps: ['Every philosopher picks up their LEFT fork at once', 'Everyone now waits for their RIGHT fork', 'Every right fork is already held by a neighbor', 'Circular wait → deadlock, nobody eats'] },
    ],
    realWorldExample:
      'A ride-sharing app\'s driver-matching queue is a real Producer-Consumer setup — ride requests (producers) pile into a queue, and available drivers (consumers) pull from it, with careful locking to avoid two drivers grabbing the same ride.',
    interviewQuestions: [
      { q: 'What does the Producer-Consumer problem actually test?', a: 'Whether shared-buffer access is synchronized correctly so producers never overflow it and consumers never read from an empty buffer.' },
      { q: 'In Readers-Writers, why can\'t you just let everyone access the resource simultaneously?', a: 'Because a writer modifying data at the same time a reader accesses it can expose inconsistent or partially-updated data.' },
      { q: 'How does Dining Philosophers actually deadlock, and what\'s a simple fix?', a: 'If every philosopher picks up their left fork simultaneously, everyone waits forever for their right fork — a simple fix is limiting at most 4 of the 5 philosophers to attempt picking up forks at once, breaking the circular wait.' },
    ],
    commonMistakes: [
      { title: '"These are just abstract puzzles with no real use"', detail: 'They\'re simplified stand-ins for very real systems — job queues, shared databases, and shared hardware resources all hit these exact same synchronization patterns.' },
    ],
    revision: ['Producer-Consumer: buffer overflow/underflow', 'Readers-Writers: shared reads, exclusive writes', 'Dining Philosophers: circular wait → deadlock', 'All solved via semaphores/mutex'],
    relatedTopics: ['synchronization', 'deadlocks'],
  },

  {
    id: 'context-switching',
    title: 'Context Switching',
    description: 'What actually happens in the split-second the CPU swaps from one process to another.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A context switch is the process of saving the state (context) of a currently running process and loading the saved state of another, so the CPU can switch which process it\'s executing.',
    easyExplanation:
      'Imagine a chef juggling three dishes at once by working on each for a few minutes at a time. Every time they switch dishes, they must remember exactly where they left off on the one they\'re pausing (save its state) and recall exactly where they left off on the one they\'re resuming (load its state). That bookkeeping overhead — remembering and recalling — is exactly what a context switch is doing for the CPU.',
    whyImportant: 'Context switching is the hidden cost behind "why isn\'t more multitasking always better" — it\'s a classic follow-up once scheduling algorithms come up.',
    keyPoints: [
      'A context switch saves the current process\'s state (in its PCB) and loads the next process\'s saved state',
      'Saved state includes: program counter, CPU registers, and process-specific scheduling info',
      'Triggered by: an interrupt, an I/O request/wait, a timer expiring (in preemptive scheduling), or a higher-priority process arriving',
      'Context switching itself does zero useful work — it\'s pure overhead, so too-frequent switching hurts overall throughput',
      'This overhead is one reason Round Robin\'s time quantum size matters so much — too short, and switching overhead dominates',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Context switch = Save the old, Load the new — the CPU\'s version of "let me bookmark this page before I open a different book."' },
    visuals: [
      {
        type: 'flow',
        title: 'Anatomy of a context switch',
        steps: ['Process A is running', 'Interrupt/timer/I-O event occurs', 'Save Process A\'s state into its PCB', 'Load Process B\'s saved state from its PCB', 'Process B resumes running'],
      },
      {
        type: 'table',
        title: 'What triggers a context switch',
        columns: ['Trigger', 'Example'],
        rows: [
          ['Interrupt', 'Hardware device signals the CPU'],
          ['I/O wait', 'Running process needs to wait for disk/network'],
          ['Timer expiry', 'Time quantum runs out (Round Robin, preemptive scheduling)'],
          ['Priority preemption', 'A higher-priority process arrives'],
        ],
      },
    ],
    realWorldExample:
      'Alt-tabbing between a code editor, a browser, and a music player on your laptop feels instant, but the CPU is actually doing rapid context switches behind the scenes, saving and restoring each app\'s exact execution state many times per second.',
    interviewQuestions: [
      { q: 'What information gets saved during a context switch?', a: 'The current process\'s program counter, CPU register values, and scheduling/state information — typically stored in its PCB.' },
      { q: 'Is context switching useful work for the CPU?', a: 'No — it\'s pure overhead; the CPU does no actual process work during the switch itself, which is why excessive switching hurts performance.' },
      { q: 'Name two events that can trigger a context switch.', a: 'Any two of: an interrupt, an I/O wait, a scheduling timer expiring, or a higher-priority process arriving.' },
    ],
    commonMistakes: [
      { title: '"More context switching means better multitasking"', detail: 'Excessive switching adds pure overhead with no useful work done — that\'s exactly why picking too small a Round Robin time quantum backfires.' },
    ],
    revision: ['Context switch = save old state, load new state', 'Saved in the PCB: PC, registers, scheduling info', 'Triggers: interrupt, I/O wait, timer, priority preemption', 'Pure overhead — no useful work happens during it'],
    relatedTopics: ['process-scheduling', 'cpu-scheduling-algorithms'],
  },

  {
    id: 'file-systems-basics',
    title: 'File Systems: Allocation Methods',
    description: 'How a file\'s data actually gets laid out across the disk.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'File allocation methods decide how a file\'s data blocks are physically arranged on disk — the three classic approaches are Contiguous, Linked, and Indexed allocation.',
    easyExplanation:
      'Contiguous allocation is like reserving one unbroken row of seats for your entire group — fast to access, but hard to expand later if the row next to you is already taken. Linked allocation is like each seat holding a note pointing to where the next person in your group is sitting — easy to grow, but slow if you need to jump straight to seat #50 (you\'d have to follow every note from the start). Indexed allocation keeps one separate master list (an index block) with every seat number your group is using — flexible growth AND fast direct access, at the cost of needing that extra index block.',
    whyImportant: 'File allocation methods are the standard bridge topic between memory management and real-world file systems — expect it right after page replacement algorithms.',
    keyPoints: [
      'Contiguous Allocation — a file\'s blocks are all stored in one continuous run on disk; fast sequential AND random access, but causes external fragmentation and is hard to grow',
      'Linked Allocation — each block holds a pointer to the next block of the file; no external fragmentation, easy to grow, but slow random access (must follow the chain) and pointers waste some space',
      'Indexed Allocation — a dedicated index block stores pointers to every block of the file; supports fast direct access without contiguous storage, at the cost of the extra index block itself',
      'An inode (index node) is the real-world data structure (used in Unix-like file systems) that stores a file\'s metadata and block pointers — essentially indexed allocation in practice',
    ],
    memoryTrick: { type: 'mnemonic', text: 'Contiguous = one unbroken row. Linked = a chain of notes. Indexed = one master list pointing to everything.' },
    visuals: [
      {
        type: 'circle',
        title: 'The 3 allocation methods',
        center: 'File Allocation',
        satellites: ['Contiguous', 'Linked', 'Indexed'],
      },
      {
        type: 'table',
        title: 'Trade-offs at a glance',
        columns: ['Method', 'Random access', 'Growth', 'Main drawback'],
        rows: [
          ['Contiguous', 'Fast', 'Hard (needs a bigger free run)', 'External fragmentation'],
          ['Linked', 'Slow (follow the chain)', 'Easy', 'Pointer overhead, no random access'],
          ['Indexed', 'Fast', 'Easy', 'Needs a dedicated index block'],
        ],
      },
    ],
    realWorldExample:
      'Unix-style file systems use an inode per file — essentially an indexed-allocation approach — storing the file\'s metadata plus pointers to its actual data blocks, giving both fast lookups and flexible file growth.',
    interviewQuestions: [
      { q: 'What is the main drawback of contiguous allocation?', a: 'External fragmentation, and difficulty growing a file if the disk space right after it is already occupied.' },
      { q: 'Why is random access slow with linked allocation?', a: 'Because reaching any block requires following pointers sequentially from the very first block of the file.' },
      { q: 'What is an inode?', a: 'A data structure (used in Unix-like file systems) that stores a file\'s metadata and pointers to its data blocks — a real-world implementation of indexed allocation.' },
    ],
    commonMistakes: [
      { title: '"Indexed allocation has no downsides"', detail: 'It still needs a dedicated index block per file, which is pure overhead space compared to contiguous allocation\'s simplicity.' },
    ],
    revision: ['Contiguous: fast, but hard to grow + fragmentation', 'Linked: easy to grow, slow random access', 'Indexed: fast + flexible, but needs an index block', 'inode = real-world indexed allocation'],
    relatedTopics: ['memory-management', 'paging-segmentation'],
  },
];

export default osTopics;
