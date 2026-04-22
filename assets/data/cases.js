window.PathwyzeData = window.PathwyzeData || {};

// Cases are a self-contained data source.
// Add a new case by adding a new key (e.g. case_4) with a `content` block.
window.PathwyzeData.caseData = {
  case_1: {
    order: 10,
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    coverAlt: 'Dashboard',
    content: {
      en: {
        tag: 'Real Estate Ops',
        cardTitle: 'Real Estate Email Automation',
        cardDesc: 'For an independent real estate agency in Norway.',
        title: 'How a Norwegian Real Estate Agency Cut Email Time by 85% with Pathwyze',
        sub: 'Turning a lean agency workflow into a one-click operating system.',
        challengeHtml:
          '<p>This independent real estate agent runs a lean operation in Norway — coordinating with an assistant, an interior designer, an appraiser, and a photographer. But the daily admin was eating into deal-making time.</p><ul><li><strong>1-2 hours/day on emails alone</strong> — sending templated messages to clients, buyers, sellers, partners, and the assistant, all composed and sent by hand</li><li><strong>Manual task creation</strong> — despite a clear, repeatable workflow across leads, listings, and transactions, every task had to be created manually</li><li><strong>No automation in sight</strong> — the agent knew the process could be streamlined, but lacked the technical setup to make it happen</li></ul>',
        solutionHtml:
          '<p>Pathwyze delivered a complete Notion-based operations hub.</p><p><img src="./images/hub.png" alt="Notion operations hub" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p><h4>7 Interconnected Databases</h4><p>Built a structured workspace with <strong>Leads, Listings, Transactions, Tasks, Email Management, Goals &amp; Budget, and QuickNotes</strong> — a single source of truth for the entire business.</p><h4>Automated Task Creation</h4><p>Connected Leads and Listings databases to the Task database. When a deal moves to a new stage, <strong>Notion automations instantly create the right tasks</strong> — no manual input needed.</p><h4>Smart Email System with 10+ Templates</h4><p><img src="./images/10+.png" alt="Smart email system templates" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p><h4>One-Click Sending via Make</h4><p>The agent selects a template, reviews the auto-generated content, and checks the "Sent" checkbox — <strong>Make triggers instantly and delivers the email</strong>. What used to take minutes of copying, pasting, and personalizing now takes a single click.</p><p><img src="./images/One-click.png" alt="One-click sending workflow" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p>',
      },
      'zh-cn': {
        tag: '地产运营',
        cardTitle: '地产邮件自动化系统',
        cardDesc: '挪威独立地产经纪团队实践。',
        title: '一家挪威房地产机构如何通过 Pathwyze 将邮件处理时间减少 85%',
        sub: '把精简团队的日常流程，重组为一套一键执行的运营系统。',
        challengeHtml:
          '<p>这位独立房地产经纪人在挪威运营着一套精简团队，需要同时协调助理、室内设计师、估价师和摄影师，但日常行政工作正在不断吞噬本应用于成交推进的时间。</p><ul><li><strong>每天仅邮件就要花 1-2 小时</strong> —— 发给客户、买家、卖家、合作方和助理的模板邮件，全靠手动编辑和发送</li><li><strong>任务创建完全手工进行</strong> —— 虽然线索、房源和交易流程高度重复，但每一项任务仍需要人工新建</li><li><strong>知道该自动化，却无从下手</strong> —— 经纪人清楚流程可以被优化，但缺少可落地的技术结构</li></ul>',
        solutionHtml:
          '<p>Pathwyze 交付了一套完整的 Notion 运营中枢。</p><p><img src="./images/hub.png" alt="Notion 运营中枢" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p><h4>7 个互相关联的数据库</h4><p>我们搭建了以 <strong>线索、房源、交易、任务、邮件管理、目标与预算、QuickNotes</strong> 为核心的结构化工作区，让整个业务有了统一的数据来源。</p><h4>自动创建任务</h4><p>将线索库与房源库连接到任务库后，每当交易进入新阶段，<strong>Notion 自动化会立刻创建对应任务</strong>，无需人工录入。</p><h4>10+ 模板的智能邮件系统</h4><p><img src="./images/10+.png" alt="智能邮件模板系统" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p><h4>通过 Make 一键发送</h4><p>经纪人只需要选择模板、确认自动生成的内容，然后勾选 "Sent" 复选框，<strong>Make 就会立即触发并发送邮件</strong>。过去需要复制、粘贴、修改的多步动作，现在只需一次点击。</p><p><img src="./images/One-click.png" alt="一键发送流程" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p>',
      },
      'zh-tw': {
        tag: '地產營運',
        cardTitle: '地產郵件自動化系統',
        cardDesc: '挪威獨立地產經紀團隊實踐。',
        title: '一家挪威房地產機構如何透過 Pathwyze 將郵件處理時間減少 85%',
        sub: '把精簡團隊的日常流程，重組為一套一鍵執行的營運系統。',
        challengeHtml:
          '<p>這位獨立房地產經紀人在挪威營運一套精簡團隊，需要同時協調助理、室內設計師、估價師與攝影師，但日常行政工作正在不斷吞噬本應用於成交推進的時間。</p><ul><li><strong>每天光是郵件就要花 1-2 小時</strong> —— 寄給客戶、買家、賣家、合作方與助理的模板郵件，全都靠手動編輯與發送</li><li><strong>任務建立完全手動進行</strong> —— 雖然線索、房源與交易流程高度重複，但每一項任務仍需人工新增</li><li><strong>知道該自動化，卻缺少落地方式</strong> —— 經紀人清楚流程可以被優化，但缺乏可執行的技術架構</li></ul>',
        solutionHtml:
          '<p>Pathwyze 交付了一套完整的 Notion 營運中樞。</p><p><img src="./images/hub.png" alt="Notion 營運中樞" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p><h4>7 個互相關聯的資料庫</h4><p>我們建立了以 <strong>線索、房源、交易、任務、郵件管理、目標與預算、QuickNotes</strong> 為核心的結構化工作區，讓整個業務有了統一的資料來源。</p><h4>自動建立任務</h4><p>將線索庫與房源庫連接到任務庫後，每當交易進入新階段，<strong>Notion 自動化會立即建立對應任務</strong>，無需人工輸入。</p><h4>10+ 模板的智慧郵件系統</h4><p><img src="./images/10+.png" alt="智慧郵件模板系統" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p><h4>透過 Make 一鍵寄送</h4><p>經紀人只需要選擇模板、確認自動生成的內容，然後勾選 "Sent" 核取方塊，<strong>Make 就會立即觸發並送出郵件</strong>。過去需要複製、貼上、修改的多步驟動作，現在只需一次點擊。</p><p><img src="./images/One-click.png" alt="一鍵寄送流程" class="block w-full max-w-2xl mx-auto rounded-2xl border border-slate-200 shadow-sm mt-4"></p>',
      },
    },
  },
  case_2: {
    order: 20,
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    coverAlt: 'Supply Chain',
    content: {
      en: {
        tag: 'Cross-border Trade',
        cardTitle: 'Cross-border Supply Chain System',
        cardDesc: 'For a Belgrade-based trading company managing sourcing across Serbia and China.',
        title: 'How Teambetween Trade Turned Spreadsheet Chaos into a Scalable Supply Chain Backbone',
        sub: 'From 20+ suppliers per order tracked in static files to an automated, status-driven workflow on Lark.',
        challengeHtml:
          '<p>Teambetween Trade is a Belgrade-based international trading company managing cross-border sourcing across Serbia and China. With 20+ suppliers per order and a growing client base, their spreadsheet-and-chat workflow couldn\'t keep up.</p><ul><li><strong>Spreadsheet chaos</strong> — the entire supply chain (inquiry → sourcing → quoting → warehousing → shipping → finance) was managed through Google Sheets and Excel, with no connections between processes.</li><li><strong>Cross-border communication gaps</strong> — coordination between Belgrade and China relied on WeChat and email. Messages got buried, especially during peak seasons, leading to recurring order errors.</li><li><strong>20+ suppliers per order</strong> with dynamic delivery timelines made tracking nearly impossible in static spreadsheets.</li><li><strong>Zero client visibility</strong> — clients constantly asked "where\'s my order?" because there was no self-service way to check product status, warehouse inventory, or shipment progress.</li><li><strong>Single point of failure</strong> — the founder personally managed all operations. "It\'s always based on me" — a bottleneck that made scaling impossible.</li><li><strong>VPN wall</strong> — most international collaboration tools were blocked in China. Previous software attempts all failed until they discovered Lark.</li></ul>',
        solutionHtml:
          '<p>Built a complete supply chain backbone on Lark — from inquiry to shipment — in just two weeks.</p><h4>8 Interconnected Tables</h4><p>One source of truth: <strong>Clients → Catalog → Inquiries → Quotation → Warehouse → Shipment → Shipment List → Finance</strong> — all linked with two-way relations and proper parent-child hierarchy.</p><h4>Automated Product ID System</h4><p>Each unique product — including every color and variation — receives a system-generated ID combining client code and product number. No more manual cataloging, no more "I thought I ordered pink" mistakes.</p><h4>Status-Driven Automated Workflows</h4><p>A unified status system (<strong>RFQ → Offer → Accepted → In Warehouse → Ready to Ship → Shipped</strong>) drives the entire process. When a client accepts a quotation, orders are auto-generated. When items arrive at the warehouse, inventory updates automatically. When a shipment is created, quantities are deducted.</p><h4>Smart Inquiry Forms</h4><p>Clients can submit multi-product inquiries in a single session. The system automatically creates quotation records, detects new products, and populates the catalog with unique IDs.</p>',
        beforeAfter: {
          text: 'From fragmented tools and manual coordination to a unified system.',
          rows: [
            { metric: 'Daily tools', before: 'Google Sheets + Excel + WeChat', after: '1 (Lark)' },
            { metric: 'Weekly coordination', before: '~15 hours', after: 'Under 5 hours' },
            { metric: 'Client visibility', before: 'None — constant inquiries', after: 'Real-time self-service' },
            { metric: 'Scalability', before: 'Dependent on founder', after: 'System-driven' },
          ],
        },
        effect: {
          text: 'The Big Picture: From Spreadsheet Chaos to a Scalable, Cross-Border Operations Platform',
          items: [
            { title: '70% Less Coordination Time' },
            { title: '2-3x Faster Order Processing' },
            { title: 'Order Errors → Near Zero' },
          ],
          result: {
            label: 'Operational Transformation',
            value: 'From manual chaos<br/>to system-driven',
          },
        },
      },
      'zh-cn': {
        tag: '跨境贸易',
        cardTitle: '跨境供应链系统',
        cardDesc: '为贝尔格莱德一家跨国贸易公司搭建中塞跨境采购协作体系。',
        title: 'Teambetween Trade 如何把表格混乱重组为可扩展的供应链中枢',
        sub: '从每单 20+ 供应商靠静态文件追踪，到飞书上自动化状态驱动的完整流程。',
        challengeHtml:
          '<p>Teambetween Trade 是一家位于贝尔格莱德的跨国贸易公司，负责塞尔维亚与中国之间的跨境采购。每笔订单涉及 20+ 供应商，客户群体持续增长，但原有的表格+聊天协作方式已经无法支撑。</p><ul><li><strong>表格混乱</strong> — 整个供应链（询价 → 采购 → 报价 → 入库 → 发货 → 财务）全部靠 Google Sheets 和 Excel 管理，各环节之间没有关联。</li><li><strong>跨境沟通断层</strong> — 贝尔格莱德与中国之间的协作依赖微信和邮件。旺季消息被淹没，导致反复出现订单错误。</li><li><strong>每单 20+ 供应商</strong>，交货时间动态变化，在静态表格里几乎无法追踪。</li><li><strong>客户零可见性</strong> — 客户经常问"我的货在哪里？"，没有自助方式查看产品状态、库存或运输进度。</li><li><strong>单点依赖</strong> — 创始人亲自处理所有运营。"一切都靠我" — 这是规模化的最大瓶颈。</li><li><strong>VPN 墙</strong> — 大多数国际协作工具在中国被屏蔽。之前的软件尝试全部失败，直到他们发现飞书。</li></ul>',
        solutionHtml:
          '<p>在飞书上，用两周时间搭建了从询价到发货的完整供应链中枢。</p><h4>8 个互相关联的数据表</h4><p>一个事实来源：<strong>客户 → 产品目录 → 询价 → 报价 → 仓库 → 发货 → 发货清单 → 财务</strong> — 全部通过双向关联和父子层级结构连接。</p><h4>自动化产品 ID 系统</h4><p>每个独特产品 — 包括每种颜色和规格 — 都会获得由客户代码和产品编号组合的系统生成 ID。不再需要人工编目，不再有"我以为我订的是粉色"这类错误。</p><h4>状态驱动的自动化流程</h4><p>统一的状态系统（<strong>询价 → 报价 → 已确认 → 已入库 → 待发货 → 已发货</strong>）驱动整个流程。客户确认报价后，订单自动生成；货物入库后，库存自动更新；发货单创建后，数量自动扣减。</p><h4>智能询价表单</h4><p>客户可以在一次会话中提交多产品询价。系统自动创建报价记录、识别新产品，并将新产品写入目录并分配唯一 ID。</p>',
        beforeAfter: {
          text: '从工具分散、人工协调，到统一系统驱动。',
          rows: [
            { metric: 'Daily tools', before: 'Google Sheets + Excel + 微信', after: '1 (飞书)' },
            { metric: 'Weekly coordination', before: '约15小时', after: '不到5小时' },
            { metric: 'Client visibility', before: '无 — 不断询问', after: '实时自助查询' },
            { metric: 'Scalability', before: '依赖创始人', after: '系统驱动' },
          ],
        },
        effect: {
          text: '大局观：从表格混乱到可扩展的跨境运营平台',
          items: [
            { title: '协调时间减少 70%' },
            { title: '订单处理速度提升 2-3倍' },
            { title: '订单错误 → 几乎为零' },
          ],
          result: {
            label: '运营转型',
            value: '从人工混乱<br/>到系统驱动',
          },
        },
      },
      'zh-tw': {
        tag: '跨境貿易',
        cardTitle: '跨境供應鏈系統',
        cardDesc: '為貝爾格勒一家跨國貿易公司搭建中塞跨境採購協作體系。',
        title: 'Teambetween Trade 如何把表格混亂重組為可擴展的供應鏈中樞',
        sub: '從每單 20+ 供應商靠靜態檔案追蹤，到飛書上自動化狀態驅動的完整流程。',
        challengeHtml:
          '<p>Teambetween Trade 是一家位於貝爾格勒的跨國貿易公司，負責塞爾維亞與中國之間的跨境採購。每筆訂單涉及 20+ 供應商，客戶群體持續成長，但原有的表格+聊天協作方式已經無法支撐。</p><ul><li><strong>表格混亂</strong> — 整個供應鏈（詢價 → 採購 → 報價 → 入庫 → 發貨 → 財務）全部靠 Google Sheets 和 Excel 管理，各環節之間沒有關聯。</li><li><strong>跨境溝通斷層</strong> — 貝爾格勒與中國之間的協作依賴微信和郵件。旺季訊息被淹沒，導致反覆出現訂單錯誤。</li><li><strong>每單 20+ 供應商</strong>，交貨時間動態變化，在靜態表格裡幾乎無法追蹤。</li><li><strong>客戶零可見性</strong> — 客戶經常問「我的貨在哪裡？」，沒有自助方式查看產品狀態、庫存或運輸進度。</li><li><strong>單點依賴</strong> — 創始人親自處理所有營運。「一切都靠我」 — 這是規模化的最大瓶頸。</li><li><strong>VPN 牆</strong> — 大多數國際協作工具在中國被遮蔽。之前的軟體嘗試全部失敗，直到他們發現飛書。</li></ul>',
        solutionHtml:
          '<p>在飛書上，用兩週時間搭建了從詢價到發貨的完整供應鏈中樞。</p><h4>8 個互相關聯的資料表</h4><p>一個事實來源：<strong>客戶 → 產品目錄 → 詢價 → 報價 → 倉庫 → 發貨 → 發貨清單 → 財務</strong> — 全部透過雙向關聯和父子層級結構連接。</p><h4>自動化產品 ID 系統</h4><p>每個獨特產品 — 包括每種顏色和規格 — 都會獲得由客戶代碼和產品編號組合的系統生成 ID。不再需要人工編目，不再有「我以為我訂的是粉色」這類錯誤。</p><h4>狀態驅動的自動化流程</h4><p>統一的狀態系統（<strong>詢價 → 報價 → 已確認 → 已入庫 → 待發貨 → 已發貨</strong>）驅動整個流程。客戶確認報價後，訂單自動生成；貨物入庫後，庫存自動更新；發貨單建立後，數量自動扣減。</p><h4>智慧詢價表單</h4><p>客戶可以在一次會話中提交多產品詢價。系統自動建立報價記錄、識別新產品，並將新產品寫入目錄並分配唯一 ID。</p>',
        beforeAfter: {
          text: '從工具分散、人工協調，到統一系統驅動。',
          rows: [
            { metric: 'Daily tools', before: 'Google Sheets + Excel + WeChat', after: '1 (飛書)' },
            { metric: 'Weekly coordination', before: '約15小時', after: '不到5小時' },
            { metric: 'Client visibility', before: '無 — 不斷詢問', after: '即時自助查詢' },
            { metric: 'Scalability', before: '依賴創始人', after: '系統驅動' },
          ],
        },
      },
    },
  },
  case_3: {
    order: 30,
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    coverAlt: 'Property Operations',
    content: {
      en: {
        tag: 'Property Management',
        cardTitle: 'Airbnb Operations Hub',
        cardDesc: 'Unified operations for 100+ rental properties across Japan.',
        title: 'How a Japan-Based Airbnb Management Company Unified 100+ Property Operations with Pathwyze',
        sub: 'From fragmented department workflows and mail-based billing chaos to a centralized Notion workspace.',
        challengeHtml:
          '<p>A fast-growing Airbnb management company in Japan was struggling to coordinate five departments across 100+ rental properties — from guest check-ins and housekeeping to utility payments sent via physical mail.</p><ul><li><strong>Fragmented department workflows</strong> — Customer Service, Maintenance, Housekeeping, Design &amp; Renovation, and Operations each ran their own disconnected processes with no shared visibility.</li><li><strong>Japan\'s mail-based billing system</strong> — Utility bills (electricity, water, internet) arrive as physical letters, each from different providers with different billing cycles. Staff had to manually confirm receipt, verify deadlines, cross-check past records, and pay in person — an extremely labor-intensive process.</li><li><strong>Payment history vanished over time</strong> — Even after manual verification, records would be forgotten within months, leading to repeated audits and missed payments.</li><li><strong>No centralized property view</strong> — No single source of truth for check-in status, booking progress, supply levels, or maintenance needs across 100+ units.</li><li><strong>Inefficient housekeeping coordination</strong> — Cleaning staff had no clear daily task list; CS had to manually notify and follow up with them.</li><li><strong>Scattered design &amp; renovation data</strong> — Reference materials, supplier info, and warehouse inventory for new property development were spread everywhere.</li></ul>',
        solutionHtml:
          '<p>Pathwyze built a comprehensive, department-segmented Notion workspace centered around a per-property management model. Every property became a living hub where all operational data converged.</p><h4>Department-Based Architecture</h4><p>Designed a modular workspace structure divided by function — Customer Service, Maintenance &amp; Housekeeping, Design &amp; Renovation, and Operations — with cross-department dashboards for unified oversight.</p><h4>Customer Service Hub</h4><p>Integrated booking data from multiple platforms into Notion via external APIs. Built real-time views showing each property\'s occupancy history and upcoming reservations. Automated notifications alert housekeeping and maintenance teams the moment a guest checks out.</p><h4>Housekeeping &amp; Maintenance System</h4><p>Created a centralized cleaning roster — housekeeping staff now check a single Notion page each morning to see exactly which properties need attention. Maintenance tasks are tracked per-property with scheduled reminders for recurring items like pest control. A real-time supply tracker monitors amenity consumption across all units.</p><h4>Automated Utility &amp; Billing Management</h4><p>The standout feature. Built a comprehensive system that records each property\'s utility providers, billing cycles, last payment dates, and next due dates — all auto-calculated with Notion-native automations. This replaced the entirely manual process of tracking physical mail, verifying receipt, checking payment history, and remembering deadlines months later. The system now serves as a permanent, searchable record of all billing history.</p><h4>Design &amp; Renovation Hub</h4><p>Centralized design references, mood boards, and renovation style guides for new property development. Unified material inventory and warehouse management for decoration supplies.</p><h4>Operations Command Center</h4><p>Built as the central coordination layer, connecting all departments. Multi-dimensional dashboards provide real-time visibility across the entire property portfolio.</p>',
        beforeAfter: {
          text: 'From fragmented workflows and manual coordination to a unified Notion workspace.',
          rows: [
            { metric: 'Property management', before: 'Fragmented across tools & spreadsheets', after: 'Unified Notion workspace per property' },
            { metric: 'Utility bill tracking', before: 'Manual mail tracking, ~12 hrs/week', after: 'Automated reminders, ~3 hrs/week' },
            { metric: 'Payment history', before: 'Forgotten after months, frequent re-audits', after: 'Permanent searchable records' },
            { metric: 'Housekeeping dispatch', before: 'Manual notifications, ~40 min/day', after: 'Self-serve daily page, ~10 min/day' },
            { metric: 'Cross-department visibility', before: 'No single source of truth', after: 'Real-time dashboards for all 5 departments' },
            { metric: 'New staff onboarding', before: '~1 week of shadowing', after: '~2 days with self-serve workspace' },
          ],
        },
        effect: {
          text: 'From departmental chaos to a unified operations platform.',
          items: [
            { title: '75% Less Time on Billing' },
            { title: '4x Faster Housekeeping Dispatch' },
            { title: '5 Departments, 1 Workspace' },
            { title: '100+ Properties Under Control' },
          ],
          result: {
            label: 'Operational Efficiency',
            value: 'Unified visibility<br/>across all properties',
          },
        },
      },
      'zh-cn': {
        tag: '房产运营',
        cardTitle: 'Airbnb 运营中枢',
        cardDesc: '统一管理日本 100+ 民宿房产的运营体系。',
        title: '一家日本 Airbnb 管理公司如何通过 Pathwyze 统一 100+ 房产运营',
        sub: '从部门流程割裂、邮件账单混乱，到集中化 Notion 工作区。',
        challengeHtml:
          '<p>一家快速成长的日本 Airbnb 管理公司，需要协调五个部门、100+ 民宿房产 —— 从客人入住、保洁到水电账单支付，全部依赖人工协调。</p><ul><li><strong>部门流程割裂</strong> — 客服、维护、保洁、设计装修、运营各自为政，没有共享可见性。</li><li><strong>日本邮件账单体系</strong> — 水电气账单以实体信件形式寄送，每个供应商账单周期不同。员工需要人工确认是否收到、核实截止日期、交叉核对历史记录，然后去现场缴费 —— 极其耗时。</li><li><strong>付款记录随时间消失</strong> — 即使人工核实过，几个月后记录也会被遗忘，导致反复审计和漏缴。</li><li><strong>没有统一房产视图</strong> — 没有 100+ 房产入住状态、预订进度、物资库存、维护需求的单一事实来源。</li><li><strong>保洁协调低效</strong> — 保洁人员没有清晰的每日任务清单；客服需要手动通知并跟进。</li><li><strong>设计装修数据分散</strong> — 新房产开发的参考资料、供应商信息、仓库库存散落各处。</li></ul>',
        solutionHtml:
          '<p>Pathwyze 搭建了一个以房产为单元、部门分区的 Notion 工作区。每套房产成为一个动态中枢，所有运营数据在此汇聚。</p><h4>部门化架构</h4><p>按职能设计模块化工作区结构 —— 客服、维护与保洁、设计装修、运营 —— 并通过跨部门仪表盘实现统一监管。</p><h4>客服中枢</h4><p>通过外部 API 将多平台预订数据集成到 Notion。实时展示每套房产的入住历史和即将到来的预订。客人退房时自动触发通知，提醒保洁和维护团队。</p><h4>保洁与维护系统</h4><p>建立集中化保洁排班 —— 保洁人员每天早上只需查看一个 Notion 页面，就能清楚知道当天需要处理哪些房产。维护任务按房产追踪，并为周期性事项（如除虫）设置提醒。实时物资追踪器监控所有房产的消耗品使用情况，确保及时补货。</p><h4>自动化账单与缴费管理</h4><p>这是最突出的功能。建立了一个完整系统，记录每套房产的水电气供应商、账单周期、上次付款日期和下次截止日期 —— 全部通过 Notion 原生自动计算。这完全替代了追踪实体邮件、核实收件、检查付款历史、几个月后还要记住截止日期的人工流程。系统现在成为所有账单历史的永久可搜索记录。</p><h4>设计装修中枢</h4><p>集中化设计参考、情绪板和装修风格指南。统一装修物资的仓库管理。</p><h4>运营指挥中心</h4><p>作为中央协调层，连接所有部门。多维仪表盘提供整个资产组合的实时可见性。使用 Notion 原生图表进行数据可视化，让管理层即时获取运营洞察。</p><h4>系统重构与 UX 优化</h4><p>将客户原先杂乱的工作区重组为清晰的模块化分区。根据实际运营需求添加定制模块。简化导航和工作流逻辑，让系统即使对非技术的一线员工也足够直观。</p>',
        beforeAfter: {
          text: '从流程分散、人工协调，到统一 Notion 工作区。',
          rows: [
            { metric: 'Property management', before: '分散在工具和表格里', after: '每套房产统一 Notion 工作区' },
            { metric: 'Utility bill tracking', before: '人工追踪邮件，约12小时/周', after: '自动提醒，约3小时/周' },
            { metric: 'Payment history', before: '几个月后遗忘，频繁重新审计', after: '永久可搜索记录' },
            { metric: 'Housekeeping dispatch', before: '人工通知，约40分钟/天', after: '自助每日页面，约10分钟/天' },
            { metric: 'Cross-department visibility', before: '没有单一事实来源', after: '5个部门实时仪表盘' },
            { metric: 'New staff onboarding', before: '约1周跟随学习', after: '约2天自助工作区上手' },
          ],
        },
      },
      'zh-tw': {
        tag: '房產營運',
        cardTitle: 'Airbnb 營運中樞',
        cardDesc: '統一管理日本 100+ 民宿房產的營運體系。',
        title: '一家日本 Airbnb 管理公司如何透過 Pathwyze 統一 100+ 房產營運',
        sub: '從部門流程割裂、郵件帳單混亂，到集中化 Notion 工作區。',
        challengeHtml:
          '<p>一家快速成長的日本 Airbnb 管理公司，需要協調五個部門、100+ 民宿房產 —— 從客人入住、保潔到水電帳單支付，全部依賴人工協調。</p><ul><li><strong>部門流程割裂</strong> — 客服、維護、保潔、設計裝修、營運各自為政，沒有共享可見性。</li><li><strong>日本郵件帳單體系</strong> — 水電氣帳單以實體信件形式寄送，每個供應商帳單週期不同。員工需要人工確認是否收到、核實截止日期、交叉核對歷史記錄，然後去現場繳費 —— 極其耗時。</li><li><strong>付款記錄隨時間消失</strong> — 即使人工核實過，幾個月後記錄也會被遺忘，導致反覆審計和漏繳。</li><li><strong>沒有統一房產視圖</strong> — 沒有 100+ 房產入住狀態、預訂進度、物資庫存、維護需求的單一事實來源。</li><li><strong>保潔協調低效</strong> — 保潔人員沒有清晰的每日任務清單；客服需要手動通知並跟進。</li><li><strong>設計裝修數據分散</strong> — 新房產開發的參考資料、供應商資訊、倉庫庫存散落各處。</li></ul>',
        solutionHtml:
          '<p>Pathwyze 搭建了一個以房產為單元、部門分區的 Notion 工作區。每套房產成為一個動態中樞，所有營運數據在此匯聚。</p><h4>部門化架構</h4><p>按職能設計模組化工作區結構 —— 客服、維護與保潔、設計裝修、營運 —— 並透過跨部門儀表板實現統一監管。</p><h4>客服中樞</h4><p>透過外部 API 將多平台預訂數據整合到 Notion。即時展示每套房產的入住歷史和即將到來的預訂。客人退房時自動觸發通知，提醒保潔和維護團隊。</p><h4>保潔與維護系統</h4><p>建立集中化保潔排班 —— 保潔人員每天早上只需查看一個 Notion 頁面，就能清楚知道當天需要處理哪些房產。維護任務按房產追蹤，並為週期性事項（如除蟲）設置提醒。即時物資追蹤器監控所有房產的消耗品使用情況，確保及時補貨。</p><h4>自動化帳單與繳費管理</h4><p>這是最突出的功能。建立了一個完整系統，記錄每套房產的水電氣供應商、帳單週期、上次付款日期和下次截止日期 —— 全部透過 Notion 原生自動計算。這完全替代了追蹤實體郵件、核實收件、檢查付款歷史、幾個月後還要記住截止日期的人工流程。系統現在成為所有帳單歷史的永久可搜尋記錄。</p><h4>設計裝修中樞</h4><p>集中化設計參考、情緒板和裝修風格指南。統一裝修物資的倉庫管理。</p><h4>營運指揮中心</h4><p>作為中央協調層，連接所有部門。多維儀表板提供整個資產組合的即時可見性。使用 Notion 原生圖表進行數據視覺化，讓管理層即時獲取營運洞察。</p><h4>系統重構與 UX 優化</h4><p>將客戶原先雜亂的工作區重組為清晰的模組化分區。根據實際營運需求添加定制模組。簡化導航和工作流邏輯，讓系統即使對非技術的一線員工也足夠直觀。</p>',
        beforeAfter: {
          text: '從流程分散、人工協調，到統一 Notion 工作區。',
          rows: [
            { metric: 'Property management', before: '分散在工具和表格裡', after: '每套房產統一 Notion 工作區' },
            { metric: 'Utility bill tracking', before: '人工追蹤郵件，約12小時/週', after: '自動提醒，約3小時/週' },
            { metric: 'Payment history', before: '幾個月後遺忘，頻繁重新審計', after: '永久可搜尋記錄' },
            { metric: 'Housekeeping dispatch', before: '人工通知，約40分鐘/天', after: '自助每日頁面，約10分鐘/天' },
            { metric: 'Cross-department visibility', before: '沒有單一事實來源', after: '5個部門即時儀表板' },
            { metric: 'New staff onboarding', before: '約1週跟隨學習', after: '約2天自助工作區上手' },
          ],
        },
      },
    },
  },
  case_4: {
    order: 40,
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    coverAlt: 'Product Launch Planning Dashboard',
    content: {
      en: {
        tag: 'E-commerce',
        cardTitle: 'Product Launch Calendar System',
        cardDesc: 'Scaled launch planning for a Singapore-based apparel brand with 2,300+ SKUs.',
        title: 'How a Singapore E-commerce Company Scaled Product Launch Planning with Pathwyze',
        sub: 'From fragmented tracking and heavy manual coordination to an integrated Lark Base system connecting product workflows with marketing execution.',
        challengeHtml:
          '<p>The client is a fast-growing Singapore-based online apparel brand with 2,300+ SKUs across men\'s, women\'s, and kids\' categories. As the business scaled, their patchwork of tools couldn\'t keep up.</p><ul><li><strong>Launch planning at scale</strong> — no single calendar to plan quarterly releases and align everyone on what ships and when.</li><li><strong>Fragmented tracking</strong> — product development progress, styles/categories, and deadlines were spread across files and chats.</li><li><strong>Heavy manual coordination</strong> — constant follow-ups to chase owners, update status, and keep timelines accurate.</li><li><strong>Marketing execution not connected to product plans</strong> — social content planning and keyword testing weren\'t systematically linked to each launch.</li></ul><p>The client knew Lark could be the answer — but they needed a structured system that connects product workflows with marketing execution. That\'s when they found <strong>Pathwyze</strong>.</p>',
        solutionHtml:
          '<p>Pathwyze built an integrated Product Launch Calendar & Planner in Lark Base that connects product development and marketing execution — giving the team one place to plan, track, and iterate.</p><h4>Product Launch Calendar & Planner</h4><p>A product development workflow table covering the <strong>full lifecycle of a new product</strong> — from initial idea to launch and selling:</p><ul><li>Plan <strong>annual + quarterly</strong> product pipelines for high-volume seasonal launches</li><li>Track <strong>styles, categories, owners, and key deadlines</strong> in one timeline</li><li>Reduce spreadsheet fragmentation and manual follow-ups with a centralized, searchable system</li></ul><h4>Social Content Calendar (Built-in)</h4><p>A built-in content plan linked to each launch:</p><ul><li>Draft social posts for each new product and manage distribution across video platforms</li><li>Test keywords and review performance</li><li>Rotate keywords and experiment with different video formats on a regular cadence</li></ul><h4>Creative Angle & Rotation Databases</h4><p>A <strong>Creative Angle Database</strong> + <strong>Creative Rotation Database</strong> to recommend fresh marketing angles, helping the marketing team update direction faster as trends shift.</p><h4>External Platform Data Integration</h4><p>To support more data-driven decisions, we integrated external platform data into the same Lark Base system (e.g., sales/ad monitoring platforms):</p><ul><li>Sync external signals into Lark as structured records</li><li>Enable cross-analysis across launches, content, keywords, and performance</li><li>Provide a foundation for dashboards and deeper operational analytics</li></ul>',
        beforeAfter: {
          text: 'From scattered planning tools to an integrated Lark Base system.',
          rows: [
            { metric: 'Launch planning', before: 'Quarterly launches planned across scattered sheets + chats', after: 'Unified launch calendar' },
            { metric: 'Progress tracking', before: 'Owners and deadlines hard to track; frequent manual follow-ups', after: 'Lifecycle tracker with owners & deadlines' },
            { metric: 'Content planning', before: 'Content calendar and keyword tests managed separately', after: 'Linked content calendar with keyword tests' },
            { metric: 'Data for analysis', before: 'External platform data hard to consolidate for analysis', after: 'External data synced for dashboards' },
            { metric: 'Creative iteration', before: 'Angles refreshed ad-hoc; hard to build a repeatable cadence', after: 'Creative Angle + Rotation databases' },
          ],
        },
        effect: {
          text: 'From scattered planning to integrated execution.',
          items: [
            { title: 'Quarterly Launch Planning, All-in-One' },
            { title: 'Clear Ownership & Deadlines' },
            { title: 'Content Calendar Built-in' },
            { title: 'External Data in One Place' },
          ],
          result: {
            label: 'Launch Efficiency',
            value: 'Faster time-to-market<br/>with full visibility',
          },
        },
      },
      'zh-cn': {
        tag: '电商运营',
        cardTitle: '新品发布日历系统',
        cardDesc: '为新加坡服装品牌搭建 2,300+ SKU 的新品发布规划体系。',
        title: '一家新加坡电商公司如何通过 Pathwyze 实现新品发布规划的规模化',
        sub: '从追踪分散、人工协调繁重，到飞书多维表格上整合产品与营销执行的完整体系。',
        challengeHtml:
          '<p>客户是一家快速成长的新加坡线上服装品牌，涵盖男装、女装和童装 2,300+ SKU。随着业务扩张，原有的工具拼凑已经无法支撑。</p><ul><li><strong>规模化发布规划</strong> — 没有统一日历来规划季度上新，团队难以对齐发货时间和内容。</li><li><strong>追踪分散</strong> — 产品开发进度、款式/品类、截止日期散落在各种文件和聊天记录中。</li><li><strong>人工协调负担重</strong> — 需要不断跟进负责人、更新状态、核对时间线。</li><li><strong>营销执行与产品规划脱节</strong> — 社交内容规划和关键词测试没有系统性地与每次上新关联。</li></ul><p>客户知道飞书可能是答案 —— 但需要一套能将产品流程与营销执行打通的结构化系统。于是找到了 <strong>Pathwyze</strong>。</p>',
        solutionHtml:
          '<p>Pathwyze 在飞书多维表格中搭建了整合的"新品发布日历与规划器"，打通产品开发与营销执行 —— 让团队在一个地方完成规划、追踪和迭代。</p><h4>新品发布日历与规划器</h4><p>一个覆盖<strong>新品完整生命周期</strong>的产品开发流程表 —— 从创意到上架销售：</p><ul><li>规划<strong>年度 + 季度</strong>产品管线，支撑高频季节性上新</li><li>在统一时间线上追踪<strong>款式、品类、负责人和关键截止日期</strong></li><li>用集中化、可搜索的系统减少表格碎片化，降低人工跟进成本</li></ul><h4>社交内容日历（内置）</h4><p>与每次上新关联的内置内容规划：</p><ul><li>为每款新品草拟社交帖，管理多视频平台的分发</li><li>测试关键词并查看表现</li><li>定期轮换关键词，尝试不同视频形式</li></ul><h4>创意角度与轮换数据库</h4><p><strong>创意角度数据库</strong> + <strong>创意轮换数据库</strong>，推荐新鲜的营销角度，帮助营销团队更快响应趋势变化。</p><h4>外部平台数据集成</h4><p>为支撑更数据驱动的决策，我们将外部平台数据集成到同一飞书多维表格系统中（如销售/广告监控平台）：</p><ul><li>将外部信号同步为飞书结构化记录</li><li>支持跨上新、内容、关键词、表现的综合分析</li><li>为仪表盘和更深入的运营分析奠定基础</li></ul>',
      },
      'zh-tw': {
        tag: '電商營運',
        cardTitle: '新品發布日曆系統',
        cardDesc: '為新加坡服裝品牌搭建 2,300+ SKU 的新品發布規劃體系。',
        title: '一家新加坡電商公司如何透過 Pathwyze 實現新品發布規劃的規模化',
        sub: '從追蹤分散、人工協調繁重，到飛書多維表格上整合產品與營銷執行的完整體系。',
        challengeHtml:
          '<p>客戶是一家快速成長的新加坡線上服裝品牌，涵蓋男裝、女裝和童裝 2,300+ SKU。隨著業務擴張，原有的工具拼湊已經無法支撐。</p><ul><li><strong>規模化發布規劃</strong> — 沒有統一日曆來規劃季度上新，團隊難以對齊發貨時間和內容。</li><li><strong>追蹤分散</strong> — 產品開發進度、款式/品類、截止日期散落在各種檔案和聊天記錄中。</li><li><strong>人工協調負擔重</strong> — 需要不斷跟進負責人、更新狀態、核對時間線。</li><li><strong>營銷執行與產品規劃脫節</strong> — 社交內容規劃和關鍵字測試沒有系統性地與每次上新關聯。</li></ul><p>客戶知道飛書可能是答案 —— 但需要一套能將產品流程與營銷執行打通的結構化系統。於是找到了 <strong>Pathwyze</strong>。</p>',
        solutionHtml:
          '<p>Pathwyze 在飛書多維表格中搭建了整合的「新品發布日曆與規劃器」，打通產品開發與營銷執行 —— 讓團隊在一個地方完成規劃、追蹤和迭代。</p><h4>新品發布日曆與規劃器</h4><p>一個覆蓋<strong>新品完整生命週期</strong>的產品開發流程表 —— 從創意到上架銷售：</p><ul><li>規劃<strong>年度 + 季度</strong>產品管線，支撐高頻季節性上新</li><li>在統一時間線上追蹤<strong>款式、品類、負責人和關鍵截止日期</strong></li><li>用集中化、可搜尋的系統減少表格碎片化，降低人工跟進成本</li></ul><h4>社交內容日曆（內建）</h4><p>與每次上新關聯的內建內容規劃：</p><ul><li>為每款新品草擬社交帖，管理多影片平台的分發</li><li>測試關鍵字並查看表現</li><li>定期輪換關鍵字，嘗試不同影片形式</li></ul><h4>創意角度與輪換資料庫</h4><p><strong>創意角度資料庫</strong> + <strong>創意輪換資料庫</strong>，推薦新鮮的營銷角度，幫助營銷團隊更快響應趨勢變化。</p><h4>外部平台資料整合</h4><p>為支撐更資料驅動的決策，我們將外部平台資料整合到同一飛書多維表格系統中（如銷售/廣告監控平台）：</p><ul><li>將外部訊號同步為飛書結構化記錄</li><li>支援跨上新、內容、關鍵字、表現的綜合分析</li><li>為儀表板和更深入的營運分析奠定基礎</li></ul>',
      },
    },
  },
  case_5: {
    order: 50,
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    coverAlt: 'Media Production',
    content: {
      en: {
        tag: 'Media Production',
        cardTitle: 'Video Production Management System',
        cardDesc: 'Managing 1,200 projects with a team under 20 for a Chinese tech review studio.',
        title: 'How a Tech Review Studio with Under 20 People Manages 1,200 Projects with Pathwyze',
        sub: 'From manual tracking and fragmented workflows to a fully automated production management system on Lark.',
        challengeHtml:
          '<p>A leading Chinese tech product review studio — with a lean team of under 20 managing nearly 30 accounts, 10M followers across platforms, and a portfolio of nearly 1,200 projects — was struggling to keep 80–100 concurrent video productions on track. Manual tracking, fragmented workflows, and zero inventory oversight meant their small but fast-growing team was drowning in operational overhead.</p><ul><li><strong>Extreme scale-to-team ratio</strong> — A fast-growing team of under 20 was expected to manage 80–100 concurrent projects from a portfolio of nearly 1,200, making manual processes completely unsustainable.</li><li><strong>Manual project tracking</strong> — The team relied on human "project managers" to manually monitor every stage, chase updates, and push approvals across dozens of productions.</li><li><strong>Fragmented task assignment</strong> — Breaking down projects into individual tasks for different team members was a tedious, error-prone manual process.</li><li><strong>No automated notifications</strong> — Handoffs between production stages required constant manual reminders and follow-ups.</li><li><strong>Time-consuming data collection</strong> — Platform performance data for every video had to be manually checked and recorded daily — 5 minutes per video × 80–100 concurrent videos.</li><li><strong>Zero inventory management</strong> — Review samples from manufacturers had no tracking system, leading to lost items and unclear accountability.</li></ul>',
        solutionHtml:
          '<p>Pathwyze conducted a deep-dive discovery into the studio\'s production pipeline and built a comprehensive automation system on Lark Multidimensional Tables.</p><h4>Automated Data Integration</h4><p>Connected multiple data tables so that when a new project enters the system, it automatically splits into production tasks based on team assignments, roles, and video requirements. With nearly 1,200 projects in the portfolio, this automation was essential for maintaining order at scale.</p><h4>Review Logic Optimization</h4><p>Designed a fully customized review system to handle the studio\'s reality: multiple project types, multiple teams, and multiple approval paths — where each combination can trigger a different set of review rules. The system supports 8 distinct review logic flows, yet keeps everyone working in one unified platform by automatically routing each project to the correct logic based on its type and context.</p><h4>Fully Automated Workflow Transitions</h4><p>Replaced the old model of manual monitoring and chasing. The system now automatically pushes data to the next stage based on upstream/downstream relationships and sends targeted notifications to the responsible person.</p><h4>Automated Platform Data Collection</h4><p>After video publication, the system automatically scrapes performance metrics from all distribution platforms and syncs them to the master table. It also auto-generates reminder tasks for operations staff to perform content maintenance.</p><h4>Review Sample Inventory Management</h4><p>Built a complete inventory tracking system from scratch — deeply linked to project records — covering the full lifecycle: logistics intake, stock status, internal team usage, and final disposition including outsourced team tracking.</p><h4>Short-Video Distribution Support</h4><p>Enhanced the original production workflow with new features specifically designed for short-video editing and distribution across major platforms.</p>',
        effect: {
          text: 'From manual chaos to fully automated production.',
          items: [
            { title: '75% Less Time on Project Management' },
            { title: '90% Reduction in Manual Task Breakdown' },
            { title: '8+ Hours Saved Daily on Data Sync' },
            { title: 'Inventory: From Zero to Full Lifecycle' },
          ],
          result: {
            label: 'Production Efficiency',
            value: 'Scale without adding headcount',
          },
        },
        beforeAfter: {
          text: 'From manual chaos to a fully automated production system.',
          rows: [
            { metric: 'Project tracking', before: 'Manual monitoring by ops staff', after: 'Fully automated stage transitions with notifications' },
            { metric: 'Task breakdown', before: 'Manual splitting & assignment', after: 'Auto-generated tasks based on team & role' },
            { metric: 'Daily data sync', before: '4–8+ hours/day (5 min × 50–100 videos)', after: 'Near zero — fully automated collection' },
            { metric: 'Inventory management', before: 'No system — items frequently untracked', after: 'Full lifecycle tracking from intake to disposition' },
            { metric: 'Review & approval', before: 'Inconsistent across teams', after: 'Standardized automated review flows' },
            { metric: 'Content repurposing', before: 'Not optimized for short-video platforms', after: 'Dedicated short-video distribution workflow' },
          ],
        },
      },
      'zh-cn': {
        tag: '媒体制作',
        cardTitle: '视频制作管理系统',
        cardDesc: '不到20人团队管理1200个项目的中国科技评测工作室。',
        title: '一家不到20人的科技评测工作室如何通过 Pathwyze 管理1,200个项目',
        sub: '从人工追踪、流程碎片化，到飞书上全自动化的生产管理系统。',
        challengeHtml:
          '<p>这是一家头部科技产品评测工作室 —— 不到20人的精简团队，管理着近30个账号、全平台1000万粉丝、近1,200个项目。同时推进80–100个视频制作，人工追踪、流程分散、样品零管理，让这支小而快的团队深陷运营负担。</p><ul><li><strong>极端的人均负载</strong> —— 不到20人的团队要同时管理近1,200个项目中的80–100个，人工流程完全不可持续。</li><li><strong>人工项目追踪</strong> —— 团队依赖"项目经理"人工监控每个环节、催进度、推审批，横跨数十个制作项目。</li><li><strong>任务拆解分散</strong> —— 把项目拆成不同成员的任务，是一个繁琐且易错的人工过程。</li><li><strong>没有自动通知</strong> —— 各环节之间的交接完全靠人工提醒和跟进。</li><li><strong>数据收集耗时</strong> —— 每个视频的平台表现数据需要每天人工查看并记录 —— 每条视频5分钟 × 80–100条并发视频。</li><li><strong>样品零管理</strong> —— 厂商送来的评测样机没有追踪系统，经常丢失、责任不清。</li></ul>',
        solutionHtml:
          '<p>Pathwyze 深入梳理了工作室的生产流程，在飞书多维表格上搭建了完整的自动化系统。</p><h4>自动化数据联动</h4><p>打通多张数据表，新项目进入系统后，自动按团队分工、角色、视频需求拆解成生产任务。近1,200个项目在库，这套自动化是规模化管理的基石。</p><h4>评审逻辑优化</h4><p>设计了完全定制的评审系统，适配工作室的现实：多项目类型、多团队、多审批路径 —— 每种组合触发不同的评审规则。系统支持8条独立评审逻辑流，却让所有人都在统一平台上协作，系统根据项目类型和上下文自动路由到正确的逻辑。</p><h4>全自动化流程流转</h4><p>彻底取代人工监控和催办模式。系统根据上下游关系自动把数据推进到下一阶段，并向负责人发送精准通知。</p><h4>自动化平台数据采集</h4><p>视频发布后，系统自动抓取所有分发平台的播放数据，同步到主表。同时自动生成提醒任务，通知运营人员做内容维护。</p><h4>评测样品库存管理</h4><p>从零搭建了完整的样品追踪系统 —— 与项目记录深度关联 —— 覆盖全生命周期：物流入库、库存状态、内部团队领用、最终去向，包括外包团队的追踪。</p><h4>短视频分发支持</h4><p>在原有生产流程基础上，新增专门针对短视频剪辑和多平台分发的功能模块。</p>',
        beforeAfter: {
          text: '从人工混乱到全自动生产系统。',
          rows: [
            { metric: '项目追踪', before: '运营人工监控', after: '全自动阶段流转与通知' },
            { metric: '任务拆解', before: '人工拆分与分配', after: '基于团队和角色自动生成任务' },
            { metric: '每日数据同步', before: '4–8+ 小时/天（5 分钟 × 50–100 个视频）', after: '近乎为零 —— 全自动采集' },
            { metric: '库存管理', before: '无系统 —— 物品经常无法追踪', after: '从入库到处置的全生命周期追踪' },
            { metric: '审核与审批', before: '团队间不一致', after: '标准化自动化审核流程' },
            { metric: '内容再利用', before: '未针对短视频平台优化', after: '专用短视频分发工作流' },
          ],
        },
      },
      'zh-tw': {
        tag: '媒體製作',
        cardTitle: '影片製作管理系統',
        cardDesc: '不到20人團隊管理1200個項目的中國科技評測工作室。',
        title: '一家不到20人的科技評測工作室如何透過 Pathwyze 管理1,200個項目',
        sub: '從人工追蹤、流程碎片化，到飛書上全自動化的生產管理系統。',
        challengeHtml:
          '<p>這是一家頭部科技產品評測工作室 —— 不到20人的精簡團隊，管理著近30個帳號、全平台1000萬粉絲、近1,200個項目。同時推進80–100個影片製作，人工追蹤、流程分散、樣品零管理，讓這支小而快的團隊深陷營運負擔。</p><ul><li><strong>極端的人均負載</strong> —— 不到20人的團隊要同時管理近1,200個項目中的80–100個，人工流程完全不可持續。</li><li><strong>人工項目追蹤</strong> —— 團隊依賴「專案經理」人工監控每個環節、催進度、推審批，橫跨數十個製作項目。</li><li><strong>任務拆解分散</strong> —— 把項目拆成不同成員的任務，是一個繁瑣且易錯的人工過程。</li><li><strong>沒有自動通知</strong> —— 各環節之間的交接完全靠人工提醒和跟進。</li><li><strong>資料收集耗時</strong> —— 每個影片的平台表現資料需要每天人工查看並記錄 —— 每條影片5分鐘 × 80–100條並發影片。</li><li><strong>樣品零管理</strong> —— 廠商送來的評測樣機沒有追蹤系統，經常遺失、責任不清。</li></ul>',
        solutionHtml:
          '<p>Pathwyze 深入梳理了工作室的生產流程，在飛書多維表格上搭建了完整的自動化系統。</p><h4>自動化資料聯動</h4><p>打通多張資料表，新項目進入系統後，自動按團隊分工、角色、影片需求拆解成生產任務。近1,200個項目在庫，這套自動化是規模化管理的基石。</p><h4>評審邏輯優化</h4><p>設計了完全定制的評審系統，適配工作室的現實：多項目類型、多團隊、多審批路徑 —— 每種組合觸發不同的評審規則。系統支援8條獨立評審邏輯流，卻讓所有人都在統一平台上協作，系統根據項目類型和上下文自動路由到正確的邏輯。</p><h4>全自動化流程流轉</h4><p>徹底取代人工監控和催辦模式。系統根據上下游關係自動把資料推進到下一階段，並向負責人發送精準通知。</p><h4>自動化平台資料採集</h4><p>影片發布後，系統自動抓取所有分發平台的播放資料，同步到主表。同時自動生成提醒任務，通知營運人員做內容維護。</p><h4>評測樣品庫存管理</h4><p>從零搭建了完整的樣品追蹤系統 —— 與項目記錄深度關聯 —— 覆蓋全生命週期：物流入庫、庫存狀態、內部團隊領用、最終去向，包括外包團隊的追蹤。</p><h4>短影片分發支援</h4><p>在原有生產流程基礎上，新增專門針對短影片剪輯和多平台分發的功能模組。</p>',
      },
    },
  },
};
