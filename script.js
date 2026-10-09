const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

// ------------------------------
// Réponses prédéfinies finance / forex / crypto
// ------------------------------
const responses = {
  "bonjour": "Bonjour ! Je suis l’analyste Mali Finance. Pose une question sur le forex, le bitcoin, l’or, la crypto ou la finance mondiale. 📈",
  "bonsoir": "Bonsoir ! Prêt à suivre les marchés ? Je peux t’expliquer le forex, le BTC, l’or et les tendances du marché. 🌍",
  "salut": "Salut ! Demande-moi tout sur les monnaies, la crypto ou les marchés financiers. 💹",
  "hello": "Hello ! Je peux t’aider sur forex, crypto, or, marchés mondiaux et tendances économiques. 🌐",
  "comment ca va": "Je vais très bien, merci ! En mode marché, je suis prêt à analyser les tendances. 📊",
  "comment vas tu": "Très bien ! J’aide les traders et investisseurs à comprendre les marchés. 💼",
  "aide": "Bien sûr ! Dis-moi ton sujet : forex, euro-dollar, bitcoin, crypto, or, inflation, taux d’intérêt, etc.",
  "aide moi": "Oui ! Pose une question spécifique sur le marché, le trading, les devises ou la crypto.",
  "qui es tu": "Je suis un assistant financier intelligent spécialisé en forex, crypto, or et marchés mondiaux. 💹",
  "quel est ton nom": "Je m’appelle Mali Finance AI.",
  "forex": "Le forex est le marché des devises. Les grands acteurs sont les banques centrales, les traders, les hedge funds et les institutions internationales. 🌍",
  "market forex": "Le forex est le plus grand marché du monde par volume. Il bouge en fonction des taux d’intérêt, des données économiques et des attentes de politique monétaire. 📉📈",
  "devises": "Les devises sont les monnaies d’un pays. Les paires les plus suivies sont EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD.",
  "euro dollar": "EUR/USD représente l’euro contre le dollar américain. Il suit les taux, les données PMI, l’inflation et la politique de la Fed et de la BCE.",
  "eur usd": "EUR/USD est une paire très suivie. Le dollar se renforce quand la Fed est agressive, et l’euro se renforce quand la BCE est plus hawkish.",
  "usd xof": "USD/XOF représente le dollar en francs CFA. C’est important pour le commerce et les échanges régionaux en Afrique de l’Ouest.",
  "xof": "Le franc CFA est un outil important pour les pays de l’UEMOA. Son cours est lié à des politiques monétaires régionales.",
  "dollar": "Le dollar est la devise de référence mondiale. Il est influencé par la Fed, l’inflation, la croissance et les taux d’intérêt.",
  "euro": "L’euro est la devise de la zone euro. Son cours dépend de la BCE, des données de croissance et du risque géopolitique.",
  "livres sterling": "Le GBP suit les politiques de la Bank of England et les discussions sur l’inflation et le Brexit.",
  "yen": "Le yen est souvent considéré comme une devise refuge. Il peut monter quand la peur monte sur les marchés.",
  "franc suisse": "Le franc suisse est une monnaie refuge. Il se renforce souvent en période d’incertitude mondiale.",
  "bitcoin": "Le bitcoin est la crypto la plus connue. Il est influencé par la demande, le sentiment du marché, les régulations et les flux d’institutionnels.",
  "btc": "Le BTC est souvent vu comme un actif risqué. Il réagit fortement aux taux, à la liquidité et au sentiment du marché.",
  "crypto": "La crypto est un marché 24/7, très volatile. Les facteurs clés sont la liquidité, l’adoption, la réglementation et le sentiment.",
  "ethereum": "L’Ethereum est le plus grand réseau smart contract. Il suit les innovations de la blockchain, les ETF et les demandes de staking.",
  "eth": "ETH est très influencé par les mises à jour réseau, les ETF, l’adoption institutionnelle et les fonds de liquidité.",
  "solana": "Solana est connu pour ses performances de réseau et sa forte liquidité sur les échanges de crypto.",
  "bnb": "BNB est une crypto très utilisée sur les échanges et les applications de l’écosystème Binance.",
  "usdt": "USDT est une stablecoin majeure. Elle sert de voiture de liquidité entre les échanges crypto et les marchés mondiaux.",
  "usdc": "USDC est une stablecoin réglementée, très utilisée pour les paiements et les échanges de crypto.",
  "or": "L’or est souvent un actif refuge. Il monte en période de troubles économiques ou de baisse des taux d’intérêt.",
  "gold": "L’or (XAU/USD) est influencé par les taux d’intérêt, l’inflation, la demande centrale et les tensions géopolitiques.",
  "xau": "XAU/USD est le prix de l’or en dollar. Il est souvent utilisé comme couverture contre l’inflation et l’incertitude.",
  "argent": "L’argent est un métal précieux, plus volatil que l’or, et souvent vu comme un actif industriel et refuge.",
  "pétrole": "Le pétrole suit l’offre et la demande, les conflits géopolitiques et les décisions de l’OPEP.",
  "brent": "Le Brent est le baril de référence pour l’Europe. Il est sensible au risque géopolitique et à la production mondiale.",
  "wti": "Le WTI est le pétrole américain de référence. Il suit aussi les données énergétiques et la demande mondiale.",
  "inflation": "L’inflation mesure la hausse des prix. Elle est un point central des banques centrales car elle affecte les taux d’intérêt.",
  "taux d'interet": "Les taux d’intérêt influencent fortement les devises et les marchés financiers. Une hausse de taux renforce souvent le dollar.",
  "fed": "La Fed est la banque centrale américaine. Sa politique monétaire influence le dollar, les taux, les marchés et les cryptos.",
  "bce": "La BCE fixe les taux en zone euro. Ses décisions affectent l’euro, les obligations et les marchés financiers européens.",
  "banque centrale": "Les banques centrales contrôlent les taux d’intérêt et la liquidité. Elles sont des acteurs majeurs du marché.",
  "policy": "La politique monétaire joue un rôle majeur sur les marchés : taux, liquidité, inflation, croissance, risque.",
  "trading": "Le trading consiste à acheter et vendre des actifs pour profiter des mouvements de prix. Il faut gérer le risque et la discipline.",
  "achat": "L’achat d’un actif dépend du contexte macroéconomique, du sentiment, du support technique et de la liquidité.",
  "vente": "La vente se fait souvent quand le prix casse un support ou quand le sentiment devient négatif.",
  "stop loss": "Le stop loss est un ordre qui limite les pertes. C’est essentiel pour gérer le risque en trading.",
  "take profit": "Le take profit est un ordre qui verrouille les gains quand le prix atteint un niveau souhaité.",
  "leverage": "L’effet de levier augmente la taille de la position, mais amplifie aussi les pertes. Il faut l’utiliser avec prudence.",
  "volatilite": "La volatilité est l’amplitude des mouvements de prix. Plus elle est forte, plus les marchés sont imprévisibles.",
  "support": "Le support est un niveau où le prix a souvent tendance à trouver un intérêt d’achat.",
  "resistance": "La résistance est un niveau où le prix a souvent tendance à trouver un intérêt à vendre.",
  "trend": "Une tendance est la direction dominante du prix sur une période donnée. Les tendances peuvent être haussières, baissières ou latérales.",
  "bull market": "Un marché haussier (bull market) est un marché où les prix montent généralement.",
  "bear market": "Un marché baissier (bear market) est un marché où les prix chutent généralement.",
  "momentum": "Le momentum décrit la force avec laquelle le prix évolue dans une direction.",
  "risque": "Le risque financier vient de la volatilité, de la chute du prix, de la liquidité, des taux et du sentiment du marché.",
  "gestion de capital": "La gestion de capital consiste à protéger son capital, répartir les risques et éviter de surexposer une seule position.",
  "diversification": "La diversification réduit le risque en répartissant l’exposition entre plusieurs actifs.",
  "portefeuille": "Un portefeuille bien construit combine actifs, timing, risque, diversification et horizon d’investissement.",
  "investissement": "L’investissement vise la création de richesse sur le long terme. Il demande patience, discipline et analyse.",
  "buy and hold": "Le buy and hold consiste à acheter un actif fort et à le conserver sur le long terme.",
  "day trading": "Le day trading consiste à ouvrir et fermer des positions dans la même journée.",
  "swing trading": "Le swing trading consiste à capturer des mouvements sur plusieurs jours ou semaines.",
  "scalping": "Le scalping est une stratégie ultra courte où l’objectif est de profiter de très petites variations de prix.",
  "analyse technique": "L’analyse technique se base sur les prix, les volumes, les supports, résistances, moyennes mobiles et indicateurs.",
  "analyse fondamentale": "L’analyse fondamentale se base sur l’économie, les taux, l’inflation, la croissance et les décisions de banques centrales.",
  "moyenne mobile": "La moyenne mobile lisse les mouvements de prix et aide à voir la tendance.",
  "rsi": "Le RSI mesure la vitesse et l’intensité des mouvements du prix. Il aide à identifier surachat et survente.",
  "macd": "Le MACD compare deux moyennes mobiles pour confirmer la force d’une tendance.",
  "bollinger": "Les bandes de Bollinger mesurent la volatilité et les écarts autour de la moyenne.",
  "sentiment": "Le sentiment du marché désigne l’humeur générale des traders : peur, avidité, confiance ou panique.",
  "liquidite": "La liquidité est la facilité avec laquelle un actif peut être acheté ou vendu sans déplacer trop le prix.",
  "hedge": "Le hedge est une protection contre un risque : par exemple couvrir un portefeuille contre une baisse sur le dollar ou sur l’or.",
  "cartographie du risque": "Une bonne stratégie de trading commence par comprendre le risque global, les corrélations et les liquidités.",
  "dollar index": "Le Dollar Index mesure la force du dollar par rapport à un panier de devises majeures.",
  "dxy": "Le DXY est un baromètre de la force du dollar américain.",
  "taux directeur": "Le taux directeur est le taux fixé par la banque centrale. Il influence toute l’économie et les marchés financiers.",
  "salaire": "Avant d’investir, il faut bien définir son capital, ses objectifs et ses capacités de perte.",
  "faut il acheter": "Il faut acheter selon le cadre de risque, la valuation, la tendance et la liquidité. Il ne faut pas acheter par émotion.",
  "faut il vendre": "Il faut vendre quand la logique du trade est rompue, quand le prix casse les niveaux clés ou quand le risque augmente trop.",
  "quand investir": "Investir sur le bon moment est plus difficile que de choisir le bon actif. Le timing n’est pas parfait, il faut construire une stratégie.",
  "que faire en crise": "En période de crise, il faut sécuriser le capital, réduire le levier, regarder les actifs refuges comme l’or, et ne pas paniquer.",
  "or ou bitcoin": "L’or est souvent plus stable et plus défensif. Le bitcoin est plus volatil et plus risqué, mais avec un potentiel de croissance plus fort.",
  "mieux investir": "Le meilleur investissement dépend de ton profil, de ton horizon et de ta tolérance au risque. Pour la stabilité, l’or et les obligations ; pour la croissance, les actions ou la crypto.",
  "cryptomonnaie et risques": "Les cryptos sont très volatiles, sensibles au sentiment et à la réglementation. Il faut toujours gérer le risque.",
  "forex ou crypto": "Le forex est plus liquide et plus mature. La crypto est plus volatile et ouverte 24/7. Les deux ont des profils de risque différents.",
  "inflation et taux": "Quand l’inflation est élevée, les banques centrales augmentent souvent les taux, ce qui soutient le dollar et pèse sur les actifs risqués.",
  "russie ukraine": "Les événements géopolitiques peuvent perturber les prix du pétrole, du gaz, de l’or et des devises à court terme.",
  "guerre": "Les guerres et tensions géopolitiques créent de la volatilité sur les marchés et peuvent renforcer les actifs refuges.",
  "recession": "En récession, les actifs risqués chutent souvent tandis que les monnaies refuges et l’or peuvent se renforcer.",
  "croissance economique": "La croissance économique soutient les marchés, les entreprises et parfois les devises des pays en développement.",
  "pmi": "Le PMI mesure la santé du secteur manufacturier et des services. Il est très suivi par les traders.",
  "emploi": "Les données d’emploi impactent fortement les monnaies et les taux. Une bonne dynamique de travail soutient le dollar.",
  "nfp": "Le NFP aux États-Unis est un indicateur clé. Il a souvent un fort impact sur le dollar et les marchés américains.",
  "cpi": "L’IPC mesure l’inflation. Il est crucial pour savoir si les banques centrales vont monter ou baisser les taux.",
  "ppi": "Le PPI mesure l’inflation au niveau de la production. Il influence le coût final et la politique monétaire.",
  "retail sales": "Les ventes au détail reflètent la consommation. Une consommation forte soutient la croissance et donne du poids au dollar.",
  "gdp": "Le PIB mesure la croissance économique. Il aide à prévoir la politique monétaire et la force d’une devise.",
  "market maker": "Un market maker apporte de la liquidité et fixe des prix d’achat et de vente pour les marchés.",
  "broker": "Un broker donne accès aux marchés de forex, crypto, CFDs et autres actifs financiers.",
  "spread": "Le spread est l’écart entre le prix d’achat et le prix de vente. C’est un coût de transaction.",
  "commission": "La commission est une charge sur les échanges, souvent appliquée sur les comptes pro ou les marchés d’actions.",
  "margin": "La marge permet d’ouvrir une position plus grande avec un peu de capital, mais augmente le risque.",
  "laverages": "Le levier est utile pour optimiser un capital, mais il multiplie aussi les pertes. Il faut l’utiliser avec discipline.",
  "trade plan": "Un plan de trading détaille les entrées, sorties, stop loss, gestion de risque et règles de trading.",
  "position long": "Une position longue consiste à acheter dans l’attente d’une hausse du prix.",
  "position short": "Une position courte consiste à vendre dans l’attente d’une baisse du prix.",
  "corrélation": "Les corrélations montrent comment deux actifs évoluent ensemble. Par exemple, l’or et le dollar ont souvent des relations inverses.",
  "dollar stablecoin": "Les stablecoins comme USDT et USDC rendent les échanges crypto plus simples et donnent de la liquidité.",
  "altcoin": "Une altcoin est une cryptomonnaie autre que le bitcoin. Elles peuvent être très volatiles.",
  "token": "Un token est une unité d’un projet blockchain. Il peut être utilitaire, de gouvernance, ou de financement.",
  "blockchain": "La blockchain est le registre distribué qui sécurise les transactions et les données sur un réseau.",
  "mining": "Le mining consiste à sécuriser un réseau blockchain en validant des blocs, souvent avec un coût énergétique élevé.",
  "staking": "Le staking consiste à verrouiller des actifs pour sécuriser un réseau et obtenir des récompenses.",
  "nft": "Les NFT représentent des actifs numériques uniques, souvent liés à l’art, au gaming ou à des collections.",
  "defi": "La DeFi sert à offrir des services financiers décentralisés : prêts, échanges, rendements, etc.",
  "etf": "Les ETF sont des fonds négociés en bourse qui regroupent plusieurs actifs, comme des actions ou des matières premières.",
  "etf bitcoin": "Les ETF Bitcoin rendent l’accès à la crypto plus simple pour les investisseurs institutionnels.",
  "etf ethereum": "Les ETF Ethereum facilitent l’accès à l’écosystème Ethereum par le biais d’instruments traditionnels.",
  "etf or": "Les ETF sur l’or permettent d’exposer le métal jaune sans posséder physiquement le métal.",
  "marché de l'or": "Le marché de l’or suit les taux, l’inflation, la demande centrale et les tensions géopolitiques.",
  "or et dollar": "Souvent, l’or monte quand le dollar baisse, surtout en période de forte incertitude.",
  "or et inflation": "L’or est souvent utilisé comme protection contre l’inflation et la perte de valeur du papier monnaie.",
  "bitcoin et dollar": "Quand le dollar se renforce, le bitcoin a souvent tendance à être plus faible. Quand le marché est haussier, le BTC peut monter fortement.",
  "crypto et taux": "Les cryptos sont souvent sensibles aux taux d’intérêt et surtout aux attentes de la Fed.",
  "trading signal": "Un signal de trading est une indication d’achat ou de vente, basée sur le prix, le volume ou l’analyse technique.",
  "analyse de sentiment": "L’analyse de sentiment mesure l’humeur du marché sur les réseaux, l’actualité et les tendances de trading.",
  "new highs": "Un nouveau plus haut est un signal de force. Il peut montrer que la demande est forte.",
  "new lows": "Un nouveau plus bas est souvent un signal de faiblesse ou de pression vendeuse.",
  "strong hands": "Les strong hands sont les investisseurs qui gardent leurs positions malgré la volatilité. Cela peut signaler une force sous-jacente.",
  "absorption": "L’absorption est le fait que le marché résiste à une baisse en absorbant les ventes.",
  "liquidation": "Une liquidation est l’exécution forcée d’une position après un dépassement de marge.",
  "market squeeze": "Un squeeze de marché est un mouvement brutal où la liquidité s’effondre et le prix prend de la vitesse.",
  "supply demand": "La loi de l’offre et de la demande est centrale sur tous les marchés. Le prix monte si la demande dépasse l’offre.",
  "circuit breaker": "Un circuit breaker est une mesure de protection qui limite les mouvements extrêmes d’un marché.",
  "tradingview": "TradingView est une plateforme très utilisée pour l’analyse technique et les graphiques.",
  "chart": "Les graphiques montrent la dynamique du prix sur différentes échelles de temps : minute, heure, jour, semaine, mois.",
  "candlestick": "Les chandeliers montrent l’ouverture, le plus haut, le plus bas et la clôture sur une période donnée.",
  "heikin ashi": "Les Heikin Ashi filtrent les mouvements et aident à voir la tendance plus clairement.",
  "m1": "M1 = 1 minute, très rapide et très volatile.",
  "m5": "M5 = 5 minutes, utile pour le scalping et le trading court terme.",
  "h1": "H1 = 1 heure, utilisé pour les tendances intraday.",
  "h4": "H4 = 4 heures, très utilisé pour les positions swing.",
  "d1": "D1 = 1 jour, très utile pour l’analyse générale et le medium terme.",
  "w1": "W1 = 1 semaine, pour les tendances plus larges.",
  "market cycle": "Les marchés alternent souvent entre phases de tendance, de consolidation et de retournement.",
  "consolidation": "La consolidation est une période où le prix évolue latéralement avant une reprise ou une baisse.",
  "trend reversal": "Un retournement de tendance arrive quand la dynamique s’inverse.",
  "breakout": "Un breakout est une cassure d’un niveau clé de prix, souvent suivie d’une montée ou d’une baisse rapide.",
  "fakeout": "Un fakeout est une fausse cassure qui retourne immédiatement sur le mauvais côté du niveau.",
  "risk reward": "Le ratio risque/rendement aide à savoir si un trade est intéressant. Un bon ratio est souvent supérieur à 1:2 ou 1:3.",
  "capital": "Le capital est la somme qu’on consacre au trading ou à l’investissement.",
  "marge de sécurité": "La marge de sécurité est la prudence dans l’investissement : éviter de trop acheter au prix le plus haut.",
  "protection du capital": "La principale règle est de protéger le capital avant de chercher le rendement.",
  "gestion émotionnelle": "La discipline émotionnelle est essentielle. Les meilleures performances viennent souvent de la maîtrise de la peur et de la cupidité.",
  "pourquoi le marché bouge": "Le marché bouge parce que les acteurs réagissent aux taux, aux chiffres, à la guerre, aux nouvelles et aux liquidités.",
  "qui fait bouger le marché forex": "Le marché forex est surtout déplacé par les banques centrales, les banques de commerce, les hedge funds, les institutions, les entreprises et les traders.",
  "qui fait bouger le marché crypto": "Le marché crypto est surtout déplacé par les flux de liquidité, les ETF, les institutions, les investisseurs, les nouvelles réglementaires et les achats massifs.",
  "qui fait bouger le marché de l'or": "L’or est touché par les banques centrales, les investisseurs, les tensions géopolitiques et les mouvements de rates.",
  "qui fait bouger le marché": "Les grands moteurs du marché sont les banques centrales, les institutions, les traders, la liquidité, l’information et le sentiment.",
  "quelle est la meilleure devise": "La meilleure devise dépend du contexte économique. Le dollar est la plus forte, mais le bitcoin ou l’or peuvent être des actifs refuge selon les périodes.",
  "quelle crypto acheter": "Aucune crypto n’est universellement meilleure. Choisir dépend du projet, du réseau, de la liquidité, de la sécurité et de ton horizon d’investissement.",
  "quelle monnaie va monter": "Il faut regarder la politique monétaire, la croissance, l’inflation, le risque géopolitique et les fondamentaux macro.",
  "quelle devise va tomber": "Une devise tombe souvent si l’inflation est forte, si la banque centrale est faible ou si le pays est en difficulté politique ou économique.",
  "quelle est la meilleure monnaie": "Le dollar est la monnaie de référence mondiale, mais la meilleure monnaie dépend de ton besoin : stabilité, liquidité, commerce ou couverture.",
  "comment lire un graphique": "Un graphique montre la relation entre temps et prix. Regarde la tendance, le volume, les supports, les résistances, et la force des bougies.",
  "comment trader le forex": "Pour trader le forex, il faut comprendre l’économie, les taux, les paires, la gestion de risque, et utiliser une bonne stratégie.",
  "comment trader la crypto": "Pour trader la crypto, il faut comprendre la volatilité, la liquidité, le sentiment et la structure du marché. La gestion du risque est essentielle.",
  "comment trader l'or": "Pour trader l’or, il faut surveiller les taux, l’inflation, le dollar, les rapports de banques centrales et la dynamique des prix.",
  "quoi acheter maintenant": "Le bon achat dépend du contexte. Aujourd’hui, les actifs populaires sont le dollar, l’or, le bitcoin selon le sentiment et les taux.",
  "market overview": "Le marché est influencé par l’inflation, les taux, la croissance, le risque géopolitique et la liquidité globale.",
  "marchés mondiaux": "Les marchés mondiaux sont interconnectés. Un changement de taux aux États-Unis affecte le dollar, les actions, la crypto et l’or.",
  "bourse": "La bourse est l’endroit où les entreprises sont cotées. Mais ici on se concentre surtout sur forex, crypto et or.",
  "actions": "Les actions sont des parts de sociétés. Elles sont influencées par les bénéfices, les taux et le contexte économique.",
  "indice": "Les indices comme le S&P 500, le Nasdaq et le Dow Jones reflètent la santé du marché boursier américain.",
  "sp500": "Le S&P 500 est un indice clé de l’économie américaine. Il est fortement influencé par la Fed et les taux.",
  "nasdaq": "Le Nasdaq est surtout concentré dans la tech. Il est sensible au coût du capital.",
  "dow jones": "Le Dow Jones reflète les grandes entreprises américaines. Il suit les attentes d’activité et de taux.",
  "rentabilite": "La rentabilité d’un investissement dépend de l’entrée, du temps, du capital, des frais et des risques.",
  "return on investment": "Le ROI mesure la performance d’un investissement. Il se calcule par rapport au capital investi.",
  "roi": "ROI = bénéfice / capital investi. C’est un indicateur clé de performance.",
  "risk management": "La gestion du risque est la base d’une stratégie durable. Sans cela, même un bon signal peut tourner en perte.",
  "est ce que c'est rentable": "La rentabilité dépend du marché, de la stratégie, du timing, des frais et surtout du risque que tu acceptes.",
  "est ce que l'or va monter": "L’or monte souvent quand les taux baissent, l’inflation reste forte, ou qu’il y a un risque géopolitique élevé.",
  "est ce que bitcoin va monter": "Le bitcoin monte quand la liquidité est forte, les taux baissent, et le sentiment est positif. Il faut regarder l’offre et la demande.",
  "est ce que le dollar va renforcer": "Le dollar se renforce quand la Fed est plus strictive, que l’économie est solide et que les taux restent élevés.",
  "est ce que l'euro va monter": "L’euro monte quand la BCE est plus agressive, si la croissance est plus forte et si le risque régional diminue.",
  "qu'est ce qui fait bouger le marché": "Le marché bouge grâce aux banques centrales, au risque géopolitique, à la croissance, à l’inflation, aux taux et à la liquidité.",
  "comment gagner sur le forex": "Tu gagnes sur le forex en ayant une stratégie, une bonne gestion du risque, de la discipline et une analyse de marché solide.",
  "comment gagner sur la crypto": "Tu gagnes sur la crypto en évitant les trades émotionnels, en diversifiant et en ne surajustant pas le risque.",
  "qu'est ce que le spread": "Le spread est le coût de transaction entre achat et vente. Il doit être bien surveillé pour que le trade reste rentable.",
  "pourquoi le prix du bitcoin bouge": "Le prix du bitcoin bouge à cause de l’offre, de la demande, du sentiment, des ETF, des nouvelles réglementaires et des liquidités globales.",
  "pourquoi le marché du forex bouge": "Le forex bouge à cause des taux, des chiffres économiques, des interventions de banques centrales et des flux des grands investisseurs.",
  "pourquoi l'or monte": "L’or monte souvent en période d’incertitude, quand la croissance ralentit, ou quand les taux d’intérêt baissent.",
  "pourquoi l'euro baisse": "L’euro baisse si la BCE est accommodante, si l’économie européenne ralentit, ou si le risque dans la zone euro augmente.",
  "pourquoi le dollar monte": "Le dollar monte quand la Fed soutient les taux, quand l’économie américaine résiste, et quand le sentiment prend un axe plus défensif.",
  "qu'est ce qu'un signal d'achat": "Un signal d’achat est une indication que le prix peut aller vers le haut selon des critères techniques ou fondamentaux.",
  "qu'est ce qu'un signal de vente": "Un signal de vente est une indication que le prix peut aller vers le bas selon les niveaux techniques ou le sentiment.",
  "strategy": "Un bon plan de trading est simple : setup, validation, stop loss, position size, gestion des émotions.",
  "position sizing": "Le position sizing consiste à fixer le montant exact à investir sur un trade selon ton capital et ton risque acceptable.",
  "réglementation": "La réglementation joue un rôle énorme : elle peut soutenir ou freiner la croissance des marchés et des cryptos.",
  "argent liquide": "La liquidité est le carburant du marché. Sans liquidité, même de bonnes idées peuvent se casser en vol.",
  "crypto regulation": "La réglementation des cryptos influence le sentiment, les flux institutionnels et la volatilité du marché.",
  "macro": "La macroéconomie désigne l’économie globale : croissance, taux, inflation, chômage, commerce et politique monétaire.",
  "economics": "Les marchés financiers réagissent fortement aux variables macro : PIB, inflation, taux, chômage, commerce, déficit budgétaire.",
  "tendances du marché": "Les tendances du marché sont souvent déclenchées par des changements de politique monétaire, de liquidité et de risque global.",
  "donne moi une analyse": "Analyse rapide : regarde la tendance, la liquidité, la volatilité, les niveaux clés, les taux et la macro. Puis fais une décision avec un stop loss.",
  "analyse crypto": "Pour analyser la crypto, regarde le sentiment, les volumes, les niveaux majeurs, la structure du réseau et les régulations.",
  "analyse forex": "Pour analyser le forex, regarde les taux, les données macro, les paires majeures, les zones de support et de résistance.",
  "analyse or": "Pour analyser l’or, regarde le dollar, les taux, la inflation, les tensions géopolitiques et les niveaux techniques.",
  "bitcoin sur le long terme": "Le bitcoin sur le long terme est souvent redoutable si la demande institutionnelle reste forte et la liquidité mondiale soutient les actifs risqués.",
  "bitcoin sur le court terme": "Le bitcoin sur le court terme est très volatil. Il faut surveiller les niveaux clés, l’ETH et le dollar.",
  "usd xof tenues": "USD/XOF est souvent influencé par le dollar, la politique monétaire et la liquidité régionale. Il reste important pour la zone UEMOA.",
  "xof et euro": "Les monnaies de la zone UEMOA sont liées à l’euro. Cela donne une grande stabilité régionale selon les mouvements de l’euro.",
  "mali finance": "Le Mali peut suivre les marchés avec prudence. La finance mondiale influence le coût d’importation, les devises et les prix de matières premières.",
  "financement": "Le financement dépend des taux, de la liquidité, de la confiance des investisseurs et de la stabilité macroéconomique.",
  "investir au mali": "Investir au Mali demande de regarder l’économie locale, le risque politique, les frais de change et les opportunités de matières premières.",
  "commerce international": "Le commerce international est influencé par les devises, les taux d’intérêt, la demande globale et les conflits géopolitiques.",
  "pays exportateurs": "Les pays exportateurs sont très influencés par la demande mondiale, les prix des matières premières et les devises.",
  "marché émergent": "Les marchés émergents sont souvent plus volatils, surtout quand les taux américains montent ou que le dollar se renforce.",
  "marché développé": "Les marchés développés ont souvent plus de liquidité et plus de stabilité, mais les dérivés et les taux peuvent aussi les faire bouger fortement.",
  "politique monetaire": "La politique monétaire est le cœur du forex et des marchés obligataires. Elle dicte la direction du risque et des actifs.",
  "taux directeurs": "Les taux directeurs sont les leviers les plus importants pour la force des monnaies et la direction des marchés.",
  "croissance du pib": "La croissance du PIB est un moteur de la performance économique et de la force d’une devise.",
  "dette publique": "La dette publique peut peser sur la monnaie si les marchés jugent que la dette devient trop lourde.",
  "deficit": "Un déficit budgétaire important peut créer des craintes sur la monnaie et les taux d’intérêt.",
  "balance commerciale": "La balance commerciale montre si un pays exporte plus qu’il n’importe. Cela affecte la devise.",
  "commerce mondial": "Le commerce mondial est alimenté par la productivité, les mers, l’énergie et les matières premières. Les devises et le pétrole en dépendent fortement.",
  "gold standard": "Le gold standard est un ancien système monétaire où l’or servait de référence à la monnaie. Aujourd’hui, le système est plus flexible.",
  "inflation cible": "La plupart des banques centrales visent une inflation autour de 2% en moyenne, afin d’assurer la stabilité.",
  "prix de l'or aujourd'hui": "Le prix de l’or dépend des taux, du dollar, de l’inflation et du risque géopolitique. Regarde le marché en direct.",
  "prix du bitcoin aujourd'hui": "Le prix du bitcoin dépend du sentiment, des flux ETF, de la liquidité et du dollar. Regarde le marché en direct.",
  "prix du dollar": "Le cours du dollar dépend de la Fed, des taux, des données de croissance et du risque global.",
  "prix de l'euro": "Le prix de l’euro dépend de la BCE, des données de croissance, du risque régional et de la force du dollar.",
  "cours du forex": "Le cours du forex dépend du rapport entre deux devises et de tous les facteurs macro et politiques.",
  "finance mondiale": "La finance mondiale est un système interconnecté. Un changement de taux aux États-Unis influence les marchés partout dans le monde.",
  "macro finance": "La macrofinance combine l’économie et les marchés pour expliquer pourquoi le prix des actifs bougent.",
  "fonctionnement marché": "Le marché fonctionne par la confrontation entre acheteurs et vendeurs. Le prix se forme selon la liquidité, la vitesse et le sentiment.",
  "plan d'investissement": "Un bon plan d’investissement se construit sur les objectifs, le horizon, le risque et la diversification.",
  "sauvegarde de capital": "Sauvegarder le capital revient avant tout à ne pas sur-exposer un actif et à respecter le stop loss.",
  "belle stratégie": "Une belle stratégie ne demande pas de génie, juste de la discipline, de la logique et de la gestion du risque.",
  "crypto safe": "Les cryptos sont très risquées. Tu dois rester prudent, bien dimensionner la taille de position et ne pas tricher avec le risque.",
  "forex safe": "Le forex est liquide et mature, mais il reste risqué. Il faut gérer précisément le levier et la taille."
};

// ------------------------------
// Génération dynamique de réponses finance
// ------------------------------
function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildFinanceReply(cleaned) {
  if (!cleaned) return "Je n’ai rien reçu 😅";

  if (/(bitcoin|btc|crypto|cryptomonnaie|token)/.test(cleaned)) {
    return "La crypto est un marché 24/7 très volatil. Les moteurs principaux sont la liquidité, le sentiment, les ETF, les régulations et les flux institutionnels. Si tu veux, je peux t’expliquer le BTC, l’ETH, le solana, les stablecoins ou les meilleurs setups de trading crypto.";
  }

  if (/(forex|devises|euro|dollar|xof|eur|usd|pair|paires)/.test(cleaned)) {
    return "Le forex est le marché des devises. Les paires majeures sont EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD. Le mouvement vient surtout des taux directs, des données macro et des décisions de banques centrales. Si tu veux, je peux détailler EUR/USD, USD/XOF, le dollar, l’euro ou la stratégie forex.";
  }

  if (/(or|gold|xau|metaux|argent|pétrole|brent|wti)/.test(cleaned)) {
    return "L’or et les matières premières sont souvent dépendants des taux d’intérêt, de l’inflation et du risque géopolitique. L’or (XAU/USD) est très utilisé comme refuge. Le pétrole suit la demande mondiale et les tensions géopolitiques.";
  }

  if (/(taux|inflation|fed|bce|banque centrale|macro|croissance)/.test(cleaned)) {
    return "Les banques centrales sont les acteurs majeurs. Quand les taux montent, le dollar se renforce souvent et les actifs risqués peuvent se dégrader. Quand les taux baissent, l’or, les crypto et les marchés risqués peuvent mieux performer.";
  }

  if (/(trading|stop loss|take profit|risk|risque|strategie)/.test(cleaned)) {
    return "Le trading demande 3 choses : une bonne stratégie, une bonne gestion du risque et de la discipline. Le stop loss est obligatoire, les positions doivent être dimensionnées, et le ratio risque/rendement doit rester favorable.";
  }

  if (/(investir|portefeuille|diversification|capital)/.test(cleaned)) {
    return "Pour investir correctement, il faut définir un horizon, une tolérance au risque, une stratégie claire, et surtout diversifier le portefeuille. La protection du capital est plus importante que la recherche de la performance brutale.";
  }

  return "Je peux t’aider sur le forex, la crypto, l’or, les tendances macro, les banques centrales et les stratégies de trading. Pose une question claire, par exemple : 'Que fait bouger EUR/USD ?', 'Pourquoi le BTC est volatile ?', 'Quel impact a la Fed sur le dollar ?', 'Qu’est-ce que l’or fait dans un contexte inflationniste ?'";
}

function getReply(input) {
  const cleaned = normalizeText(input);

  if (!cleaned) {
    return "Je n’ai rien reçu 😅";
  }

  if (responses[cleaned]) {
    return responses[cleaned];
  }

  for (const [key, value] of Object.entries(responses)) {
    if (cleaned.includes(key)) {
      return value;
    }
  }

  return buildFinanceReply(cleaned);
}

// ------------------------------
// Envoi de message
// ------------------------------
function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const p = document.createElement("p");
  p.textContent = text;

  bubble.appendChild(p);
  message.appendChild(bubble);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoadingMessage() {
  const message = document.createElement("div");
  message.className = "message bot";
  message.id = "loadingMessage";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const loader = document.createElement("div");
  loader.className = "loading";
  loader.innerHTML = "<span></span><span></span><span></span>";

  bubble.appendChild(loader);
  message.appendChild(bubble);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingMessage() {
  const loading = document.getElementById("loadingMessage");
  if (loading) loading.remove();
}

function sendMessage() {
  const input = messageInput.value.trim();

  if (!input) return;

  addMessage(input, "user");
  messageInput.value = "";
  messageInput.focus();

  sendBtn.disabled = true;
  addLoadingMessage();

  setTimeout(() => {
    removeLoadingMessage();
    const answer = getReply(input);
    addMessage(answer, "bot");
    sendBtn.disabled = false;
  }, 500);
}

function clearChat() {
  if (confirm("Tu veux vraiment supprimer la conversation ?")) {
    chatMessages.innerHTML = "";
    addMessage("Bonjour ! Je suis l’analyste Mali Finance. Pose ta question sur le forex, la crypto ou l’or. 💹", "bot");
  }
}

async function copyChat() {
  const texts = [...document.querySelectorAll(".bubble p")]
    .map((p) => p.textContent)
    .join("\n\n");

  if (!texts.trim()) {
    alert("Il n’y a rien à copier !");
    return;
  }

  try {
    await navigator.clipboard.writeText(texts);
    const original = copyBtn.textContent;
    copyBtn.textContent = "✓ Copié !";
    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1500);
  } catch (error) {
    alert("Impossible de copier automatiquement ici.");
  }
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

clearBtn.addEventListener("click", clearChat);
copyBtn.addEventListener("click", copyChat);

messageInput.focus();


// ------------------------------
// Données marchés en temps réel
// ------------------------------
async function fetchMarketData() {
  try {
    const [coinData, fxData] = await Promise.all([
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&sparkline=true&price_change_percentage=24h"),
      fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,XOF")
    ]);

    const coins = await coinData.json();
    const fx = await fxData.json();

    const marketInfo = {
      btc: coins.find(c => c.id === "bitcoin"),
      eth: coins.find(c => c.id === "ethereum"),
      sol: coins.find(c => c.id === "solana"),
      eur: fx.rates.EUR || 0,
      xof: fx.rates.XOF || 0
    };

    renderMarketCards(marketInfo);
  } catch (error) {
    console.error("Erreur de chargement des données marchés :", error);
  }
}

function renderMarketCards(data) {
  const container = document.getElementById("marketCards");
  if (!container) return;

  const cards = [
    { name: "BTC/USD", value: data.btc?.current_price || 0, change: data.btc?.price_change_percentage_24h || 0, color: "#f7931a" },
    { name: "ETH/USD", value: data.eth?.current_price || 0, change: data.eth?.price_change_percentage_24h || 0, color: "#627eea" },
    { name: "SOL/USD", value: data.sol?.current_price || 0, change: data.sol?.price_change_percentage_24h || 0, color: "#14f195" },
    { name: "EUR/USD", value: 1 / (data.eur || 1), change: 0, color: "#3b82f6" },
    { name: "USD/XOF", value: data.xof || 0, change: 0, color: "#22c55e" }
  ];

  container.innerHTML = cards.map(item => `
    <div class="market-card">
      <div class="market-header">
        <strong>${item.name}</strong>
        <span style="color:${item.change >= 0 ? '#22c55e' : '#ef4444'}">
          ${item.change >= 0 ? "+" : ""}${item.change.toFixed(2)}%
        </span>
      </div>
      <div class="market-value">${Number(item.value).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
    </div>
  `).join("");
}

fetchMarketData();