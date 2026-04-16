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
    coverAlt: 'CRM',
    content: {
      en: {
        tag: 'CRM Hub',
        cardTitle: 'CRM Pipeline',
        cardDesc: 'Automated sales tracking for cross-border e-commerce.',
        title: 'Global CRM Pipeline',
        sub: 'Connecting cross-border sales teams in real-time.',
        challengeHtml:
          '<p>Sales leads from 5 different regions were manually entered into spreadsheets. The conversion data was opaque, and lead follow-ups were inconsistent.</p>',
        solutionHtml:
          '<p>Implemented a multi-regional CRM on Lark with automated lead capturing and a management dashboard for the CEO.</p>',
      },
      'zh-cn': {
        tag: 'CRM 中枢',
        cardTitle: 'CRM 客户关系系统',
        cardDesc: '跨境电商销售追踪全自动化。',
        title: '全球 CRM 流水线',
        sub: '让跨区域销售团队实时协同。',
        challengeHtml:
          '<p>来自 5 个地区的线索需要人工录入表格，转化数据不透明，跟进节奏不一致，导致漏跟与错失机会。</p>',
        solutionHtml:
          '<p>在飞书 / Lark 搭建多区域 CRM，接入自动化线索收集，并为管理层建立一屏式数据看板，统一跟进流程。</p>',
      },
      'zh-tw': {
        tag: 'CRM 中樞',
        cardTitle: 'CRM 客戶關係系統',
        cardDesc: '跨境電商銷售追蹤全自動化。',
        title: '全球 CRM 流水線',
        sub: '讓跨區域銷售團隊即時協同。',
        challengeHtml:
          '<p>來自 5 個地區的線索需要人工輸入表格，轉化數據不透明，跟進節奏不一致，造成漏跟與錯失機會。</p>',
        solutionHtml:
          '<p>在飛書 / Lark 搭建多區域 CRM，接入自動化線索收集，並為管理層建立一屏式數據看板，統一跟進流程。</p>',
      },
    },
  },
  case_3: {
    order: 30,
    published: true,
    coverImage:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    coverAlt: 'Calendar',
    content: {
      en: {
        tag: 'Content Calendar',
        cardTitle: 'Content Calendar',
        cardDesc: 'Omni-channel publishing system for 50M+ audience.',
        title: 'Omni-channel Content Hub',
        sub: 'Managing a 50M+ audience content engine.',
        challengeHtml:
          '<p>Managing daily content for TikTok, Instagram, and YouTube across 12 different brand accounts was a chaotic manual process.</p>',
        solutionHtml:
          '<p>Developed an "Architectural Content Calendar" that centralizes asset management and publishing schedules in a unified Notion workspace.</p>',
      },
      'zh-cn': {
        tag: '内容日历',
        cardTitle: '全渠道内容日历',
        cardDesc: '支持 5000 万粉丝级别的内容分发池。',
        title: '全渠道内容中枢',
        sub: '管理 5000 万+ 受众的内容引擎。',
        challengeHtml:
          '<p>在 12 个品牌账号上同时运营 TikTok、Instagram 与 YouTube 的日更内容，素材与排期靠人工同步，流程混乱且难以复盘。</p>',
        solutionHtml:
          '<p>我们搭建“架构级内容日历”，将素材、状态、负责人、渠道与发布时间统一进 Notion，并用视图与规则把协作流程标准化。</p>',
      },
      'zh-tw': {
        tag: '內容日曆',
        cardTitle: '全渠道內容日曆',
        cardDesc: '支持 5000 萬粉絲級別的內容分發池。',
        title: '全渠道內容中樞',
        sub: '管理 5000 萬+ 受眾的內容引擎。',
        challengeHtml:
          '<p>在 12 個品牌帳號上同時營運 TikTok、Instagram 與 YouTube 的日更內容，素材與排程靠人工同步，流程混亂且難以復盤。</p>',
        solutionHtml:
          '<p>我們搭建「架構級內容日曆」，將素材、狀態、負責人、渠道與發佈時間統一進 Notion，並用視圖與規則把協作流程標準化。</p>',
      },
    },
  },
};
