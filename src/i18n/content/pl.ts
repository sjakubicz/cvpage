export const plContent = {
    profile: {
        headline: 'Machine Learning Engineer · Data Scientist',
        about: 'Projektuję i wdrażam produkcyjne systemy AI. Tworzę rozwiązania oparte na LLM, które przekształcają nieustrukturyzowane dokumenty w grafy wiedzy, rozwijam systemy computer vision działające w czasie rzeczywistym na urządzeniach brzegowych oraz buduję pełne produkty wokół tych technologii. Od ponad czterech lat realizuję takie projekty w Million Monkeys Software, odpowiadając za cały proces - od analizy wymagań z klientem po uruchomienie na produkcji.',
    },
    skills: {
        ml: {
            category: 'Uczenie maszynowe',
            items: 'PyTorch, CNN, GNN, computer vision, OpenCV, NLP, uczenie statystyczne, uczenie ze wzmocnieniem, śledzenie wielu obiektów (FairMOT)',
        },
        llm: {
            category: 'LLM-y i GenAI',
            items: 'ekstrakcja informacji, RAG, agenci AI, OpenAI API, Llama, Qwen',
        },
        graphs: {
            category: 'Grafy wiedzy',
            items: 'modelowanie danych grafowych, ekstrakcja encji i relacji, Cypher',
        },
        edge: {
            category: 'AI na urządzeniach brzegowych',
            items: 'NVIDIA Jetson AGX Xavier, inferencja w czasie rzeczywistym, CUDA',
        },
        software: {
            category: 'Inżynieria oprogramowania',
            items: 'Python, JavaScript, TypeScript, React, Node.js, REST API, SQL, Postgres, Git, testowanie, Docker',
        },
        math: {
            category: 'Matematyka',
            items: 'algebra liniowa, rachunek prawdopodobieństwa i statystyka, metody numeryczne',
        },
    },
    languages: {
        pl: {
            name: 'Polski',
            level: 'ojczysty',
        },
        en: {
            name: 'Angielski',
            level: 'biegły, swobodna komunikacja w pracy',
        },
    },
    experience: {
        mms: {
            role: 'Data Scientist',
            location: 'Warszawa',
            highlights: {
                clients: {
                    title: 'Praca z klientami',
                    description:
                        'Prowadziłem spotkania wymaganiowe z polskimi i zagranicznymi klientami, przekładając potrzeby biznesowe na specyfikacje techniczne i dokumentację dla klienta.',
                },
                research: {
                    title: 'Badania i rozwój',
                    description:
                        'Prowadziłem samodzielne badania nad metodami uczenia maszynowego na grafach, w tym grafowymi sieciami neuronowymi, oraz nad wykrywaniem dezinformacji i innych szkodliwych zachowań z użyciem metod grafowych i analizy embeddingów.',
                },
                quality: {
                    title: 'Jakość i dokumentacja',
                    description:
                        'Dbałem o jakość kodu, jego utrzymywalność i testy; przygotowywałem dokumentację techniczną i instrukcje użytkownika dla interesariuszy i klientów.',
                },
                review: {
                    title: 'Code review i praca z AI',
                    description:
                        'Robiłem code review w całym zespole inżynierskim i na co dzień korzystałem z programowania wspomaganego AI (asystenci kodu, automatyczne review).',
                },
                growth: {
                    title: 'Od studenta do właściciela projektów',
                    description:
                        'Dołączyłem jako student studiów licencjackich i rozwinąłem się do samodzielnego prowadzenia projektów od początku do końca - od pytania badawczego po produkcję.',
                },
            },
        },
    },
    projects: {
        robotControl: {
            name: 'Sterowanie robotami',
            description:
                'Zadania z kursu Robot Control: geometria kamery i homografia zaimplementowana od zera, sterowanie autem w MuJoCo na podstawie obrazu z kamery oraz śledzenie obiektu filtrem Kalmana.',
        },
        weatherApp: {
            name: 'Aplikacja pogodowa',
            description:
                'Aplikacja w React z prognozą pogody: wyszukiwanie miasta z podpowiedziami lub po geolokalizacji, pogoda bieżąca, prognoza na najbliższą godzinę i na 3 dni, ocena czy pogoda będzie ładna oraz GIF-y z Tenora dopasowane do pogody. Wyniki trzymane w Reduxie, by nie odpytywać API ponownie.',
        },
        integralCalculator: {
            name: 'Kalkulator całek',
            description:
                'Zespołowy projekt z inżynierii oprogramowania: aplikacja webowa do liczenia całek. Frontend w React i TypeScript, API w Django REST, metody numeryczne w C++ udostępnione przez pybind11 (trapezy, Romberg, kwadratury Gaussa, Runge-Kutta) oraz całki nieoznaczone w SymPy.',
        },
        parkingInWarsaw: {
            name: 'Parkowanie w Warszawie',
            description:
                'Aplikacja z przedmiotu Bazy danych dla osób dojeżdżających do Warszawy: ranking parkingów według łącznego kosztu (opłaty, abonamenty i paliwo na dojazd) w porównaniu ze strefą płatnego parkowania, liczony zapytaniami SQL.',
        },
        concurrentFolderTree: {
            name: 'Współbieżne drzewo folderów',
            description:
                'Fragment systemu plików w C: współbieżne drzewo folderów z operacjami tworzenia, usuwania i przenoszenia poddrzew, z własnym blokowaniem czytelnicy-pisarze w każdym folderze.',
        },
        polynomialsInHaskell: {
            name: 'Wielomiany w Haskellu',
            description:
                'Arytmetyka wielomianów w reprezentacji gęstej i rzadkiej, działająca nad dowolnym pierścieniem lub ciałem, z dzieleniem z resztą i testami własności w QuickCheck.',
        },
        docagent: {
            name: 'docagent',
            description:
                'Agent RAG nad dokumentami PDF: ekstrakcja tekstu z OCR dla skanów, wyszukiwanie hybrydowe (BM25 + wektory w pgvector, łączone przez RRF), agent LangGraph z narzędziami i cytowaniem źródeł oraz ewaluacja wyszukiwania (hit@k, MRR). Działa w pełni lokalnie przez Ollamę albo z dowolnym API zgodnym z OpenAI. W trakcie rozwoju.',
        },
        cellTyping: {
            name: 'Typowanie komórek w danych IMC',
            description:
                'Projekt z Deep Learning for Life Sciences na danych z konsorcjum Immucan: EDA, modele bazowe (regresja logistyczna, XGBoost, MLP), zastosowanie metody CSPOT oraz segmentacja obrazów modelami U-Net i BiFPN.',
        },
        cappuccinoInterpreter: {
            name: 'Interpreter języka Cappuccino',
            description:
                'Interpreter własnego języka imperatywnego inspirowanego Latte, napisany w Haskellu: gramatyka w BNFC, statyczna kontrola typów przed uruchomieniem, funkcje z rekurencją, przekazywanie argumentów przez wartość i referencję, zmienne const z inferencją typu, pętla for, przesłanianie ze statycznym wiązaniem oraz obsługa błędów wykonania.',
        },
        documentsToKnowledgeGraphs: {
            name: 'Dokumenty → grafy wiedzy',
            description:
                'Kompletny pipeline zamieniający nieustrukturyzowane dokumenty (PDF-y, skany, CSV) w grafy wiedzy. LLM-y (Llama, Qwen) wyciągają encje i wnioskują o relacjach. Wdrożony produkcyjnie w projektach klientów.',
        },
        jetsonTracking: {
            name: 'Śledzenie obiektów w czasie rzeczywistym na NVIDIA Jetson',
            description:
                'Porównanie modeli śledzenia wielu obiektów na Jetson AGX Xavier. FairMOT przekraczał możliwości urządzenia, więc zaprojektowałem hybrydę FairMOT z fizycznym modelem przewidywania ruchu - śledzenie w czasie rzeczywistym bez utraty dokładności detekcji.',
        },
        vrp: {
            name: 'Uczenie ze wzmocnieniem dla problemu marszrutyzacji (CVRP)',
            description:
                'Zespołowy projekt badawczy: ewaluacja metod RL dla CVRP (m.in. Pointer Networks, POMO, Attention Model, DPDP) na zbiorach Uchoa, Christofidesa i danych rzeczywistych, a potem rozszerzenie POMO o model z atencją wybierający węzły startowe, z którego powstała publikacja POMO+. Trening na klastrze ICM.',
        },
        moocDropout: {
            name: 'Przewidywanie rezygnacji z kursów online za pomocą GNN',
            description:
                'Implementacja pracy licencjackiej: grafy statyczne i temporalne zbudowane z logów aktywności użytkowników kursów MOOC, porównanie modeli GCN i LSTM z modelem bazowym.',
        },
        aiTextEditor: {
            name: 'Edytor tekstu z agentem AI',
            description:
                'Edytor z wbudowanym agentem AI wspierającym pisanie, codziennie używany przez dziennikarzy wydawnictwa. Frontend, backend i agent LLM; główny punkt kontaktu klienta od wymagań do wdrożenia.',
        },
        knowledgeGraphPlatform: {
            name: 'Platforma do eksploracji grafów wiedzy',
            description:
                'Full-stackowa platforma webowa i REST API, dzięki którym zespoły wewnętrzne i klienci przeglądają wyniki pipeline’ów i grafy wiedzy.',
        },
        mullerMethod: {
            name: 'Metoda Müllera',
            description:
                'Projekt z metod numerycznych: szukanie zespolonych pierwiastków równań nieliniowych metodą parabol (Müllera) na ilorazach różnicowych, z analizą stabilności numerycznej wariantów wzoru, strategią wyboru kolejnego punktu i raportem z dowodami równoważności wzorów.',
        },
        satelliteOrbit: {
            name: 'Orbita satelity - równania różniczkowe',
            description:
                'Projekt z równań różniczkowych zwyczajnych: numeryczne rozwiązanie okresowej orbity satelity w układzie Ziemia-Księżyc schematami Eulera, Rungego-Kutty i Dormanda-Prince’a (także z adaptacyjnym krokiem) i ich porównanie.',
        },
        algorithms: {
            name: 'Algorytmy i struktury danych',
            description:
                'Rozwiązania zadań z kursu ASD oraz implementacje algorytmów sortowania, grafowych i struktur danych.',
        },
        sml: {
            name: 'Statystyczne uczenie maszynowe',
            description:
                'Analiza statystyczna danych o wynagrodzeniach 11 tys. pracowników z modelem regresji liniowej i weryfikacją założeń, predykcja z ElasticNet i lasami losowymi oraz laboratoria z kursu.',
        },
        llmTeacher: {
            name: 'LLM jako nauczyciel robotów',
            description:
                'Zespołowy projekt z NLP: propozycja rozszerzenia Eureki (LLM-a piszącego funkcje nagrody dla uczenia ze wzmocnieniem w Isaac Gym) o obrazy z symulacji w kroku refleksji nad nagrodą oraz uruchomienie Eureki na lokalnym Llama 3 przez llama.cpp zamiast API OpenAI.',
        },
        tatraPlanner: {
            name: 'Planer wycieczek po Tatrach',
            description:
                'Program w Prologu, który wczytuje bazę szlaków i wyszukuje trasy między punktami według rodzaju szlaku i warunków na długość trasy.',
        },
        revnet: {
            name: 'RevNet od zera',
            description:
                'Projekt z Deep Neural Networks: sieć odwracalna RevNet napisana od zera w NumPy, z ręcznie wyprowadzoną propagacją wsteczną, która odtwarza aktywacje z kolejnej warstwy zamiast trzymać je w pamięci. Trening na MNIST (ok. 96% dokładności) z logowaniem w ClearML i porównanie zużycia pamięci ze zwykłą siecią.',
        },
    },
    studyAreas: {
        cyber: {
            introductionToCybersecurity: {
                name: 'Wstęp do cyberbezpieczeństwa',
                description:
                    'Świadomość cyberzagrożeń, ataki na organizację, programy cyberbezpieczeństwa i współczesne wyzwania organizacji.',
            },
            aiInCybersecurity: {
                name: 'AI w cyberbezpieczeństwie',
                description:
                    'Sztuczna inteligencja i uczenie maszynowe w detekcji zagrożeń, zagrożenia związane z AI oraz narzędzia AI w cyberbezpieczeństwie.',
            },
            informationSecurityManagement: {
                name: 'Zarządzanie bezpieczeństwem informacji',
                description:
                    'Ochrona informacji zgodnie z normami i standardami (ISO 27001, NIST, CIS), ocena i minimalizacja ryzyk oraz zarządzanie zespołem w zmieniającym się krajobrazie zagrożeń.',
            },
            legalAspectsOfCybercrimeAndIncidents: {
                name: 'Prawne aspekty cyberprzestępstw i incydentów',
                description:
                    'Karnoprawna analiza cyberprzestępstw i kwestie dowodowe, regulacje NIS2, CER, CRA i DORA oraz prawne aspekty zarządzania incydentami.',
            },
            securityOperationsCenter: {
                name: 'Security Operations Center',
                description:
                    'Rola i struktura SOC, procesy monitorowania i reagowania na incydenty oraz dojrzałość operacyjna SOC.',
            },
            openSourceIntelligenceOsint: {
                name: 'Biały wywiad (OSINT)',
                description:
                    'OSINT jako technika wywiadu: informacje geograficzne, sieci społecznościowe, rejestry państwowe i wycieki danych, metody śledztw i raportowania.',
            },
            penetrationTestingAndSocialEngineering: {
                name: 'Testy penetracyjne i socjotechnika',
                description:
                    'Metodyka testów bezpieczeństwa, identyfikowanie podatności w systemach teleinformatycznych i socjotechnika jako narzędzie testów penetracyjnych.',
            },
            digitalForensicsAndEvidenceAcquisition: {
                name: 'Informatyka śledcza i zabezpieczanie danych',
                description:
                    'Cyfrowy dowód, procesy informatyki śledczej oraz zabezpieczanie danych post mortem i na żywym systemie.',
            },
            windowsSecurity: {
                name: 'Bezpieczeństwo systemów Windows',
                description:
                    'Architektura i model bezpieczeństwa systemu, ataki offline i podstawy bezpieczeństwa Active Directory.',
            },
            devsecopsAndApplicationSecurity: {
                name: 'DevSecOps i bezpieczeństwo aplikacji',
                description:
                    'OWASP Top 10, ataki injection i XSS oraz obrona przed nimi, wykrywanie podatności w aplikacjach webowych.',
            },
            malwareAnalysis: {
                name: 'Analiza malware',
                description:
                    'Analiza statyczna, dynamiczna, manualna i zautomatyzowana, podstawy asemblera x86/x64 i inżynieria wsteczna malware’u.',
            },
            incidentForensicsAndDataRecovery: {
                name: 'Analiza powłamaniowa i odzyskiwanie danych',
                description:
                    'Ekstrakcja, interpretacja i raportowanie, analiza systemów plików FAT32 i NTFS, artefaktów Windows, komunikatorów, przeglądarek i poczty oraz incydentów ransomware.',
            },
            redTeamingAndAptAttackSimulation: {
                name: 'Red teaming i symulacje ataków APT',
                description:
                    'Techniki, taktyki i narzędzia na wszystkich etapach ataku, kanały komunikacji C2 w praktyce i PowerShell w środowisku Microsoft.',
            },
            cloudSecurityAws: {
                name: 'Bezpieczeństwo chmury (AWS)',
                description:
                    'Kontrola dostępu do kont, zabezpieczanie zasobów (IAM, sieć, szyfrowanie, monitorowanie) i przykłady prawdziwych ataków na chmurę.',
            },
        },
        ml: {
            machineLearningStatisticalMethods: {
                name: 'Uczenie maszynowe i metody statystyczne',
                description:
                    'Techniki uczenia statystycznego, wybór i walidacja modeli. Stosowanie metod uczenia nadzorowanego i nienadzorowanego do rzeczywistych problemów.',
            },
            deepLearningNeuralNetworks: {
                name: 'Głębokie uczenie i sieci neuronowe',
                description:
                    'Projektowanie i trenowanie architektur sieci neuronowych. Sieci konwolucyjne i rekurencyjne do przetwarzania obrazów i sekwencji.',
            },
            reinforcementLearning: {
                name: 'Uczenie ze wzmocnieniem',
                description:
                    'Budowa systemów uczących się optymalnych strategii decyzyjnych poprzez interakcję ze środowiskiem.',
            },
            naturalLanguageProcessing: {
                name: 'Przetwarzanie języka naturalnego',
                description:
                    'Analiza tekstu i modele językowe. Przetwarzanie i analiza danych w języku naturalnym.',
            },
            computerVisionVisualRecognition: {
                name: 'Widzenie komputerowe i rozpoznawanie obrazów',
                description:
                    'Przetwarzanie obrazów i detekcja obiektów. Zastosowanie głębokiego uczenia w zadaniach na obrazach.',
            },
            autonomousSystemsRobotControl: {
                name: 'Systemy autonomiczne i sterowanie robotami',
                description:
                    'Sterowanie systemami robotycznymi i urządzeniami autonomicznymi z wykorzystaniem uczenia maszynowego.',
            },
            modelExplainabilityInterpretability: {
                name: 'Wyjaśnialność i interpretowalność modeli',
                description:
                    'Techniki zwiększania przejrzystości i interpretowalności modeli uczenia maszynowego.',
            },
            largeScaleMachineLearning: {
                name: 'Uczenie maszynowe na dużą skalę',
                description:
                    'Skalowanie i optymalizacja przetwarzania dużych zbiorów danych. Podejścia do obliczeń rozproszonych.',
            },
            projectManagementTeamCollaboration: {
                name: 'Zarządzanie projektami i praca zespołowa',
                description:
                    'Planowanie i realizacja projektów technicznych. Efektywna praca w zespole i komunikowanie zagadnień technicznych.',
            },
            criticalAnalysisInnovation: {
                name: 'Analiza krytyczna i innowacje',
                description:
                    'Ocena i ulepszanie rozwiązań uczenia maszynowego. Identyfikowanie ograniczeń i proponowanie usprawnień.',
            },
            applicationDomains: {
                name: 'Dziedziny zastosowań',
                description:
                    'Praktyczne zastosowania uczenia maszynowego w naukach przyrodniczych, sieciach społecznościowych i rozwiązywaniu problemów biznesowych.',
            },
        },
        cs: {
            programmingSoftwareDevelopment: {
                name: 'Programowanie i wytwarzanie oprogramowania',
                description:
                    'Biegłość w wielu paradygmatach programowania. Projektowanie, implementacja i debugowanie systemów oprogramowania.',
            },
            algorithmsDataStructures: {
                name: 'Algorytmy i struktury danych',
                description:
                    'Projektowanie i analiza algorytmów. Implementacja i optymalizacja struktur danych.',
            },
            databasesDataManagement: {
                name: 'Bazy danych i zarządzanie danymi',
                description:
                    'Projektowanie i implementacja systemów bazodanowych. Modelowanie danych i optymalizacja zapytań.',
            },
            webApplicationsInternetTechnologies: {
                name: 'Aplikacje webowe i technologie internetowe',
                description:
                    'Tworzenie aplikacji webowych z użyciem nowoczesnych frameworków i technologii.',
            },
            computerNetworksOperatingSystems: {
                name: 'Sieci komputerowe i systemy operacyjne',
                description:
                    'Protokoły sieciowe i budowa systemów operacyjnych. Programowanie systemowe.',
            },
            softwareEngineeringQualityAssurance: {
                name: 'Inżynieria oprogramowania i zapewnianie jakości',
                description:
                    'Stosowanie zasad inżynierii oprogramowania w projektach. Praca zespołowa i code review.',
            },
            computerSecurity: {
                name: 'Bezpieczeństwo komputerowe',
                description:
                    'Kryptografia, uwierzytelnianie i kontrola dostępu. Dobre praktyki bezpieczeństwa.',
            },
            programSemanticsFormalVerification: {
                name: 'Semantyka programów i weryfikacja formalna',
                description: 'Semantyka języków programowania i metody formalne.',
            },
            mathematicsComputationalTheory: {
                name: 'Matematyka i teoria obliczeń',
                description:
                    'Analiza matematyczna, algebra liniowa i matematyka dyskretna. Teoria automatów i obliczalność.',
            },
            concurrentDistributedSystems: {
                name: 'Systemy współbieżne i rozproszone',
                description:
                    'Projektowanie i implementacja programów współbieżnych i wielowątkowych.',
            },
            numericalMethodsScientificComputing: {
                name: 'Metody numeryczne i obliczenia naukowe',
                description: 'Stosowanie algorytmów numerycznych i technik optymalizacji.',
            },
            professionalCommunicationTeamwork: {
                name: 'Komunikacja zawodowa i praca zespołowa',
                description:
                    'Wspólne tworzenie oprogramowania i zespołowe projekty programistyczne.',
            },
        },
        math: {
            mathematicalAnalysisCalculus: {
                name: 'Analiza matematyczna',
                description:
                    'Analiza rzeczywista i zespolona: granice, ciągłość, całkowanie. Rachunek różniczkowy funkcji wielu zmiennych i funkcje zespolone.',
            },
            linearAlgebraGeometry: {
                name: 'Algebra liniowa i geometria',
                description:
                    'Przestrzenie wektorowe, przekształcenia liniowe i teoria macierzy. Pojęcia geometryczne i geometria różniczkowa.',
            },
            algebraAbstractStructures: {
                name: 'Algebra i struktury abstrakcyjne',
                description: 'Teoria algebraiczna, w tym teoria grup i struktury abstrakcyjne.',
            },
            probabilityTheoryStatistics: {
                name: 'Rachunek prawdopodobieństwa i statystyka',
                description:
                    'Rozkłady prawdopodobieństwa i procesy stochastyczne. Analiza danych i wnioskowanie statystyczne.',
            },
            differentialEquations: {
                name: 'Równania różniczkowe',
                description:
                    'Równania różniczkowe zwyczajne i metody numeryczne. Modelowanie układów fizycznych i dynamicznych.',
            },
            topologyAdvancedGeometry: {
                name: 'Topologia i geometria',
                description: 'Przestrzenie topologiczne i geometria różniczkowa.',
            },
            numericalMethodsComputation: {
                name: 'Metody numeryczne',
                description:
                    'Algorytmy numeryczne i metody aproksymacji. Implementacja rozwiązań obliczeniowych.',
            },
            combinatoricsDiscreteMathematics: {
                name: 'Kombinatoryka i matematyka dyskretna',
                description: 'Metody kombinatoryczne i struktury dyskretne.',
            },
            programmingComputationalMethods: {
                name: 'Programowanie i metody obliczeniowe',
                description: 'Praktyczne programowanie i implementacja algorytmów matematycznych.',
            },
            decisionSupportSystemsApplications: {
                name: 'Systemy wspomagania decyzji',
                description:
                    'Metody matematyczne w podejmowaniu decyzji i rozwiązywaniu problemów biznesowych.',
            },
            professionalCommunicationLanguageSkills: {
                name: 'Komunikacja zawodowa i językowa',
                description:
                    'Jasne komunikowanie zagadnień matematycznych. Angielski w kontekście akademickim i zawodowym.',
            },
        },
    },
    coursework: {
        ml: {
            largeScaleMl: {
                name: 'Large Scale Machine Learning',
                description:
                    'Rozproszony trening w PyTorch DDP na wielu węzłach klastra przez SLURM oraz klaster maszyn w Google Cloud postawiony Terraformem i Ansible, z NFS i MPI.',
            },
        },
        cs: {
            binaryExploitation: {
                name: 'Eksploatacja plików binarnych',
                description:
                    'Notatki i komendy z zajęć z bezpieczeństwa: analiza binarek (objdump, strings, hexdump), debugowanie w gdb i ataki typu ret2libc.',
            },
            rust: {
                name: 'Rust',
                description:
                    'Zadanie z Advent of Code 2022: odtworzenie drzewa katalogów z logu terminala i liczenie rozmiarów.',
            },
            threePartition: {
                name: 'Problem 3-podziału w ASP',
                description:
                    'Rozwiązywanie problemu 3-podziału w Answer Set Programming (clingo) z prostym interfejsem w Tkinterze.',
            },
            modernCpp: {
                name: 'Nowoczesny C++',
                description:
                    'Zadania z Języków i narzędzi programowania, robione w parach: szablony i koncepty (symulacja wypraw po skarby), genealogia wirusów jako graf DAG z gwarancjami bezpieczeństwa wyjątków, symulacja łazika planetarnego oraz kontener tri_list z leniwymi widokami na C++20 ranges.',
            },
        },
        math: {
            numericalMethods: {
                name: 'Metody numeryczne',
                description:
                    'Operacje na macierzach trójdiagonalnych z przesuniętymi diagonalami w NumPy: mnożenie przez wektor i rozwiązywanie układów, z testami.',
            },
            statisticsInR: {
                name: 'Statystyka w R',
                description:
                    'Ćwiczenia z R: wektory, ramki danych, rozkłady prawdopodobieństwa i analiza danych o COVID.',
            },
        },
    },
    education: {
        cyber: {
            degree: 'Studia podyplomowe, Cyberbezpieczeństwo i informatyka śledcza',
            school: 'Uczelnia Łazarskiego',
            url: 'https://www.lazarski.pl/pl/studia-podyplomowe/cyberbezpieczenstwo-i-informatyka-sledcza',
        },
        ml: {
            degree: 'Magister, Uczenie maszynowe i metody statystyczne',
            school: 'Uniwersytet Warszawski',
            url: 'https://www.mimuw.edu.pl/pl/studia/machine-learning-nowy-kierunek-na-studiach-ii-stopnia/',
            thesis: 'Wykrywanie dezinformacji z wykorzystaniem grafowych sieci neuronowych (GNN)',
        },
        cs: {
            degree: 'Licencjat, Informatyka',
            school: 'Uniwersytet Warszawski',
            url: 'https://irk.uw.edu.pl/pl/offer/PELNE2026/programme/S1-INF/',
            thesis: 'System do budowy modeli agentowych - interfejs użytkownika',
        },
        math: {
            degree: 'Licencjat, Matematyka',
            school: 'Uniwersytet Warszawski',
            url: 'https://irk.uw.edu.pl/pl/offer/PELNE2026/programme/S1-MAT/',
            thesis: 'Wykorzystanie grafowych sieci neuronowych w celu przewidywania rezygnacji uczestników kursów internetowych',
        },
    },
    publications: {
        pomoPlus: {
            description:
                'Rozszerzenie POMO - jednego z najlepszych solverów problemu wyznaczania tras pojazdów opartych na uczeniu ze wzmocnieniem - o agenta z mechanizmem atencji wybierającego węzły startowe; szybsza zbieżność i mniejsze odchylenie od optimum na benchmarkach CVRPLIB (PyTorch, RL4CO).',
        },
    },
}
