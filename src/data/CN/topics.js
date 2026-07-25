// Computer Networks — full topic data
// Shape reference (see src/data/schema.md):
// visuals: array of { type: 'flow'|'circle'|'tree'|'timeline'|'comparison'|'table', ...payload }

const cnTopics = [
  {
    id: 'network-basics',
    title: 'Network Basics',
    description: 'What a network actually is, and how we classify them by size.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A network is a group of devices connected together so they can share data and resources. Connections can be wired or wireless. Networks range in size from two laptops to the entire internet.',
    easyExplanation:
      "Think of your phone, laptop and smart TV at home, all talking to each other and the internet through your Wi-Fi router — that's a network. Any time two or more devices are linked up to share files, a printer, or an internet connection, you've got a network.",
    whyImportant:
      'Almost every networking interview opens with "what is a network?" — a shaky answer here sets the tone for the rest of the round.',
    keyPoints: [
      'Connects two or more devices together',
      'Shares data & resources (files, printers, internet)',
      'Can be wired (cable) or wireless (Wi-Fi)',
      'Classified by geographic range: PAN, LAN, MAN, WAN',
    ],
    memoryTrick: {
      type: 'mnemonic',
      text: '"Poor Little Cats Meow Wildly, Globally" → PAN, LAN, CAN, MAN, WAN, GAN (smallest to biggest range).',
    },
    visuals: [
      {
        type: 'table',
        title: 'Networks by range',
        columns: ['Type', 'Range', 'Example'],
        rows: [
          ['PAN', 'Up to 10 m', 'Bluetooth earphones'],
          ['LAN', 'One building', 'Office / school network'],
          ['HAN', 'One house', 'Home Wi-Fi'],
          ['CAN', 'One campus', 'University network'],
          ['MAN', 'One city', 'Cable TV network'],
          ['WAN', 'Countries', 'The Internet backbone'],
          ['GAN', 'Global (satellite)', 'Global satellite comms'],
        ],
      },
    ],
    realWorldExample:
      "Imagine your home Wi-Fi — the router connects your phone, laptop and smart TV into a small LAN. Zoom out far enough and you get the WAN that connects entire countries: the internet.",
    interviewQuestions: [
      { q: 'What is a network?', a: 'A set of devices connected by a physical or wireless link to share data and resources.' },
      { q: 'Difference between LAN and WAN?', a: 'LAN covers a small area like an office; WAN spans cities or countries and usually connects multiple LANs.' },
      { q: 'What is the smallest and largest network type by range?', a: 'PAN (personal, ~10m) is smallest; GAN (global, satellite-based) is largest.' },
    ],
    commonMistakes: [
      { title: 'WAN means "wireless"', detail: 'WAN stands for Wide Area Network — it describes distance, not connection type. WANs are often wired (fibre backbones).' },
    ],
    revision: ['Network = devices sharing data', 'Ranked by range: PAN < LAN < CAN < MAN < WAN < GAN', 'Wired or wireless, doesn\'t change the classification'],
    relatedTopics: ['topologies', 'vpn'],
  },

  {
    id: 'topologies',
    title: 'Network Topologies',
    description: 'The physical layout of how devices and cables connect — star, ring, bus, mesh, tree, hybrid.',
    readingTime: 6,
    difficulty: 'Easy',
    quickDefinition:
      'Network topology is the arrangement of devices and cables in a network. It determines how robust, cheap, and easy-to-manage the network is.',
    easyExplanation:
      "Topology is the network's seating chart. Star topology is a classroom where everyone talks through one teacher (a central switch). Ring is students passing a note around in a circle. Bus is everyone sharing one long table. Mesh is when every student has every other student's phone number directly.",
    whyImportant:
      'Trade-off questions ("what if the central device fails?") are a classic way interviewers test whether you understand cause and effect, not just definitions.',
    keyPoints: [
      'Star — all nodes wired to one central device; easy to manage, but the hub is a single point of failure',
      'Ring — nodes form a closed loop; no central device, but one broken node can break the whole ring',
      'Bus — all nodes share one backbone cable; cheap, but the whole network dies if the bus breaks',
      'Mesh — every node connects to every other node; extremely robust, but expensive and hard to wire',
      'Tree — star networks joined together via a bus; failure in one segment doesn\'t affect others',
      'Hybrid — a mix of two or more topologies for flexibility',
    ],
    memoryTrick: {
      type: 'story',
      text: 'Picture 5 friends: in STAR they all call one team captain. In RING they pass a ball around in a circle. In BUS they shout on one shared phone line. In MESH everyone has saved everyone else\'s number.',
    },
    visuals: [
      {
        type: 'tree',
        title: 'Topology family',
        root: 'Topologies',
        children: [
          { label: 'Star' }, { label: 'Ring' }, { label: 'Bus' },
          { label: 'Mesh' }, { label: 'Tree' }, { label: 'Hybrid' },
        ],
      },
      {
        type: 'table',
        title: 'Trade-offs at a glance',
        columns: ['Topology', 'Central device?', 'Fault tolerance', 'Cabling cost'],
        rows: [
          ['Star', 'Yes', 'Medium (hub = weak point)', 'Medium'],
          ['Ring', 'No', 'Low (one break = all down)', 'Medium'],
          ['Bus', 'No', 'Low (bus break = all down)', 'Low'],
          ['Mesh', 'No', 'Very high', 'Very high'],
          ['Tree', 'Partial', 'Medium-high (segmented)', 'Medium-high'],
        ],
      },
    ],
    realWorldExample:
      'Most office LANs use Star topology through a switch. Old cable-TV distribution used Bus. Telecom backbones (SONET) use Ring for its self-healing loop.',
    interviewQuestions: [
      { q: 'What happens if the central device fails in star topology?', a: 'The entire network goes down, since every node routes through it.' },
      { q: 'Which topology is most fault-tolerant, and why?', a: 'Mesh — because every node has a direct, independent link to every other node, so no single failure isolates the network.' },
      { q: 'Compare bus and ring topology.', a: 'Bus uses one shared backbone (cheap, single failure point); ring forms a closed loop (no central device, but also a single failure point).' },
    ],
    commonMistakes: [
      { title: '"Mesh is never used because it\'s expensive"', detail: 'Mesh is common where reliability matters more than cost — military networks, core internet backbones.' },
    ],
    revision: ['Star: 1 hub, easy to manage', 'Ring: loop, no center', 'Bus: 1 shared cable', 'Mesh: fully connected, most robust', 'Tree: stars joined by a bus', 'Hybrid: combination'],
    relatedTopics: ['network-basics', 'routing'],
  },

  {
    id: 'osi-model',
    title: 'OSI Model',
    description: 'The 7-layer map of how data actually travels between two devices.',
    readingTime: 7,
    difficulty: 'Medium',
    quickDefinition:
      'The OSI model is a 7-layer conceptual framework describing how data moves from an application on one device to an application on another, one abstraction at a time.',
    easyExplanation:
      'Imagine mailing a letter: you write it (Application), translate it to the recipient\'s language (Presentation), start and manage the "conversation" (Session), split it into numbered pages so nothing gets lost (Transport), address the envelope (Network), hand it to the local post office (Data Link), and finally it physically travels by truck or plane (Physical). Each layer only cares about its own job.',
    whyImportant:
      'This is arguably the single most-asked networking question at placements — interviewers love asking you to recite it, map devices to layers, or explain data flow.',
    keyPoints: [
      'Physical — raw bits over a physical medium (cables, radio)',
      'Data Link — frames, MAC addressing, error-free node-to-node transfer',
      'Network — logical (IP) addressing and routing between networks',
      'Transport — reliable/unreliable end-to-end delivery (TCP/UDP)',
      'Session — opens, manages, and closes communication sessions',
      'Presentation — translates, encrypts, compresses data formats',
      'Application — the layer users and apps actually interact with',
    ],
    memoryTrick: {
      type: 'acronym',
      text: '"Please Do Not Throw Sausage Pizza Away" → Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    },
    visuals: [
      {
        type: 'flow',
        title: 'Data flow through the layers',
        steps: ['Application', 'Presentation', 'Session', 'Transport', 'Network', 'Data Link', 'Physical'],
      },
      {
        type: 'tree',
        title: 'Grouping the layers',
        root: 'OSI Model',
        children: [
          { label: 'Upper layers (software)', children: [{ label: 'Application' }, { label: 'Presentation' }, { label: 'Session' }] },
          { label: 'Lower layers (delivery)', children: [{ label: 'Transport' }, { label: 'Network' }, { label: 'Data Link' }, { label: 'Physical' }] },
        ],
      },
    ],
    realWorldExample:
      'Sending a WhatsApp message: the app layer creates the message, transport breaks it into segments with port numbers, network adds IP addresses, data link adds MAC addresses, and physical sends the actual radio signal.',
    interviewQuestions: [
      { q: 'Name all 7 OSI layers in order.', a: 'Physical, Data Link, Network, Transport, Session, Presentation, Application.' },
      { q: 'Which layer does a switch operate on?', a: 'Data Link layer (Layer 2) — it uses MAC addresses.' },
      { q: 'Which layer does a router operate on?', a: 'Network layer (Layer 3) — it uses IP addresses for routing.' },
      { q: 'How is OSI different from the TCP/IP model?', a: 'TCP/IP compresses the same ideas into 4 layers: Link, Internet, Transport, Application.' },
    ],
    commonMistakes: [
      { title: 'Mixing up device-to-layer mapping', detail: 'Hub → Physical, Switch/Bridge → Data Link, Router → Network. These get asked constantly and mixed up under pressure.' },
    ],
    revision: ['7 layers: Physical→Application', 'Mnemonic: Please Do Not Throw Sausage Pizza Away', 'Hub=L1, Switch=L2, Router=L3', 'TCP/IP model = compressed 4-layer version'],
    relatedTopics: ['tcp-vs-udp', 'http', 'arp', 'tcp-ip-model'],
  },

  {
    id: 'tcp-ip-model',
    title: 'TCP/IP Reference Model',
    description: 'The practical, 4-layer model the real internet is actually built on.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'The TCP/IP model is a 4-layer networking model — Link, Internet, Transport, Application — that compresses OSI\'s 7 layers into the practical set actually implemented across the internet.',
    easyExplanation:
      'OSI is the detailed theoretical blueprint; TCP/IP is the simplified version that was actually built and shipped. It squashes OSI\'s three top layers (Session, Presentation, Application) into one Application layer, and merges Physical + Data Link into one Link layer.',
    whyImportant: 'Interviewers who ask for OSI almost always follow up with "so how is that different from TCP/IP?" — expecting you to name the 4 layers and map protocols to them.',
    keyPoints: [
      'Link — the physical/data-link combo; decides which medium (e.g. Ethernet, SONET) carries the data',
      'Internet — delivers IP packets to their destination; the layer that holds the architecture together (IP, ICMP)',
      'Transport — peer-to-peer conversation between hosts, same role as OSI\'s transport layer (TCP, UDP)',
      'Application — all the higher-level, user-facing protocols (HTTP, SMTP, RTP, DNS)',
      'Developed by the US Department of Defense; named after its two flagship protocols, TCP and IP',
    ],
    memoryTrick: { type: 'mnemonic', text: '"Little Interns Type Awesomely" → Link, Internet, Transport, Application.' },
    visuals: [
      {
        type: 'tree',
        title: 'OSI layers folded into TCP/IP',
        root: 'TCP/IP Model',
        children: [
          { label: 'Link', children: [{ label: 'Physical' }, { label: 'Data Link' }] },
          { label: 'Internet', children: [{ label: 'Network' }] },
          { label: 'Transport', children: [{ label: 'Transport' }] },
          { label: 'Application', children: [{ label: 'Session' }, { label: 'Presentation' }, { label: 'Application' }] },
        ],
      },
      {
        type: 'table',
        title: 'Layer → example protocols',
        columns: ['TCP/IP Layer', 'Example protocols'],
        rows: [
          ['Link', 'Ethernet, SONET'],
          ['Internet', 'IP, ICMP'],
          ['Transport', 'TCP, UDP'],
          ['Application', 'HTTP, SMTP, RTP, DNS'],
        ],
      },
    ],
    realWorldExample: 'When your browser loads a page, the Application layer speaks HTTP, Transport hands it to TCP, Internet wraps it in IP packets, and Link actually puts those bits on the Ethernet or Wi-Fi medium.',
    interviewQuestions: [
      { q: 'Name the 4 layers of the TCP/IP model.', a: 'Link, Internet, Transport, Application.' },
      { q: 'How does TCP/IP differ from OSI?', a: 'TCP/IP compresses OSI\'s 7 layers into 4 — merging Physical+Data Link into Link, and Session+Presentation+Application into one Application layer.' },
      { q: 'Which layer does IP belong to in the TCP/IP model?', a: 'The Internet layer — it\'s responsible for delivering packets to their destination.' },
    ],
    commonMistakes: [
      { title: '"TCP/IP has the same layers as OSI, just renamed"', detail: 'It\'s not a 1:1 rename — TCP/IP actually merges multiple OSI layers together, so the layer count itself is different (4 vs 7).' },
    ],
    revision: ['4 layers: Link, Internet, Transport, Application', 'Link = Physical+Data Link combined', 'Application = Session+Presentation+Application combined', 'Named after TCP and IP'],
    relatedTopics: ['osi-model', 'tcp', 'udp'],
  },

  {
    id: 'tcp',
    title: 'TCP',
    description: 'The reliable, connection-oriented transport protocol behind most of the web.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'TCP (Transmission Control Protocol) is a connection-oriented transport-layer protocol that guarantees reliable, ordered delivery of data using acknowledgments.',
    easyExplanation:
      'Before sending anything, TCP shakes hands with the other side (the 3-way handshake) to set up a connection. Every piece of data sent is numbered and must be acknowledged — if something goes missing, TCP resends it. That makes it slower than UDP, but nothing gets lost or arrives out of order.',
    whyImportant:
      'TCP underpins web browsing, email, and file transfer — you\'ll be asked to compare it with UDP in almost every networking interview.',
    keyPoints: [
      'Connection-oriented — starts with a 3-way handshake',
      'Reliable — uses acknowledgments (ACKs) and retransmission',
      'Ordered delivery via sequence numbers',
      'Built-in flow control and congestion control',
      'Slower than UDP due to this extra overhead',
    ],
    memoryTrick: { type: 'story', text: 'TCP is a careful postman: he checks every letter arrives, in order, and resends anything that\'s lost.' },
    visuals: [
      { type: 'circle', title: 'TCP in one glance', center: 'TCP', satellites: ['Reliable', 'Uses ACK', 'Ordered Delivery', 'Flow Control', 'Connection-oriented'] },
    ],
    realWorldExample: 'Imagine sending your bank OTP or card number — every digit must arrive, in the right order, guaranteed. That\'s exactly why banking traffic runs over TCP.',
    interviewQuestions: [
      { q: 'What is TCP?', a: 'A connection-oriented, reliable transport protocol that guarantees ordered delivery via acknowledgments.' },
      { q: 'Explain the 3-way handshake.', a: 'SYN (client requests connection) → SYN-ACK (server acknowledges & responds) → ACK (client confirms) — connection is now established.' },
      { q: 'Why is TCP called reliable?', a: 'Every segment is acknowledged; unacknowledged segments are automatically retransmitted.' },
    ],
    commonMistakes: [
      { title: '"TCP is just better than UDP"', detail: 'It\'s a trade-off, not an upgrade — TCP trades speed for reliability, which isn\'t always what you want (e.g. live video).' },
    ],
    revision: ['Connection-oriented (3-way handshake)', 'ACK-based, reliable', 'Ordered delivery', 'Flow + congestion control', 'Slower, higher overhead than UDP'],
    relatedTopics: ['udp', 'tcp-vs-udp', 'sliding-window', 'congestion-control'],
  },

  {
    id: 'udp',
    title: 'UDP',
    description: 'The fast, connectionless transport protocol used when speed beats reliability.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'UDP (User Datagram Protocol) is a connectionless transport-layer protocol that sends data without guaranteeing delivery, order, or acknowledgment.',
    easyExplanation:
      'UDP just fires the data and moves on — no handshake, no waiting for a reply, no resending lost pieces. That makes it much faster and lighter than TCP, at the cost of reliability.',
    whyImportant:
      'Real-time systems (video calls, gaming, DNS lookups) all lean on UDP — interviewers want to see you know *why*, not just *that*.',
    keyPoints: [
      'Connectionless — no handshake before sending',
      'No acknowledgments or retransmission',
      'Much lower overhead than TCP',
      'No guarantee of delivery or order',
      'Ideal where speed matters more than perfection',
    ],
    memoryTrick: { type: 'story', text: 'UDP is a postcard: cheap, fast, and fired off without checking if it ever arrives.' },
    visuals: [
      { type: 'circle', title: 'UDP in one glance', center: 'UDP', satellites: ['Fast', 'No ACK', 'Connectionless', 'Low Overhead'] },
    ],
    realWorldExample: 'Imagine watching a live cricket match — if one frame drops, you don\'t want playback to pause and re-fetch it; you just want the stream to keep moving. That\'s UDP.',
    interviewQuestions: [
      { q: 'What is UDP?', a: 'A connectionless transport protocol with no delivery or order guarantees, optimized for speed.' },
      { q: 'Why is UDP used for video calls and gaming?', a: 'A slightly-late or dropped packet is less disruptive than the delay caused by waiting for retransmission.' },
      { q: 'Name a protocol built on UDP.', a: 'DNS lookups, DHCP, and video streaming protocols commonly use UDP.' },
    ],
    commonMistakes: [
      { title: '"UDP is unreliable so it\'s bad"', detail: 'For real-time media, an old resent packet is often worse than simply dropping it — UDP\'s "unreliability" is a feature there.' },
    ],
    revision: ['Connectionless, no handshake', 'No ACKs, no retransmission', 'Low overhead, fast', 'Used for streaming, gaming, DNS'],
    relatedTopics: ['tcp', 'tcp-vs-udp'],
  },

  {
    id: 'tcp-vs-udp',
    title: 'TCP vs UDP',
    description: 'The classic side-by-side — pick the right protocol for the job.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'TCP is connection-oriented and reliable; UDP is connectionless and fast. Choose TCP when correctness matters, UDP when speed matters.',
    easyExplanation:
      'They solve the same problem — moving data between two devices — with opposite priorities. TCP double-checks everything; UDP just sends it and trusts the app to cope with anything missing.',
    whyImportant: 'This exact comparison shows up in nearly every networking interview, sometimes as the very first question.',
    keyPoints: [
      'TCP: connection-oriented, reliable, ordered, slower',
      'UDP: connectionless, unreliable, unordered, faster',
      'TCP uses ACKs; UDP does not',
      'TCP suits file transfer/banking; UDP suits streaming/gaming',
    ],
    memoryTrick: { type: 'mnemonic', text: 'TCP = "Total Care Postman". UDP = "U Delivered? Perhaps."' },
    visuals: [
      {
        type: 'comparison',
        left: { title: 'TCP', points: ['Reliable', 'Slower', 'Uses ACK', 'Connection-oriented'] },
        right: { title: 'UDP', points: ['Fast', 'No ACK', 'No connection', 'Lightweight'] },
      },
      {
        type: 'table',
        title: 'Side by side',
        columns: ['Feature', 'TCP', 'UDP'],
        rows: [
          ['Connection', 'Connection-oriented', 'Connectionless'],
          ['Reliability', 'Guaranteed delivery', 'Best-effort'],
          ['Order', 'Ordered', 'Not guaranteed'],
          ['Speed', 'Slower', 'Faster'],
          ['Overhead', 'Higher', 'Lower'],
          ['Example use', 'Web, email, file transfer', 'Video calls, gaming, DNS'],
        ],
      },
    ],
    realWorldExample: 'TCP: imagine sending important bank details — every byte must land correctly. UDP: imagine watching a live cricket match — you just want it to keep playing.',
    interviewQuestions: [
      { q: 'Difference between TCP and UDP?', a: 'TCP is reliable and connection-oriented; UDP is fast and connectionless, with no delivery guarantees.' },
      { q: 'When would you pick UDP over TCP?', a: 'When low latency matters more than occasional data loss — video calls, live streaming, online games.' },
      { q: 'Can UDP be made reliable at the application layer?', a: 'Yes — protocols like QUIC add reliability and ordering features on top of UDP.' },
    ],
    commonMistakes: [
      { title: '"Connection-oriented means a physical circuit"', detail: 'It\'s a logical handshake tracked in software (sequence numbers, state), not a dedicated physical wire.' },
    ],
    revision: ['TCP = reliable, ordered, slower', 'UDP = fast, unordered, no guarantee', 'Pick based on need: correctness vs speed'],
    relatedTopics: ['tcp', 'udp', 'http'],
  },

  {
    id: 'http',
    title: 'HTTP',
    description: 'The stateless request-response protocol that powers the web.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'HTTP is an application-layer protocol that defines how browsers and servers exchange web pages and data. It runs over TCP and defaults to port 80.',
    easyExplanation:
      'Every time you open a webpage, your browser sends an HTTP request ("give me this page") and the server sends back an HTTP response (the page content). HTTP is "stateless" — it treats every request as brand new, with no memory of previous ones.',
    whyImportant: 'HTTP fundamentals (methods, statelessness, ports) are basic-but-essential interview ground.',
    keyPoints: [
      'Stateless — each request is independent',
      'Runs on top of TCP',
      'Default port 80',
      'Common methods: GET, POST, PUT, DELETE',
      'Data is sent in plain text (not encrypted)',
    ],
    memoryTrick: { type: 'story', text: 'HTTP is a waiter with no memory — every time you order, you have to repeat your entire order from scratch.' },
    visuals: [
      { type: 'flow', title: 'A single HTTP exchange', steps: ['Browser sends request', 'Request travels over TCP', 'Server processes it', 'Server sends response', 'Browser renders the page'] },
    ],
    realWorldExample: 'Typing a website address and watching the page load is HTTP\'s request-response cycle happening in real time.',
    interviewQuestions: [
      { q: 'What is HTTP?', a: 'An application-layer protocol for transferring web content between browser and server.' },
      { q: 'Why is HTTP called stateless?', a: 'Because it doesn\'t retain any memory of previous requests — each one is handled independently.' },
      { q: 'What port does HTTP use?', a: 'Port 80 by default.' },
      { q: 'Difference between GET and POST?', a: 'GET requests data and appends parameters to the URL; POST sends data in the request body, often to create/update something.' },
    ],
    commonMistakes: [
      { title: '"Stateless means the site can\'t remember me at all"', detail: 'Cookies and sessions are built on top of HTTP specifically to work around statelessness — the protocol itself just doesn\'t remember.' },
    ],
    revision: ['Stateless, runs on TCP', 'Default port 80', 'GET/POST/PUT/DELETE', 'Not encrypted'],
    relatedTopics: ['https', 'dns', 'tcp'],
  },

  {
    id: 'https',
    title: 'HTTPS',
    description: 'HTTP with a padlock — encrypted, authenticated, and safer by default.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'HTTPS is HTTP secured using SSL/TLS encryption. It runs on port 443 and protects data from eavesdropping and tampering.',
    easyExplanation:
      'HTTPS does everything HTTP does, but wraps the conversation in encryption first, and verifies the server\'s identity with a certificate — so nobody snooping on the network can read or alter what\'s sent.',
    whyImportant: 'Security-adjacent questions are common; knowing exactly what HTTPS adds (and doesn\'t) shows real understanding, not memorization.',
    keyPoints: [
      'HTTP + SSL/TLS encryption',
      'Default port 443',
      'Encrypts data in transit',
      'Verifies server identity via a certificate',
      'Essential for logins, payments, and any sensitive data',
    ],
    memoryTrick: { type: 'mnemonic', text: 'HTTPS = HTTP + a Security guard checking IDs at the door (the padlock icon).' },
    visuals: [
      {
        type: 'table',
        title: 'HTTP vs HTTPS',
        columns: ['Feature', 'HTTP', 'HTTPS'],
        rows: [
          ['Port', '80', '443'],
          ['Security', 'None', 'SSL/TLS encrypted'],
          ['Speed', 'Slightly faster', 'Slightly slower (encryption overhead)'],
          ['Use case', 'Non-sensitive content', 'Logins, payments, personal data'],
        ],
      },
    ],
    realWorldExample: 'Sending your card number during an online purchase — HTTPS encrypts it so nobody snooping on public Wi-Fi can read it.',
    interviewQuestions: [
      { q: 'What is HTTPS?', a: 'HTTP secured with SSL/TLS encryption, running on port 443.' },
      { q: 'What is SSL/TLS?', a: 'Protocols that encrypt the connection and verify server identity using certificates.' },
      { q: 'Why do browsers show a padlock icon?', a: 'To indicate the connection is encrypted via HTTPS and the site\'s certificate is valid.' },
    ],
    commonMistakes: [
      { title: '"HTTPS means the site is fully safe"', detail: 'HTTPS only secures the connection — it says nothing about whether the site itself is trustworthy or its content is safe.' },
    ],
    revision: ['HTTP + SSL/TLS', 'Port 443', 'Encrypts + authenticates', 'Doesn\'t guarantee the site is trustworthy'],
    relatedTopics: ['http', 'dns'],
  },

  {
    id: 'dns',
    title: 'DNS',
    description: 'The internet\'s phonebook — turning names into IP addresses.',
    readingTime: 6,
    difficulty: 'Medium',
    quickDefinition:
      'DNS (Domain Name System) translates human-friendly domain names like google.com into the IP addresses computers actually use to find each other.',
    easyExplanation:
      'You don\'t memorize your friend\'s 10-digit number — you just tap their name in Contacts and your phone looks it up. DNS does the exact same thing for websites: you type a name, and DNS finds the matching IP address.',
    whyImportant: 'The "what happens when you type google.com" question is one of the most-asked in all of tech interviewing — DNS is step one of that answer.',
    keyPoints: [
      'Acts like the internet\'s phonebook',
      'Maps domain names to IP addresses',
      'Lookup queries typically use UDP for speed',
      'Hierarchical: Root → TLD → Authoritative servers',
      'A DNS forwarder passes unresolved queries to external servers',
    ],
    memoryTrick: { type: 'mnemonic', text: 'DNS = your phone\'s Contacts app for the internet — type a name, get the number (IP).' },
    visuals: [
      {
        type: 'flow',
        title: 'Resolving a domain name',
        steps: ['Check browser cache', 'Check OS cache', 'Query DNS resolver (UDP)', 'Root → TLD → Authoritative server', 'IP address returned', 'Browser opens TCP connection to that IP'],
      },
    ],
    realWorldExample: 'Calling a friend by name instead of memorizing their phone number — your Contacts app (DNS) does the lookup behind the scenes.',
    interviewQuestions: [
      { q: 'What is DNS?', a: 'A system that translates domain names into IP addresses.' },
      { q: 'What happens when you type a URL into the browser?', a: 'The browser checks cache, then asks the OS to resolve the domain via DNS (root → TLD → authoritative server), gets the IP, opens a TCP connection, and sends an HTTP request.' },
      { q: 'Why does DNS typically use UDP?', a: 'Lookups are small and need to be fast; UDP\'s lack of handshake overhead suits quick queries better.' },
      { q: 'What is a DNS forwarder?', a: 'A DNS server that passes on queries it can\'t resolve itself to external DNS servers.' },
    ],
    commonMistakes: [
      { title: 'Confusing DNS with DHCP', detail: 'DNS resolves names to IP addresses; DHCP is what assigns IP addresses to devices in the first place. Different jobs.' },
    ],
    revision: ['DNS = name → IP address', 'Hierarchical: Root → TLD → Authoritative', 'Usually uses UDP', 'Key part of "what happens when you visit a website"'],
    relatedTopics: ['http', 'arp', 'routing'],
  },

  {
    id: 'arp',
    title: 'ARP',
    description: 'How a device finds another device\'s physical MAC address on the same network.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'ARP (Address Resolution Protocol) finds a device\'s MAC (physical) address using its known IP address, within the same local network.',
    easyExplanation:
      'IP addresses get you to the right neighborhood, but devices on a local network actually talk to each other using MAC addresses. ARP is how a device asks, "who has this IP?" and gets back the matching MAC address.',
    whyImportant: 'ARP bridges the Network and Data Link layers — interviewers use it to test if you truly understand how addressing works end to end.',
    keyPoints: [
      'Maps IP address → MAC address',
      'Works only within the local network (LAN)',
      'Sender broadcasts the request; the owner replies directly',
      'Result is cached in an ARP table to avoid repeating the lookup',
      'Sits between the Network and Data Link layers',
    ],
    memoryTrick: { type: 'story', text: 'ARP is shouting "who lives at house #24?" in a crowded room — only the right person raises a hand and gives you their number (MAC).' },
    visuals: [
      { type: 'flow', title: 'ARP request/reply', steps: ['Sender broadcasts "Who has IP X?"', 'All devices on LAN receive it', 'Owner of IP X replies with its MAC', 'Sender caches IP↔MAC in ARP table'] },
    ],
    realWorldExample: 'Shouting a name in a crowded room asking "who lives at house 24?" — only the right person raises their hand and shares their phone number (MAC).',
    interviewQuestions: [
      { q: 'What is ARP used for?', a: 'Resolving a known IP address to its physical MAC address on a local network.' },
      { q: 'Why is ARP needed if we already have IP addresses?', a: 'Devices on the same physical network actually communicate using MAC addresses, not IPs — ARP bridges the two.' },
      { q: 'What is an ARP table?', a: 'A local cache mapping IP addresses to MAC addresses, so repeated lookups aren\'t needed.' },
    ],
    commonMistakes: [
      { title: 'Confusing ARP with RARP', detail: 'ARP goes IP → MAC. RARP (largely obsolete) goes the opposite direction, MAC → IP.' },
    ],
    revision: ['ARP = IP → MAC', 'Only works within a LAN', 'Broadcast request, direct reply', 'Cached in ARP table'],
    relatedTopics: ['dns', 'switch'],
  },

  {
    id: 'routing',
    title: 'Routing',
    description: 'How routers pick the best path for a packet to reach its destination.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Routing is the process of selecting the best path for a data packet to travel from source to destination, across one or more networks.',
    easyExplanation:
      'A router is like GPS for data — it constantly checks its routing table and picks the best next step for a packet to reach its final destination, possibly through several other routers along the way.',
    whyImportant: 'Routing questions test whether you understand how the internet actually connects separate networks together, not just devices on one LAN.',
    keyPoints: [
      'Performed by routers at the Network layer',
      'Uses routing tables and routing protocols (e.g. RIP)',
      'A gateway/router connects two different networks',
      'RIP picks the shortest path using hop count',
      'Can be static (manually set) or dynamic (auto-updating)',
    ],
    memoryTrick: { type: 'mnemonic', text: 'A router is Google Maps for packets — always recalculating the fastest route.' },
    visuals: [
      { type: 'flow', title: 'How a router forwards a packet', steps: ['Packet arrives at router', 'Router checks its routing table', 'Best next hop is chosen', 'Packet is forwarded'] },
      {
        type: 'table',
        title: 'Router vs Gateway',
        columns: ['', 'Router', 'Gateway'],
        rows: [['Connects', 'Similar networks', 'Dissimilar networks'], ['Job', 'Forwards packets between networks', 'Translates between different network types']],
      },
    ],
    realWorldExample: 'Google Maps picking the fastest route between two cities while avoiding traffic — a router does the same thing for data packets moving between networks.',
    interviewQuestions: [
      { q: 'What is routing?', a: 'Choosing the best path for a packet to travel from its source to its destination.' },
      { q: 'Difference between a router and a gateway?', a: 'A router connects similar networks; a gateway connects dissimilar networks and often does protocol translation.' },
      { q: 'What is RIP and how does it choose a path?', a: 'Routing Information Protocol — it picks the route with the fewest hops (hop count) to the destination.' },
    ],
    commonMistakes: [
      { title: 'Mixing up router and switch', detail: 'A router connects different networks (Layer 3); a switch works within one network (Layer 2).' },
    ],
    revision: ['Routing = best path selection', 'Router works at Network layer', 'RIP = shortest path by hop count', 'Router ≠ Gateway ≠ Switch'],
    relatedTopics: ['switch', 'subnetting', 'arp'],
  },

  {
    id: 'switch',
    title: 'Switch',
    description: 'The smart, MAC-address-aware device that forwards data only where it needs to go.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A switch is a Data Link layer device that forwards data only to the specific device it\'s intended for, using MAC addresses — unlike a hub, which sends to everyone.',
    easyExplanation:
      'A switch reads the MAC address on each frame and sends it only to the correct port, instead of blasting it to every device. That makes networks faster, more private, and far less collision-prone.',
    whyImportant: 'Hub vs switch vs bridge is a very common rapid-fire comparison question.',
    keyPoints: [
      'Operates at the Data Link layer',
      'Forwards frames based on MAC address',
      'Supports full-duplex transmission',
      'Packet filtering available (unlike a hub)',
      'Greatly reduces collisions compared to a hub',
    ],
    memoryTrick: { type: 'story', text: 'A switch is a smart waiter — food goes only to the table that ordered it, not shouted across the whole restaurant.' },
    visuals: [
      {
        type: 'table',
        title: 'Hub vs Switch vs Bridge',
        columns: ['', 'Hub', 'Switch', 'Bridge'],
        rows: [
          ['OSI Layer', 'Physical (L1)', 'Data Link (L2)', 'Data Link (L2)'],
          ['Filtering', 'None', 'Yes (by MAC)', 'Yes (by MAC)'],
          ['Ports', 'Many', 'Many', 'Usually 2'],
          ['Speed', 'Slow (shared)', 'Fast (dedicated)', 'Medium'],
        ],
      },
    ],
    realWorldExample: 'When PC A sends a file to PC B in an office, the switch delivers it only to B\'s port — no one else on the network even sees that traffic.',
    interviewQuestions: [
      { q: 'What layer does a switch operate on?', a: 'Data Link layer (Layer 2).' },
      { q: 'How is a switch different from a hub?', a: 'A switch reads MAC addresses and forwards data only to the intended port; a hub blindly broadcasts to every port.' },
      { q: 'What does full duplex mean?', a: 'A device can send and receive data at the same time, rather than taking turns.' },
    ],
    commonMistakes: [
      { title: '"A switch and a router do the same job"', detail: 'A switch works within one network (by MAC address); a router connects different networks (by IP address).' },
    ],
    revision: ['Data Link layer device', 'Filters by MAC address', 'Full duplex, fewer collisions', 'Different job than a router'],
    relatedTopics: ['hub', 'bridge', 'routing'],
  },

  {
    id: 'hub',
    title: 'Hub',
    description: 'The simplest, "dumbest" networking device — broadcasts everything to everyone.',
    readingTime: 3,
    difficulty: 'Easy',
    quickDefinition:
      'A hub is a basic Physical-layer device that broadcasts every incoming signal to all connected ports, with no filtering or intelligence at all.',
    easyExplanation:
      'Plug several devices into a hub, and anything one sends gets echoed to every single other port — whether it was meant for them or not. It\'s cheap and simple, but noisy and insecure.',
    whyImportant: 'Understanding why hubs were largely replaced by switches shows you grasp *why* network design evolved, not just what changed.',
    keyPoints: [
      'Operates at the Physical layer',
      'Broadcasts to all ports — no filtering',
      'Causes more collisions on the network',
      'Two types: Active Hub, Passive Hub',
      'Mostly replaced by switches in modern networks',
    ],
    memoryTrick: { type: 'story', text: 'A hub is a loudspeaker — it announces the message to everyone in the room, whether it\'s for them or not.' },
    visuals: [
      {
        type: 'table',
        title: 'Hub vs Switch vs Bridge',
        columns: ['', 'Hub', 'Switch', 'Bridge'],
        rows: [
          ['OSI Layer', 'Physical (L1)', 'Data Link (L2)', 'Data Link (L2)'],
          ['Filtering', 'None', 'Yes (by MAC)', 'Yes (by MAC)'],
          ['Collisions', 'High', 'Low', 'Low'],
        ],
      },
    ],
    realWorldExample: 'In an old hub-based office network, every computer could technically "see" every other computer\'s traffic — a real security downside compared to switches.',
    interviewQuestions: [
      { q: 'What layer does a hub operate on?', a: 'Physical layer (Layer 1).' },
      { q: 'Why do hubs cause more collisions than switches?', a: 'Because they broadcast every signal to all ports, so multiple devices frequently try to transmit into the same shared medium at once.' },
      { q: 'Difference between active and passive hub?', a: 'An active hub amplifies/regenerates the signal before broadcasting; a passive hub just splits it without boosting.' },
    ],
    commonMistakes: [
      { title: '"Hub and switch are basically the same thing"', detail: 'They operate on entirely different OSI layers — hub has zero intelligence, switch filters by MAC address.' },
    ],
    revision: ['Physical layer, no intelligence', 'Broadcasts to every port', 'High collisions', 'Replaced by switches today'],
    relatedTopics: ['switch', 'bridge'],
  },

  {
    id: 'bridge',
    title: 'Bridge',
    description: 'A filtering doorway between two network segments.',
    readingTime: 3,
    difficulty: 'Easy',
    quickDefinition:
      'A bridge is a Data Link layer device that connects two network segments and filters traffic between them using MAC addresses, reducing unnecessary traffic.',
    easyExplanation:
      'Think of a bridge as a filtered doorway between two rooms — a message only crosses through if it actually needs to reach someone in the other room. That keeps each side\'s local chatter from flooding the other.',
    whyImportant: 'Bridges are the conceptual ancestor of the modern switch (essentially a multi-port bridge) — knowing the link between them shows deeper understanding.',
    keyPoints: [
      'Operates at the Data Link layer',
      'Connects two LAN segments',
      'Filters traffic using MAC addresses',
      'Shrinks the size of each collision domain',
      'A switch is essentially a multi-port bridge',
    ],
    memoryTrick: { type: 'story', text: 'A bridge is a filtered doorway between two rooms — messages only pass through if they\'re actually addressed to the other side.' },
    visuals: [
      {
        type: 'table',
        title: 'Hub vs Switch vs Bridge',
        columns: ['', 'Hub', 'Switch', 'Bridge'],
        rows: [
          ['OSI Layer', 'Physical (L1)', 'Data Link (L2)', 'Data Link (L2)'],
          ['Ports', 'Many', 'Many', 'Usually 2'],
          ['Typical role', 'Legacy shared segment', 'Modern LAN switching', 'Joining two segments'],
        ],
      },
    ],
    realWorldExample: 'Connecting two office floors\' networks with a bridge means floor 1\'s internal chatter doesn\'t flood floor 2\'s network.',
    interviewQuestions: [
      { q: 'What does a bridge do?', a: 'Connects two network segments and filters traffic between them by MAC address.' },
      { q: 'How is a bridge different from a switch?', a: 'A bridge typically has just two ports joining two segments; a switch is effectively a multi-port bridge for many devices.' },
      { q: 'What layer does a bridge operate on?', a: 'The Data Link layer (Layer 2).' },
    ],
    commonMistakes: [
      { title: '"A bridge is the same as a router"', detail: 'A bridge only connects segments of the *same* network; a router connects entirely different networks.' },
    ],
    revision: ['Data Link layer, 2 segments joined', 'Filters by MAC', 'Ancestor of the modern switch'],
    relatedTopics: ['switch', 'hub'],
  },

  {
    id: 'subnetting',
    title: 'Subnetting',
    description: 'Slicing one big network into smaller, more manageable pieces.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'Subnetting is the process of dividing one large network into smaller sub-networks (subnets) for better performance, organization, and security.',
    easyExplanation:
      'Imagine one giant office floor with everyone on it — noisy and hard to manage. Subnetting is splitting that floor into departments (subnets), each with its own smaller, more organized space.',
    whyImportant: 'Subnetting connects addressing theory (IP, subnet masks) to practical network design — a favorite conceptual-plus-practical interview area.',
    keyPoints: [
      'Splits one network into smaller subnets',
      'Improves routing efficiency',
      'Enhances security by isolating segments',
      'Uses a subnet mask to define network vs host bits',
      'Reduces the size of each broadcast domain',
    ],
    memoryTrick: { type: 'story', text: 'Subnetting is slicing one big office floor into smaller departments — easier to manage, and more secure.' },
    visuals: [
      { type: 'flow', title: 'Subnetting a network', steps: ['Big Network', 'Apply subnet mask', 'Subnet A', 'Subnet B', 'Subnet C'] },
    ],
    realWorldExample: 'A college with thousands of students might subnet its network into separate ranges for hostels, labs, and the admin block — each isolated from the others.',
    interviewQuestions: [
      { q: 'What is subnetting and why is it used?', a: 'Dividing one network into smaller subnets to improve routing efficiency, organization, and security.' },
      { q: 'What is a subnet mask?', a: 'A value that defines which portion of an IP address is the network part and which is the host part.' },
      { q: 'How does subnetting improve security?', a: 'By isolating segments, so a problem or breach in one subnet doesn\'t automatically expose the whole network.' },
    ],
    commonMistakes: [
      { title: 'Confusing subnetting with network types', detail: 'Subnetting divides one existing network internally — it\'s not the same as the LAN/WAN classification, which is about scale between separate networks.' },
    ],
    revision: ['Subnetting = dividing one network', 'Subnet mask defines network vs host bits', 'Improves routing + security', 'Shrinks broadcast domains'],
    relatedTopics: ['routing', 'network-basics'],
  },

  {
    id: 'congestion-control',
    title: 'Congestion Control',
    description: 'How TCP avoids overwhelming the network when everyone sends data at once.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'Congestion control is a set of TCP techniques that prevent the network itself from becoming overloaded, by carefully pacing how much data is sent.',
    easyExplanation:
      'TCP doesn\'t blast data at full speed immediately — it starts cautiously (slow start), gradually speeds up, and slams the brakes the moment it detects packet loss, which is treated as a sign of a congested network.',
    whyImportant: 'It\'s a classic follow-up to TCP questions, and tests whether you can tell it apart from the similarly-named flow control.',
    keyPoints: [
      'Prevents the shared network from becoming overloaded',
      'Slow Start — TCP begins conservatively and ramps up',
      'Congestion Avoidance — growth slows as capacity is approached',
      'Fast Retransmit / Fast Recovery — react quickly to lost packets',
      'Different goal than Flow Control, which protects the *receiver*, not the network',
    ],
    memoryTrick: { type: 'story', text: 'Merging onto a highway carefully — start slow, speed up gradually, and brake immediately the moment you see brake lights (packet loss) ahead.' },
    visuals: [
      { type: 'timeline', title: 'TCP congestion control phases', events: ['Slow Start', 'Congestion Avoidance', 'Packet loss detected', 'Fast Retransmit', 'Fast Recovery', 'Back to Congestion Avoidance'] },
    ],
    realWorldExample: 'Everyone in a building trying to use one elevator at once — congestion control paces how many people (packets) get in each trip so the elevator (network) never jams.',
    interviewQuestions: [
      { q: 'What is congestion control?', a: 'TCP\'s mechanism for pacing data so the shared network doesn\'t get overloaded.' },
      { q: 'Explain TCP slow start.', a: 'TCP begins by sending a small amount of data and doubles its sending rate each round trip until it detects loss or reaches a threshold.' },
      { q: 'Difference between flow control and congestion control?', a: 'Flow control protects the receiver from being overwhelmed; congestion control protects the network itself from being overwhelmed.' },
    ],
    commonMistakes: [
      { title: 'Mixing up flow control and congestion control', detail: 'They sound similar but solve different problems — one is about the receiver\'s buffer, the other is about the whole network path.' },
    ],
    revision: ['Slow Start → Congestion Avoidance → loss → Fast Retransmit/Recovery', 'Protects the network, not just the receiver', 'Different from flow control'],
    relatedTopics: ['tcp', 'sliding-window'],
  },

  {
    id: 'sliding-window',
    title: 'Sliding Window',
    description: 'The trick that lets TCP send many packets before waiting for a reply.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'The sliding window is a TCP technique that lets a sender transmit several packets before an acknowledgment arrives, sliding the allowed "window" forward as ACKs come in.',
    easyExplanation:
      'Sending one packet, waiting for its ACK, then sending the next, would be painfully slow. Instead, TCP allows a "window" of several packets to be in flight at once — and as each gets acknowledged, the window slides forward to allow more.',
    whyImportant: 'It explains *why* TCP is efficient despite all its reliability overhead — a natural follow-up after TCP and congestion control questions.',
    keyPoints: [
      'Lets multiple packets be sent before waiting for acknowledgment',
      'Window size = how many unacknowledged packets are allowed in flight',
      'The window slides forward as ACKs are received',
      'Receiver can shrink the window if it\'s getting overwhelmed (flow control)',
      'Balances throughput (speed) against reliability',
    ],
    memoryTrick: { type: 'story', text: 'A conveyor belt with a viewing frame — you can only see (send) a few boxes at a time, and the frame slides forward as boxes get confirmed delivered.' },
    visuals: [
      { type: 'timeline', title: 'How the window slides', events: ['Send packets 1–4 (within window)', 'ACK for packet 1 received', 'Window slides forward by one', 'Packet 5 can now be sent'] },
    ],
    realWorldExample: 'A teacher collecting homework from four rows at a time instead of one student at a time — much faster, but still tracked and confirmed row by row.',
    interviewQuestions: [
      { q: 'What is the sliding window protocol?', a: 'A method that allows multiple packets to be sent before an acknowledgment, improving throughput over sending one at a time.' },
      { q: 'Why not just send one packet at a time?', a: 'Waiting for an ACK after every single packet would waste huge amounts of time on round-trip delay.' },
      { q: 'How does window size affect performance?', a: 'A larger window allows more data in flight (higher throughput), but risks overwhelming the receiver or network if too large.' },
    ],
    commonMistakes: [
      { title: 'Confusing window size with buffer size', detail: 'Window size is about how much can be *unacknowledged and in flight* at once — not the total amount of data storage available.' },
    ],
    revision: ['Multiple packets sent before waiting for ACK', 'Window slides forward as ACKs arrive', 'Bigger window = more throughput, more risk'],
    relatedTopics: ['tcp', 'congestion-control'],
  },

  {
    id: 'ip-addressing',
    title: 'IPv4 Addressing',
    description: 'The 32-bit address every device needs, and the classes it\'s divided into.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'An IPv4 address is a 32-bit address (4 octets, each 0–255) that uniquely identifies a device on a network. It\'s classified into Classes A–E based on the value of the first octet.',
    easyExplanation:
      'Think of an IPv4 address as a postal address for a device — four numbers separated by dots (like 192.168.1.10). Depending on the very first number, that address falls into a "class" that hints at how large the network around it is.',
    whyImportant: 'IP classes and public vs private addressing come up whenever an interview touches subnetting, routing, or "how does a device get online."',
    keyPoints: [
      'IPv4 = 32 bits, written as 4 octets (e.g. 192.168.1.1)',
      'Class A (0–127): huge networks, few networks but many hosts each',
      'Class B (128–191): medium networks',
      'Class C (192–223): small, local-area networks',
      'Class D (224–239): reserved for multicasting',
      'Class E (240–255): reserved for research and experimentation',
      'Private IPs are reused internally and need NAT/a proxy to reach the internet; Public IPs are globally unique and assigned by an ISP',
    ],
    memoryTrick: { type: 'mnemonic', text: '"All Boys Chase Dogs Everywhere" → Class A, B, C, D, E, in order of the first-octet range.' },
    visuals: [
      {
        type: 'table',
        title: 'IPv4 classes',
        columns: ['Class', 'Start', 'End', 'Usage'],
        rows: [
          ['A', '0.0.0.0', '127.255.255.255', 'Large networks'],
          ['B', '128.0.0.0', '191.255.255.255', 'Medium-size networks'],
          ['C', '192.0.0.0', '223.255.255.255', 'Local area networks'],
          ['D', '224.0.0.0', '239.255.255.255', 'Reserved for multicasting'],
          ['E', '240.0.0.0', '255.255.255.254', 'Study & R&D'],
        ],
      },
      {
        type: 'comparison',
        title: 'Private vs Public IP',
        left: { title: 'Private IP', points: ['Reused across networks', 'Not directly reachable from internet', 'Needs NAT/proxy to go online', 'Assigned by local router'] },
        right: { title: 'Public IP', points: ['Globally unique', 'Directly reachable on internet', 'No translation needed', 'Assigned by ISP'] },
      },
    ],
    realWorldExample: 'Your home router hands out private IPs like 192.168.1.5 to your phone and laptop, then shares one public IP (given by your ISP) with the internet on their behalf.',
    interviewQuestions: [
      { q: 'What is an IPv4 address?', a: 'A 32-bit address made of 4 octets, uniquely identifying a device on a network.' },
      { q: 'How many IPv4 classes are there, and how are they decided?', a: 'Five (A–E), determined by the range of the first octet of the address.' },
      { q: 'Difference between a private and a public IP address?', a: 'Private IPs are reused internally within networks and need NAT to reach the internet; public IPs are globally unique and directly reachable.' },
    ],
    commonMistakes: [
      { title: '"All IP addresses are directly reachable on the internet"', detail: 'Private IPs (like the common 192.168.x.x range) only work inside their local network — a router\'s NAT translates them to a public IP to go online.' },
    ],
    revision: ['IPv4 = 32-bit, 4 octets', 'Classes A–E by first octet range', 'D = multicast, E = research', 'Private IP needs NAT to reach internet'],
    relatedTopics: ['subnetting', 'routing'],
  },

  {
    id: 'email-protocols',
    title: 'Email Protocols: SMTP & POP3',
    description: 'How email actually gets sent, and how it gets picked up.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'SMTP (Simple Mail Transfer Protocol) sends and relays email between servers; POP3 (Post Office Protocol v3) is how a client downloads mail from a server.',
    easyExplanation:
      'SMTP is the postal service that carries your email from your outbox to the recipient\'s mail server. POP3 is you walking into the post office to pick up and take home the mail waiting for you.',
    whyImportant: 'Email is a familiar real-world system interviewers use to test if you understand the difference between sending and retrieving protocols.',
    keyPoints: [
      'SMTP — sends/relays mail between servers, always listening on port 25',
      'SMTP supports End-to-End and Store-and-Forward delivery',
      'POP3 — used by a client to access/download mail from a server',
      'POP3 has two modes: Delete mode and Keep mode',
    ],
    memoryTrick: { type: 'mnemonic', text: 'SMTP Sends Mail To People; POP3 Picks Own Post (from the server).' },
    visuals: [
      {
        type: 'comparison',
        title: 'SMTP vs POP3',
        left: { title: 'SMTP', points: ['Sends/relays mail', 'Port 25', 'Server ↔ server', 'Always listening'] },
        right: { title: 'POP3', points: ['Retrieves mail', 'Client ↔ server', 'Delete or Keep mode', 'Client-initiated'] },
      },
    ],
    realWorldExample: 'Hitting "send" in Gmail hands your message to SMTP; your phone\'s mail app checking for new mail is doing something POP3 (or its modern cousin IMAP) was built for.',
    interviewQuestions: [
      { q: 'What is SMTP used for?', a: 'Sending and relaying email between mail servers, listening on port 25.' },
      { q: 'What is POP3?', a: 'A protocol a client uses to retrieve mail from a mail server, in either Delete or Keep mode.' },
      { q: 'Is SMTP used for receiving email?', a: 'No — SMTP only sends/relays mail; retrieving it is the job of POP3 or IMAP.' },
    ],
    commonMistakes: [
      { title: '"SMTP handles both sending and receiving"', detail: 'SMTP only pushes mail forward — a separate protocol like POP3 is what a client uses to pull mail down.' },
    ],
    revision: ['SMTP = sends mail, port 25', 'POP3 = client downloads mail', 'POP3: Delete mode vs Keep mode'],
    relatedTopics: ['http', 'dns'],
  },

  {
    id: 'dhcp-ftp-icmp',
    title: 'DHCP, FTP & ICMP',
    description: 'Three workhorse protocols: auto-assigning IPs, moving files, and reporting errors.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'DHCP auto-assigns IP addresses to devices, FTP transfers files between hosts, and ICMP reports errors and diagnoses connectivity — each solving a different everyday networking problem.',
    easyExplanation:
      'DHCP is the receptionist handing out a room number (IP address) the moment you walk into a hotel. FTP is the bellhop moving your luggage (files) between rooms. ICMP is the hotel intercom used to report "something\'s wrong on floor 3" — used for diagnostics, not payloads.',
    whyImportant: 'These three come up constantly as quick-fire "what does X do" questions right after DNS and ARP.',
    keyPoints: [
      'DHCP — application-layer protocol that auto-assigns IP addresses, subnet mask, and DNS info to devices',
      'FTP — application-layer protocol for transferring files reliably between hosts',
      'ICMP — network-layer protocol used for error reporting and diagnostics (e.g. by ping)',
      'ICMP doesn\'t carry user data — it reports on the health of the network itself',
    ],
    memoryTrick: { type: 'mnemonic', text: 'DHCP hands you an address, FTP hands you a file, ICMP hands you an error report.' },
    visuals: [
      {
        type: 'table',
        title: 'DHCP vs FTP vs ICMP',
        columns: ['Protocol', 'Layer', 'Purpose'],
        rows: [
          ['DHCP', 'Application', 'Auto-assigns IP address & network config'],
          ['FTP', 'Application', 'Transfers files between hosts'],
          ['ICMP', 'Network', 'Error reporting & diagnostics (e.g. ping)'],
        ],
      },
    ],
    realWorldExample: 'Connecting to a new Wi-Fi network and instantly getting online is DHCP quietly assigning you an IP; running "ping" to check if a server is reachable is ICMP at work.',
    interviewQuestions: [
      { q: 'What does DHCP do?', a: 'Automatically assigns IP addresses and other network configuration to devices joining a network.' },
      { q: 'What layer does ICMP work at, and what is it used for?', a: 'Network layer — used for error reporting and diagnostics, such as the ping utility.' },
      { q: 'Does ICMP carry application data?', a: 'No — it only carries diagnostic/error information about the network itself, not user payloads.' },
    ],
    commonMistakes: [
      { title: '"ICMP is used to send data like TCP/UDP"', detail: 'ICMP exists purely for diagnostics and error reporting — it\'s not a general-purpose data transport protocol.' },
    ],
    revision: ['DHCP = auto IP assignment', 'FTP = file transfer', 'ICMP = error reporting/diagnostics (ping)'],
    relatedTopics: ['arp', 'routing', 'network-tools'],
  },

  {
    id: 'mac-vs-ip-nic',
    title: 'MAC Address, IP Address & NIC',
    description: 'The physical vs logical identity of a device, and the hardware that gives it one.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'A MAC address is a device\'s fixed physical identity (burned into its NIC by the manufacturer); an IP address is its logical, changeable identity on a network (assigned by an ISP or DHCP).',
    easyExplanation:
      'Your MAC address is like your fingerprint — permanent and tied to the specific hardware (the NIC, or Network Interface Card). Your IP address is more like your postal address — it can change depending on which network you\'re connected to.',
    whyImportant: 'The physical-vs-logical addressing distinction underlies ARP, routing, and most of the OSI model — interviewers use it to check the fundamentals are solid.',
    keyPoints: [
      'MAC address — physical address, assigned by the NIC manufacturer, uniquely IDs the device',
      'IP address — logical address, assigned by an ISP/DHCP, identifies the device\'s connection to a network',
      'NIC (Network Interface Card) — the hardware that connects a device to a network and holds its MAC address',
      'MAC rarely changes; IP can change every time you join a different network',
    ],
    memoryTrick: { type: 'mnemonic', text: 'MAC = Manufacturer-Assigned Constant. IP = In-network Placement (can change).' },
    visuals: [
      {
        type: 'comparison',
        title: 'MAC vs IP address',
        left: { title: 'MAC Address', points: ['Physical address', 'Set by NIC manufacturer', 'Rarely changes', 'Identifies the device'] },
        right: { title: 'IP Address', points: ['Logical address', 'Set by ISP/DHCP', 'Can change per network', 'Identifies the connection'] },
      },
    ],
    realWorldExample: 'Take your laptop to a coffee shop: its MAC address stays exactly the same, but it\'s handed a brand-new IP address by that shop\'s Wi-Fi router.',
    interviewQuestions: [
      { q: 'Difference between MAC address and IP address?', a: 'MAC is a fixed physical address from the NIC manufacturer; IP is a logical, network-dependent address that can change.' },
      { q: 'What is a NIC?', a: 'A Network Interface Card — the hardware that connects a device to a network and carries its unique MAC address.' },
      { q: 'Which changes more often: MAC or IP?', a: 'IP — it\'s reassigned depending on which network you join, while MAC stays fixed to the hardware.' },
    ],
    commonMistakes: [
      { title: '"MAC and IP addresses do the same job"', detail: 'MAC identifies the physical device itself; IP identifies where that device sits in a particular network — different jobs, different layers.' },
    ],
    revision: ['MAC = physical, fixed, from NIC', 'IP = logical, can change', 'NIC = the hardware holding the MAC'],
    relatedTopics: ['arp', 'ip-addressing'],
  },

  {
    id: 'transmission-types',
    title: 'Unicast, Anycast, Multicast & Broadcast',
    description: 'The four ways a message can be aimed at one, some, or all nodes.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'These describe how many recipients a network message targets: one specific node (unicast), any one of a group (anycast), a chosen subset (multicast), or every node (broadcast).',
    easyExplanation:
      'Unicast is a private DM to one friend. Anycast is shouting a question and letting whichever friend is closest answer. Multicast is a group chat with a chosen few. Broadcast is an announcement over the loudspeaker that everyone hears.',
    whyImportant: 'This is a compact, easy-to-remember topic interviewers use as a quick fundamentals check.',
    keyPoints: [
      'Unicast — one sender to one specific receiver (e.g. establishing a new connection)',
      'Anycast — one sender to any one of a group of nodes, usually the nearest (e.g. CDN content delivery)',
      'Multicast — one sender to a chosen subset of nodes (e.g. sending the same stream to multiple subscribers)',
      'Broadcast — one sender to every node in the network (e.g. DHCP and ARP requests)',
    ],
    memoryTrick: { type: 'story', text: 'One friend (Unicast), the nearest friend (Anycast), a group chat (Multicast), and a megaphone to the whole room (Broadcast).' },
    visuals: [
      { type: 'circle', title: 'Four ways to send', center: 'Transmission Types', satellites: ['Unicast', 'Anycast', 'Multicast', 'Broadcast'] },
      {
        type: 'table',
        title: 'Who receives the message?',
        columns: ['Type', 'Recipients', 'Example'],
        rows: [
          ['Unicast', 'One specific node', 'Opening a new TCP connection'],
          ['Anycast', 'Nearest of a group', 'CDN fetching content from the closest server'],
          ['Multicast', 'A chosen subset', 'Streaming to a set of subscribers'],
          ['Broadcast', 'Every node', 'DHCP/ARP requests on a LAN'],
        ],
      },
    ],
    realWorldExample: 'A CDN like Cloudflare using anycast so your request automatically reaches the nearest data center, while a DHCP request broadcasts to every device on your home network.',
    interviewQuestions: [
      { q: 'What is the difference between multicast and broadcast?', a: 'Multicast targets a specific subset of interested nodes; broadcast reaches every node on the network, whether interested or not.' },
      { q: 'Give an example of anycast in the real world.', a: 'CDNs use anycast so a user\'s request is automatically routed to the nearest available server.' },
      { q: 'Which of these does DHCP use to find a server?', a: 'Broadcasting — since the client doesn\'t yet know which specific server can respond.' },
    ],
    commonMistakes: [
      { title: '"Multicast and broadcast are the same thing"', detail: 'Multicast is targeted to nodes that opted in (like a group chat); broadcast blasts to literally everyone on the network.' },
    ],
    revision: ['Unicast: 1 → 1', 'Anycast: 1 → nearest of many', 'Multicast: 1 → chosen subset', 'Broadcast: 1 → everyone'],
    relatedTopics: ['dhcp-ftp-icmp', 'network-basics'],
  },

  {
    id: 'network-tools',
    title: 'Network Tools: ipconfig, ping, netstat & Firewall',
    description: 'The everyday command-line tools (and the security guard) used to inspect and protect a network.',
    readingTime: 4,
    difficulty: 'Easy',
    quickDefinition:
      'ipconfig/ifconfig show and configure a device\'s network settings, ping tests connectivity, netstat shows current TCP/IP connection info, and a firewall filters traffic in and out based on security rules.',
    easyExplanation:
      'If your network were a car, ipconfig/ifconfig is checking the dashboard for your current settings, ping is honking to see if someone up ahead responds, netstat is the trip log of every connection currently open, and a firewall is the security checkpoint deciding what\'s allowed through the gate.',
    whyImportant: 'These are the tools an interviewer expects you to reach for first when troubleshooting a "can\'t connect" scenario.',
    keyPoints: [
      'ipconfig — views/configures network interfaces on Windows',
      'ifconfig — the equivalent command on Mac, Linux, and UNIX',
      'ping — checks connectivity to another device using its IP or name',
      'netstat — shows current TCP/IP connection information for the machine',
      'Firewall — monitors and filters incoming/outgoing traffic based on security policies; can be hardware, software, or both',
    ],
    memoryTrick: { type: 'mnemonic', text: '"I Ping Nets Firmly" → ipconfig/ifconfig, ping, netstat, Firewall.' },
    visuals: [
      {
        type: 'table',
        title: 'Tool cheat-sheet',
        columns: ['Tool', 'Platform', 'Purpose'],
        rows: [
          ['ipconfig', 'Windows', 'View/configure network interfaces'],
          ['ifconfig', 'Mac/Linux/UNIX', 'View/configure network interfaces'],
          ['ping', 'All platforms', 'Test connectivity to a device'],
          ['netstat', 'All platforms', 'Show current TCP/IP connections'],
          ['Firewall', 'N/A (security system)', 'Filter traffic in/out by policy'],
        ],
      },
    ],
    realWorldExample: 'When your Wi-Fi feels broken, checking ipconfig/ifconfig confirms you actually have an IP, and pinging a known site (like 8.8.8.8) tells you whether the problem is your device or the wider internet.',
    interviewQuestions: [
      { q: 'What does the ping command do?', a: 'Checks connectivity between the local machine and another device using its IP address or hostname.' },
      { q: 'Difference between ipconfig and ifconfig?', a: 'Same purpose (view/configure network interfaces) — ipconfig is Windows, ifconfig is Mac/Linux/UNIX.' },
      { q: 'What is a firewall?', a: 'A security system, hardware or software, that monitors and filters network traffic based on defined security rules.' },
    ],
    commonMistakes: [
      { title: '"A firewall guarantees full protection"', detail: 'A firewall filters traffic by policy — it\'s one layer of security, not a complete guarantee against every attack.' },
    ],
    revision: ['ipconfig (Windows) / ifconfig (Mac/Linux)', 'ping = test connectivity', 'netstat = current connections', 'Firewall = traffic filter by policy'],
    relatedTopics: ['dhcp-ftp-icmp', 'vpn'],
  },

  {
    id: 'network-quality-terms',
    title: 'Network Reliability & Key Terms',
    description: 'How "good" a network is measured, plus a handful of high-yield interview terms.',
    readingTime: 5,
    difficulty: 'Easy',
    quickDefinition:
      'A network\'s quality is judged by performance, reliability, robustness, and security — alongside foundational terms like node, link, peer-to-peer processes, and RAID for fault tolerance.',
    easyExplanation:
      'Reliability is measured by how often things fail (frequency), how bad it is when they do (catastrophe), and how fast it recovers (downtime). Meanwhile, a "node" is just a connected computer, a "link" is the wire between them, and RAID is spreading data across multiple disks so one drive failing doesn\'t lose everything.',
    whyImportant: 'These are the small, rapid-fire definition questions that often open or close a networking interview round.',
    keyPoints: [
      'Reliability factors: Downtime (recovery time), Failure Frequency, Catastrophe (unexpected major events)',
      'Effectiveness criteria: Performance, Reliability, Robustness, Security',
      'Node & Link — nodes are the connected devices, the link is the physical medium between them',
      'Peer-to-peer processes — processes on each machine communicating at the same layer',
      'RAID (Redundant Array of Inexpensive/Independent Disks) — provides fault tolerance using multiple hard disks',
    ],
    memoryTrick: { type: 'mnemonic', text: '"Please Remain Really Secure" → Performance, Reliability, Robustness, Security — the four marks of an effective network.' },
    visuals: [
      {
        type: 'tree',
        title: 'What makes a network effective?',
        root: 'Network Quality',
        children: [
          { label: 'Performance' }, { label: 'Reliability' }, { label: 'Robustness' }, { label: 'Security' },
        ],
      },
      {
        type: 'table',
        title: 'Reliability factors',
        columns: ['Factor', 'Meaning'],
        rows: [
          ['Downtime', 'Time required to recover from failure'],
          ['Failure Frequency', 'How often the network fails to work as intended'],
          ['Catastrophe', 'Damage from unexpected events (fire, earthquake, etc.)'],
        ],
      },
    ],
    realWorldExample: 'A data center using RAID means one failed hard disk doesn\'t take down the whole system — the data survives on the other disks while the faulty one is replaced.',
    interviewQuestions: [
      { q: 'What criteria make a network "effective"?', a: 'Performance, reliability, robustness, and security.' },
      { q: 'What are node and link?', a: 'Nodes are the connected devices; a link is the physical medium (cable, fibre) connecting them.' },
      { q: 'What is RAID and why is it used?', a: 'Redundant Array of Inexpensive/Independent Disks — it provides fault tolerance by spreading/duplicating data across multiple hard disks.' },
    ],
    commonMistakes: [
      { title: '"Reliability and security are the same measure"', detail: 'Reliability is about consistent uptime and low failure frequency; security is specifically about protection from unauthorized access — different concerns.' },
    ],
    revision: ['Effective network: Performance, Reliability, Robustness, Security', 'Reliability: downtime, failure frequency, catastrophe', 'Node = device, Link = medium', 'RAID = fault tolerance via multiple disks'],
    relatedTopics: ['network-basics', 'network-tools'],
  },

  {
    id: 'vpn',
    title: 'VPN',
    description: 'A private, encrypted tunnel across the public internet.',
    readingTime: 5,
    difficulty: 'Medium',
    quickDefinition:
      'A VPN (Virtual Private Network) creates a secure, encrypted tunnel over a public network, letting remote users or offices connect as though they were on the same private network.',
    easyExplanation:
      'Normally, sending data over the public internet means it could pass through untrusted networks. A VPN wraps that traffic in an encrypted tunnel, so it looks and behaves like a private, direct connection — even though it\'s riding on the public internet.',
    whyImportant: 'VPN ties together encryption, tunneling, and remote networking — a favorite "explain a real-world security tool" interview question.',
    keyPoints: [
      'Encrypts internet traffic and hides the user\'s online identity',
      'Cheaper alternative to dedicated private WAN lines',
      'Two main types: Access VPN and Site-to-Site VPN',
      'Site-to-Site splits further into Intranet VPN and Extranet VPN',
      'Used for secure remote work and connecting offices across locations',
    ],
    memoryTrick: { type: 'story', text: 'A VPN is an invisible tunnel dug under a public highway — you drive straight to your office network without anyone on the highway seeing you.' },
    visuals: [
      {
        type: 'tree',
        title: 'Types of VPN',
        root: 'VPN',
        children: [
          { label: 'Access VPN' },
          { label: 'Site-to-Site VPN', children: [{ label: 'Intranet VPN' }, { label: 'Extranet VPN' }] },
        ],
      },
    ],
    realWorldExample: 'Working from home but needing to reach your office\'s internal file server securely — a VPN makes your home laptop behave as if it\'s plugged directly into the office network.',
    interviewQuestions: [
      { q: 'What is a VPN and why is it used?', a: 'A secure, encrypted tunnel over the public internet, used for private, remote, or inter-office connections.' },
      { q: 'Difference between Access VPN and Site-to-Site VPN?', a: 'Access VPN connects individual remote users to a network; Site-to-Site VPN connects two entire office networks together.' },
      { q: 'Difference between Intranet VPN and Extranet VPN?', a: 'Intranet VPN links an organization\'s own remote offices; Extranet VPN connects the organization to outside parties like suppliers or partners.' },
    ],
    commonMistakes: [
      { title: '"A VPN makes you fully anonymous online"', detail: 'A VPN encrypts and tunnels your traffic to its endpoint — it doesn\'t make you invisible everywhere online beyond that.' },
    ],
    revision: ['VPN = encrypted tunnel over public internet', 'Access VPN vs Site-to-Site VPN', 'Site-to-Site → Intranet / Extranet', 'Cheaper than a dedicated private WAN'],
    relatedTopics: ['network-basics', 'tcp'],
  },

  {
    id: 'ipv6',
    title: 'IPv6',
    description: 'The much larger address space built to replace IPv4.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'IPv6 is a 128-bit addressing scheme, written as 8 groups of hexadecimal digits, created because IPv4\'s 32-bit address space (about 4.3 billion addresses) has run out for a world of billions of connected devices.',
    easyExplanation:
      'IPv4 addresses look like 192.168.1.1 — four numbers, each maxing out around 4 billion combinations total, which sounded huge decades ago but isn\'t nearly enough now that phones, laptops, watches, and fridges are all online at once. IPv6 addresses look like 2001:0db8:85a3::8a2e:0370:7334 — vastly longer, giving an effectively inexhaustible number of unique addresses.',
    whyImportant: '"Why do we need IPv6 if we have IPv4?" is a nearly guaranteed follow-up the moment IPv4 addressing comes up.',
    keyPoints: [
      'IPv4 — 32-bit address, ~4.3 billion possible addresses, written in dotted decimal (192.168.1.1)',
      'IPv6 — 128-bit address, virtually unlimited addresses, written in colon-separated hexadecimal (2001:0db8::1)',
      'IPv6 was created mainly to solve IPv4 address exhaustion',
      'IPv6 also simplifies headers for faster routing and has built-in support for security (IPsec)',
      'IPv6 does not use broadcast the way IPv4 does — it relies on multicast and a new "anycast" concept instead',
    ],
    memoryTrick: { type: 'mnemonic', text: 'IPv4 = 4 short numbers (32-bit). IPv6 = 6... well, 8 long hex groups (128-bit) — just remember 6 is way bigger than 4.' },
    visuals: [
      {
        type: 'comparison',
        title: 'IPv4 vs IPv6',
        left: { title: 'IPv4', points: ['32-bit', '~4.3 billion addresses', 'Dotted decimal: 192.168.1.1', 'Uses broadcast'] },
        right: { title: 'IPv6', points: ['128-bit', 'Virtually unlimited addresses', 'Colon hex: 2001:0db8::1', 'No broadcast — uses multicast/anycast'] },
      },
      {
        type: 'table',
        title: 'Quick reference',
        columns: ['Feature', 'IPv4', 'IPv6'],
        rows: [
          ['Address length', '32-bit', '128-bit'],
          ['Format', 'Dotted decimal', 'Colon-separated hex'],
          ['Total addresses', '~4.3 billion', '~340 undecillion'],
          ['Configuration', 'Manual or DHCP', 'Supports auto-configuration'],
        ],
      },
    ],
    realWorldExample:
      'Every new smart home device you buy today — a bulb, a thermostat, a doorbell — needs its own unique address; IPv6\'s enormous address space is what makes that scale possible long after IPv4 ran out of room.',
    interviewQuestions: [
      { q: 'Why was IPv6 introduced?', a: 'To solve IPv4 address exhaustion — 32-bit IPv4 only supports about 4.3 billion addresses, nowhere near enough for the number of connected devices today.' },
      { q: 'How many bits does an IPv6 address use, and how is it written?', a: '128 bits, written as 8 groups of hexadecimal digits separated by colons.' },
      { q: 'Does IPv6 support broadcasting like IPv4?', a: 'No — IPv6 removes broadcast entirely, relying on multicast and anycast instead.' },
    ],
    commonMistakes: [
      { title: '"IPv6 is just a longer version of IPv4"', detail: 'It\'s a redesigned protocol — different address format, simplified headers, no broadcast, and built-in support for auto-configuration and security.' },
    ],
    revision: ['IPv4: 32-bit, ~4.3B addresses', 'IPv6: 128-bit, virtually unlimited', 'IPv6 exists to fix IPv4 exhaustion', 'IPv6 drops broadcast for multicast/anycast'],
    relatedTopics: ['ip-addressing', 'transmission-types'],
  },

  {
    id: 'sockets-ports-proxy',
    title: 'Sockets, Ports & Proxy Servers',
    description: 'How an IP address narrows down to one specific app, and what stands between you and the internet.',
    readingTime: 4,
    difficulty: 'Medium',
    quickDefinition:
      'A port is a number identifying a specific application on a device; a socket is the combination of an IP address and a port, uniquely identifying one endpoint of a network connection; a proxy server is an intermediary that forwards requests on a client\'s behalf.',
    easyExplanation:
      'If an IP address is a building\'s street address, a port number is the specific apartment/office inside it — port 80 for the web server\'s "office," port 25 for the mail server\'s "office," on the very same building. A socket is that full address-plus-apartment-number combo, uniquely pinning down one exact connection endpoint. A proxy server sits in front of that building, receiving requests on your behalf and forwarding them onward — hiding or filtering what\'s happening behind it.',
    whyImportant: 'Sockets and well-known port numbers come up any time an interview touches client-server communication, and confusing a proxy with a VPN or firewall is a common trip-up.',
    keyPoints: [
      'Port — a number (0–65535) identifying a specific application/service on a device',
      'Well-known ports: 80 (HTTP), 443 (HTTPS), 25 (SMTP), 53 (DNS), 21 (FTP), 67/68 (DHCP)',
      'Socket — the pair (IP address, port number) that uniquely identifies one endpoint of a connection',
      'A single device can run many services at once because each one binds to a different port',
      'Proxy Server — sits between a client and the internet, forwarding requests on the client\'s behalf, often adding caching, filtering, or anonymity',
    ],
    memoryTrick: { type: 'mnemonic', text: 'IP address = the building. Port = the apartment number. Socket = the full mailing address, both combined.' },
    visuals: [
      {
        type: 'flow',
        title: 'What makes a socket unique',
        steps: ['IP address identifies the device', '+ Port number identifies the app on that device', '= A socket (unique endpoint)', 'Two sockets together define one connection'],
      },
      {
        type: 'table',
        title: 'Well-known ports',
        columns: ['Port', 'Service'],
        rows: [
          ['80', 'HTTP'],
          ['443', 'HTTPS'],
          ['25', 'SMTP'],
          ['53', 'DNS'],
          ['21', 'FTP'],
          ['67 / 68', 'DHCP'],
        ],
      },
      {
        type: 'comparison',
        title: 'Proxy vs Firewall vs VPN (quick contrast)',
        left: { title: 'Proxy Server', points: ['Forwards requests on your behalf', 'Can cache, filter, or anonymize', 'Works at the application level'] },
        right: { title: 'Firewall / VPN', points: ['Firewall filters traffic by security rules', 'VPN encrypts and tunnels traffic', 'Neither necessarily forwards requests as a middleman app'] },
      },
    ],
    realWorldExample:
      'A single web server handles HTTPS traffic on port 443 and email on port 25 simultaneously — same IP address, completely separate "apartments" — while a school\'s proxy server sits between every student\'s laptop and the internet, filtering and caching requests along the way.',
    interviewQuestions: [
      { q: 'What is a socket?', a: 'The combination of an IP address and a port number, uniquely identifying one endpoint of a network connection.' },
      { q: 'Why can one device run multiple network services at once?', a: 'Because each service binds to a different port number on that same IP address.' },
      { q: 'What does a proxy server do?', a: 'It sits between a client and the internet, forwarding requests on the client\'s behalf — often adding caching, filtering, or anonymity along the way.' },
    ],
    commonMistakes: [
      { title: '"A proxy server and a VPN are the same thing"', detail: 'A proxy typically forwards traffic at the application level (e.g. just web requests) without necessarily encrypting it, while a VPN encrypts and tunnels all of a device\'s traffic more broadly.' },
    ],
    revision: ['Port = which app on the device (0–65535)', 'Socket = IP + Port, one connection endpoint', 'Well-known ports: 80, 443, 25, 53, 21, 67/68', 'Proxy = forwards requests on your behalf'],
    relatedTopics: ['ip-addressing', 'http', 'vpn'],
  },
];

export default cnTopics;
