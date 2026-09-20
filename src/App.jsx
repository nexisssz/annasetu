import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function navigateTo(nextPage) {
    setPage(nextPage);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">

      <header className="mobile-header">
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <div className="mobile-brand">
          <div className="mobile-brand-mark">A</div>
          <div>
            <strong>AnnaSetu</strong>
            <span>Food Intelligence</span>
          </div>
        </div>

        <div className="mobile-ai-status">
          <span></span>
          AI
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}

      <aside className={`sidebar ${mobileMenuOpen ? "mobile-open" : ""}`}>

        <button
          className="mobile-sidebar-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation"
        >
          ✕
        </button>

        <div className="brand-area">
          <div className="brand-mark">A</div>

          <div>
            <h1>AnnaSetu</h1>
            <p className="tagline">Smart Food Intelligence</p>
          </div>
        </div>

        <div className="nav-section-title">
          COMMAND CENTER
        </div>

        <nav>

          <button
            className={page === "dashboard" ? "active" : ""}
            onClick={() => navigateTo("dashboard")}
          >
            <span>⌂</span>
            Dashboard
          </button>

          <button
            className={page === "prediction" ? "active" : ""}
            onClick={() => navigateTo("prediction")}
          >
            <span>✦</span>
            AI Prediction
          </button>

          <button
            className={page === "simulator" ? "active" : ""}
            onClick={() => navigateTo("simulator")}
          >
            <span>◈</span>
            What-If Lab
          </button>

          <button
            className={page === "surplus" ? "active" : ""}
            onClick={() => navigateTo("surplus")}
          >
            <span>◇</span>
            Surplus Intelligence
          </button>

          <button
            className={page === "recovery" ? "active" : ""}
            onClick={() => navigateTo("recovery")}
          >
            <span>↗</span>
            Recovery Engine
          </button>

          <button
            className={page === "analytics" ? "active" : ""}
            onClick={() => navigateTo("analytics")}
          >
            <span>▥</span>
            Impact Analytics
          </button>

        </nav>


        <div className="sidebar-bottom">

          <div className="sidebar-ai">

            <div className="sidebar-ai-orb">
              ✦
            </div>

            <div>
              <strong>Anna Intelligence</strong>
              <small>Engine operational</small>
            </div>

            <span className="sidebar-online"></span>

          </div>

          <div className="sidebar-footer">
            <span>ANNA</span>
            <span>SIH 2026 • v1.0</span>
          </div>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="main-content">

        {page === "dashboard" && (
          <DashboardPage setPage={navigateTo} />
        )}

        {page === "prediction" && (
          <PredictionPage />
        )}

        {page === "simulator" && (
          <SimulatorPage />
        )}

        {page === "surplus" && (
          <SurplusPage />
        )}

        {page === "recovery" && (
          <RecoveryPage />
        )}

        {page === "analytics" && (
          <AnalyticsPage />
        )}

      </main>

      <nav className="mobile-bottom-nav">
        <button
          className={page === "dashboard" ? "active" : ""}
          onClick={() => navigateTo("dashboard")}
        >
          <span>⌂</span>
          <small>Home</small>
        </button>

        <button
          className={page === "prediction" ? "active" : ""}
          onClick={() => navigateTo("prediction")}
        >
          <span>✦</span>
          <small>Predict</small>
        </button>

        <button
          className={page === "surplus" ? "active" : ""}
          onClick={() => navigateTo("surplus")}
        >
          <span>◇</span>
          <small>Surplus</small>
        </button>

        <button
          className={page === "recovery" || page === "analytics" ? "active" : ""}
          onClick={() => navigateTo("recovery")}
        >
          <span>↗</span>
          <small>Recover</small>
        </button>
      </nav>

    </div>
  );
}


/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage({ setPage }) {

  const dishes = [
    ["Rice", "1,780", "1,850", "+3.9%"],
    ["Dal Tadka", "1,620", "1,680", "+3.7%"],
    ["Chicken Curry", "1,480", "1,530", "+3.4%"],
    ["Veg Curry", "1,150", "1,200", "+4.3%"],
    ["Roti", "1,700", "1,760", "+3.5%"],
  ];

  return (
    <div className="page command-center">

      <div className="command-header">

        <div>
          <div className="eyebrow">
            ANNASETU / OPERATIONS
          </div>

          <h2>
            Good evening, <span>Kitchen Manager.</span>
          </h2>

          <p>
            Your intelligent food operations command center.
            Predict demand, optimize production and recover
            unavoidable surplus.
          </p>
        </div>

        <div className="ai-status">
          <span className="status-dot"></span>

          <div>
            <strong>AI ENGINE ACTIVE</strong>
            <small>System operational</small>
          </div>
        </div>

      </div>


      {/* HERO */}

      <section className="command-hero">

        <div className="hero-content">

          <div className="hero-label">
            AI FOOD OPERATIONS
          </div>

          <h1>
            Prepare smarter.
            <br />
            <span>Waste less.</span>
          </h1>

          <p>
            AnnaSetu predicts demand before production,
            identifies surplus and helps kitchens recover
            maximum value from unavoidable food.
          </p>

          <div className="hero-actions">

            <button
              onClick={() => setPage("prediction")}
            >
              ✦ Run AI Prediction
            </button>

            <button
              className="hero-secondary"
              onClick={() => setPage("simulator")}
            >
              ◈ Open What-If Lab
            </button>

          </div>

        </div>


        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-core">

            <span>EXPECTED</span>

            <strong>1,850</strong>

            <small>CONSUMERS</small>

          </div>

        </div>

      </section>


      {/* KPIs */}

      <div className="command-stats">

        <MetricCard
          icon="◎"
          label="Expected Consumers"
          value="1,850"
          badge="FORECAST"
          note="+4.2% vs weekly average"
        />

        <MetricCard
          icon="◈"
          label="Recommended Production"
          value="1,920"
          badge="AI PLAN"
          note="Controlled safety buffer"
        />

        <MetricCard
          icon="◇"
          label="Expected Surplus"
          value="72"
          badge="RECOVERY"
          note="Potentially recoverable"
          gold
        />

        <MetricCard
          icon="₹"
          label="Potential Savings"
          value="₹1,440"
          badge="IMPACT"
          note="Estimated operational savings"
          gold
        />

      </div>


      {/* INTELLIGENCE / PRODUCTION */}

      <div className="dashboard-grid">

        <div className="intelligence-card">

          <div className="intelligence-header">

            <div>
              <span className="dashboard-label">
                ANNA INTELLIGENCE
              </span>

              <h2>Today's insight</h2>
            </div>

            <div className="ai-orb">
              AI
            </div>

          </div>

          <div className="insight-main">

            <div className="insight-icon">
              ✦
            </div>

            <p>
              Rice demand is expected to be higher today.
              Friday consumption historically trends above
              the weekly average, so AnnaSetu recommends a
              controlled production increase.
            </p>

          </div>

          <div className="insight-stat">

            <span>EXPECTED CHANGE</span>

            <strong>+7%</strong>

            <small>vs normal Friday</small>

          </div>

        </div>


        <div className="production-card">

          <div className="production-header">

            <div>
              <span className="dashboard-label">
                PRODUCTION PLAN
              </span>

              <h2>Today's recommendation</h2>
            </div>

            <button
              onClick={() => setPage("prediction")}
            >
              View AI Plan →
            </button>

          </div>

          <div className="production-summary">

            <div>
              <span>EXPECTED DEMAND</span>
              <strong>1,850</strong>
            </div>

            <div className="summary-arrow">
              →
            </div>

            <div>
              <span>RECOMMENDED</span>
              <strong className="emerald-text">
                1,920
              </strong>
            </div>

          </div>

          <div className="production-progress">

            <div className="progress-label">
              <span>Production optimization</span>
              <strong>92%</strong>
            </div>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>

          </div>

          <div className="production-note">
            <span>✦</span>
            Controlled buffer reduces stock-out risk
            without unnecessary overproduction.
          </div>

        </div>

      </div>


      {/* DISH TABLE */}

      <section className="premium-section">

        <div className="section-heading">

          <div>
            <span className="dashboard-label">
              DISH-LEVEL INTELLIGENCE
            </span>

            <h2>Production overview</h2>
          </div>

        </div>

        <div className="premium-table">

          <div className="premium-table-header">
            <span>DISH</span>
            <span>EXPECTED</span>
            <span>RECOMMENDED</span>
            <span>BUFFER</span>
          </div>

          {dishes.map((dish) => (

            <div
              className="premium-table-row"
              key={dish[0]}
            >

              <span className="dish-name">
                {dish[0]}
              </span>

              <span>{dish[1]}</span>

              <strong>{dish[2]}</strong>

              <span className="buffer-positive">
                {dish[3]}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* QUICK ACTIONS */}

      <section className="premium-section">

        <div className="section-heading">

          <div>
            <span className="dashboard-label">
              QUICK ACTIONS
            </span>

            <h2>Continue your workflow</h2>
          </div>

        </div>

        <div className="premium-actions">

          <ActionCard
            icon="✦"
            title="Predict demand"
            description="Generate the next production plan"
            onClick={() => setPage("prediction")}
          />

          <ActionCard
            icon="◈"
            title="Run scenario"
            description="Test attendance and conditions"
            onClick={() => setPage("simulator")}
          />

          <ActionCard
            icon="◇"
            title="Analyze surplus"
            description="Identify potentially recoverable food"
            onClick={() => setPage("surplus")}
          />

          <ActionCard
            icon="↗"
            title="Recover value"
            description="Find the best recovery pathway"
            onClick={() => setPage("recovery")}
          />

        </div>

      </section>

    </div>
  );
}


function MetricCard({
  icon,
  label,
  value,
  badge,
  note,
  gold = false
}) {

  return (
    <div className="command-card">

      <div className="command-card-top">

        <div className="metric-icon">
          {icon}
        </div>

        <div className={`metric-badge ${gold ? "gold" : ""}`}>
          {badge}
        </div>

      </div>

      <span className="metric-title">
        {label}
      </span>

      <strong>{value}</strong>

      <small>{note}</small>

    </div>
  );
}


function ActionCard({
  icon,
  title,
  description,
  onClick
}) {

  return (
    <button
      className="action-card"
      onClick={onClick}
    >

      <div className="action-icon">
        {icon}
      </div>

      <div className="action-content">

        <strong>{title}</strong>

        <small>{description}</small>

      </div>

      <span className="action-arrow">
        →
      </span>

    </button>
  );
}


/* =========================================================
   STEP 3 — AI PREDICTION
========================================================= */

function PredictionPage() {

  const [attendance, setAttendance] = useState(2000);
  const [weather, setWeather] = useState("Clear");
  const [event, setEvent] = useState("No");
  const [predicted, setPredicted] = useState(0);

  function predict() {

    let factor = 1.04;

    if (weather === "Rain") factor -= 0.03;
    if (weather === "Hot") factor -= 0.02;
    if (event === "Yes") factor += 0.08;

    setPredicted(
      Math.round(attendance * factor)
    );
  }


  const dishes = [
    ["Rice", "1,780", "1,850", "+3.9%"],
    ["Dal Tadka", "1,620", "1,680", "+3.7%"],
    ["Chicken Curry", "1,480", "1,530", "+3.4%"],
    ["Veg Curry", "1,150", "1,200", "+4.3%"],
    ["Roti", "1,700", "1,760", "+3.5%"],
  ];


  return (
    <div className="page prediction-page">

      <PageHeader
        eyebrow="ANNASETU / AI PREDICTION ENGINE"
        title={
          <>
            Demand <span>Intelligence.</span>
          </>
        }
        description="Predict tomorrow's consumption before your kitchen starts production."
      />

      {/* PARAMETERS */}

      <section className="prediction-command-card">

        <div className="prediction-command-header">

          <div>
            <span className="dashboard-label">
              PREDICTION PARAMETERS
            </span>

            <h2>Tell AnnaSetu about tomorrow.</h2>

            <p>
              Adjust operating conditions and generate an
              optimized production forecast.
            </p>
          </div>

          <div className="prediction-ai-orb">
            AI
          </div>

        </div>


        <div className="prediction-input-grid">

          <InputCard
            icon="◎"
            label="EXPECTED ATTENDANCE"
            value={attendance}
            type="number"
            onChange={(e) =>
              setAttendance(Number(e.target.value))
            }
            description="Expected consumers tomorrow"
          />


          <SelectCard
            icon="◌"
            label="WEATHER"
            value={weather}
            onChange={(e) =>
              setWeather(e.target.value)
            }
            options={["Clear", "Rain", "Hot"]}
            description="Expected weather condition"
          />


          <SelectCard
            icon="✦"
            label="SPECIAL EVENT"
            value={event}
            onChange={(e) =>
              setEvent(e.target.value)
            }
            options={["No", "Yes"]}
            description="Event affecting attendance"
          />


          <button
            className="prediction-generate-button"
            onClick={predict}
          >

            <span className="generate-icon">
              ✦
            </span>

            <span>
              Generate
              <small>AI prediction</small>
            </span>

            <span className="generate-arrow">
              →
            </span>

          </button>

        </div>

      </section>


      {/* RESULT */}

      <section className="prediction-result">

        <div className="prediction-result-main">

          <div className="prediction-result-left">

            <span className="dashboard-label">
              AI FORECAST
            </span>

            <h2>Recommended production</h2>

            <p>
              Estimated total portions required for
              the current scenario.
            </p>

          </div>

          <div className="prediction-number">

            <span>
              {predicted
                ? predicted.toLocaleString()
                : "—"}
            </span>

            <small>PORTIONS</small>

          </div>

        </div>


        <div className="prediction-result-bottom">

          <div className="confidence-section">

            <div className="confidence-header">
              <span>Prediction confidence</span>

              <strong>
                {predicted ? "92%" : "—"}
              </strong>
            </div>

            <div className="confidence-track">

              <div
                className={
                  predicted
                    ? "confidence-fill active"
                    : "confidence-fill"
                }
              ></div>

            </div>

          </div>


          <div className="forecast-meta">

            <div>
              <span>CONSUMERS</span>
              <strong>
                {attendance.toLocaleString()}
              </strong>
            </div>

            <div>
              <span>WEATHER</span>
              <strong>{weather}</strong>
            </div>

            <div>
              <span>EVENT</span>
              <strong>{event}</strong>
            </div>

          </div>

        </div>

      </section>


      {/* SIGNALS */}

      <section className="prediction-signals">

        <SectionTitle
          eyebrow="INTELLIGENCE SIGNALS"
          title="Factors influencing the forecast"
        />

        <div className="signal-grid">

          <SignalCard
            icon="◎"
            badge="HIGH IMPACT"
            title="Attendance"
            text="Expected consumer count is the primary demand driver."
            value={attendance.toLocaleString()}
            suffix=" consumers"
          />

          <SignalCard
            icon="◌"
            badge="CONTEXT"
            title="Weather"
            text="Weather patterns can influence attendance and consumption."
            value={weather}
          />

          <SignalCard
            icon="✦"
            badge="VARIABLE"
            title="Special Event"
            text="Events can create a significant increase in expected demand."
            value={event === "Yes" ? "+8%" : "Normal"}
          />

        </div>

      </section>


      {/* DISH FORECAST */}

      <section className="prediction-dishes">

        <div className="section-heading">

          <div>
            <span className="dashboard-label">
              DISH-LEVEL FORECAST
            </span>

            <h2>Production intelligence</h2>
          </div>

          <div className="table-ai-badge">
            ✦ AI OPTIMIZED
          </div>

        </div>


        <div className="prediction-dish-table">

          <div className="prediction-dish-header">
            <span>DISH</span>
            <span>EXPECTED DEMAND</span>
            <span>AI PRODUCTION</span>
            <span>BUFFER</span>
          </div>


          {dishes.map((dish) => (

            <div
              className="prediction-dish-row"
              key={dish[0]}
            >

              <div className="prediction-dish-name">

                <span className="dish-icon">
                  ✦
                </span>

                <strong>
                  {dish[0]}
                </strong>

              </div>

              <span className="dish-demand">
                {dish[1]}
              </span>

              <strong className="dish-production">
                {dish[2]}
              </strong>

              <span className="dish-change">
                {dish[3]}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* EXPLANATION */}

      <section className="prediction-intelligence">

        <div className="prediction-intelligence-icon">
          ✦
        </div>

        <div className="prediction-intelligence-content">

          <div className="intelligence-title-row">

            <div>
              <span className="dashboard-label">
                ANNA INTELLIGENCE
              </span>

              <h2>Why this prediction?</h2>
            </div>

            <span className="intelligence-tag">
              EXPLAINABLE
            </span>

          </div>

          <p>
            AnnaSetu combines expected attendance with
            contextual demand signals such as weekday
            patterns, weather and special events to estimate
            consumption. A controlled production buffer is
            then added to reduce stock-out risk.
          </p>

          <div className="intelligence-points">

            <div>
              <span>01</span>
              <strong>Demand estimation</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Context adjustment</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Controlled buffer</strong>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   STEP 4 — WHAT IF LAB
========================================================= */

function SimulatorPage() {

  const [attendance, setAttendance] = useState(2000);
  const [weather, setWeather] = useState("Clear");
  const [event, setEvent] = useState("No");
  const [result, setResult] = useState(null);

  function simulate() {

    let factor = 1.04;

    if (weather === "Rain") factor -= 0.03;
    if (weather === "Hot") factor -= 0.02;
    if (event === "Yes") factor += 0.08;

    const originalProduction = 2080;

    const production =
      Math.round(attendance * factor);

    const portionsAvoided =
      Math.max(
        0,
        originalProduction - production
      );

    const savings =
      portionsAvoided * 20;

    const surplus =
      Math.round(production * 0.045);

    const wasteCost =
      surplus * 20;

    setResult({
      production,
      portionsAvoided,
      savings,
      surplus,
      wasteCost
    });
  }


  return (
    <div className="page simulator-page">

      <PageHeader
        eyebrow="ANNASETU / SCENARIO INTELLIGENCE"
        title={
          <>
            What-If <span>Lab.</span>
          </>
        }
        description="Change tomorrow's assumptions and see how production, surplus and cost could change."
      />


      <section className="scenario-hero">

        <div>

          <span className="dashboard-label">
            SCENARIO SIMULATION
          </span>

          <h2>
            Explore the outcome
            <br />
            <span>before you cook.</span>
          </h2>

          <p>
            AnnaSetu lets kitchen managers test different
            attendance and operating conditions before
            committing food to production.
          </p>

        </div>

        <div className="scenario-visual">

          <div className="scenario-node">
            <span>INPUT</span>
            <strong>→</strong>
            <small>SCENARIO</small>
          </div>

          <div className="scenario-line"></div>

          <div className="scenario-node active">
            <span>OUTPUT</span>
            <strong>AI</strong>
            <small>IMPACT</small>
          </div>

        </div>

      </section>


      <section className="simulator-control">

        <div className="simulator-control-header">

          <div>
            <span className="dashboard-label">
              SCENARIO PARAMETERS
            </span>

            <h2>Build your scenario</h2>
          </div>

          <span className="simulation-badge">
            LIVE SIMULATION
          </span>

        </div>


        <div className="scenario-input-grid">

          <InputCard
            icon="◎"
            label="EXPECTED ATTENDANCE"
            value={attendance}
            type="number"
            onChange={(e) =>
              setAttendance(Number(e.target.value))
            }
            description="Number of expected consumers"
          />

          <SelectCard
            icon="◌"
            label="WEATHER"
            value={weather}
            onChange={(e) =>
              setWeather(e.target.value)
            }
            options={["Clear", "Rain", "Hot"]}
            description="Expected conditions"
          />

          <SelectCard
            icon="✦"
            label="SPECIAL EVENT"
            value={event}
            onChange={(e) =>
              setEvent(e.target.value)
            }
            options={["No", "Yes"]}
            description="Event or occasion"
          />

        </div>


        <button
          className="simulate-premium-button"
          onClick={simulate}
        >
          <span>✦</span>
          Simulate Scenario
          <strong>→</strong>
        </button>

      </section>


      {!result && (

        <div className="empty-scenario">

          <div className="empty-orb">
            ◈
          </div>

          <h3>
            Your scenario is ready.
          </h3>

          <p>
            Adjust the parameters above and run the simulation
            to see AnnaSetu's projected impact.
          </p>

        </div>

      )}


      {result && (

        <section className="scenario-results">

          <div className="result-heading">

            <div>
              <span className="dashboard-label">
                SIMULATION OUTPUT
              </span>

              <h2>
                Here's what could happen.
              </h2>
            </div>

            <div className="scenario-active">
              ● SCENARIO ACTIVE
            </div>

          </div>


          <div className="scenario-result-grid">

            <ResultCard
              label="RECOMMENDED PRODUCTION"
              value={result.production.toLocaleString()}
              suffix="portions"
              accent="emerald"
            />

            <ResultCard
              label="EXPECTED SURPLUS"
              value={result.surplus}
              suffix="portions"
              accent="gold"
            />

            <ResultCard
              label="PORTIONS AVOIDED"
              value={result.portionsAvoided}
              suffix="portions"
              accent="emerald"
            />

            <ResultCard
              label="POTENTIAL SAVINGS"
              value={`₹${result.savings.toLocaleString()}`}
              suffix="estimated"
              accent="gold"
            />

          </div>


          <div className="scenario-insight">

            <div className="scenario-insight-icon">
              ✦
            </div>

            <div>

              <span>ANNA INTELLIGENCE</span>

              <p>
                Under this scenario, the kitchen could produce{" "}
                <strong>
                  {result.production.toLocaleString()}
                </strong>{" "}
                portions, potentially avoiding{" "}
                <strong>
                  {result.portionsAvoided}
                </strong>{" "}
                portions of unnecessary production compared
                with the baseline.
              </p>

            </div>

          </div>

        </section>

      )}

    </div>
  );
}


/* =========================================================
   STEP 5 — SURPLUS INTELLIGENCE
========================================================= */

function SurplusPage() {

  const [prepared, setPrepared] = useState(1920);
  const [served, setServed] = useState(1815);
  const [storage, setStorage] = useState("Refrigerated");
  const [hours, setHours] = useState(2);
  const [result, setResult] = useState(null);


  function analyzeSurplus() {

    const remaining =
      Math.max(
        0,
        prepared - served
      );

    let recoverRate = 0;

    if (storage === "Room Temperature") {
      recoverRate = hours > 4 ? 0.25 : 0.70;
    }

    if (storage === "Refrigerated") {
      recoverRate = hours > 6 ? 0.60 : 0.90;
    }

    if (storage === "Hot Holding") {
      recoverRate = hours > 4 ? 0.40 : 0.85;
    }

    const recoverable =
      Math.round(
        remaining * recoverRate
      );

    const nonRecoverable =
      remaining - recoverable;

    setResult({
      remaining,
      recoverable,
      nonRecoverable,
      recoverRate
    });
  }


  return (
    <div className="page surplus-page">

      <PageHeader
        eyebrow="ANNASETU / SURPLUS INTELLIGENCE"
        title={
          <>
            See what can be <span>saved.</span>
          </>
        }
        description="Analyze remaining food after service and identify potentially recoverable surplus."
      />


      <section className="surplus-hero">

        <div className="surplus-hero-content">

          <span className="dashboard-label">
            SURPLUS ANALYSIS
          </span>

          <h2>
            Every remaining
            <br />
            portion has a <span>decision.</span>
          </h2>

          <p>
            AnnaSetu evaluates quantity, storage condition and
            elapsed time to estimate which surplus may qualify
            for a recovery pathway.
          </p>

        </div>


        <div className="surplus-visual">

          <div className="surplus-ring">

            <span>FOOD</span>
            <strong>↗</strong>
            <small>VALUE</small>

          </div>

        </div>

      </section>


      <section className="surplus-control">

        <div className="section-heading">

          <div>
            <span className="dashboard-label">
              SURPLUS INPUT
            </span>

            <h2>Tell AnnaSetu what remains.</h2>
          </div>

        </div>


        <div className="surplus-input-grid">

          <InputCard
            icon="◇"
            label="FOOD PREPARED"
            value={prepared}
            type="number"
            onChange={(e) =>
              setPrepared(Number(e.target.value))
            }
            description="Total prepared portions"
          />

          <InputCard
            icon="◎"
            label="FOOD SERVED"
            value={served}
            type="number"
            onChange={(e) =>
              setServed(Number(e.target.value))
            }
            description="Total served portions"
          />

          <SelectCard
            icon="▣"
            label="STORAGE CONDITION"
            value={storage}
            onChange={(e) =>
              setStorage(e.target.value)
            }
            options={[
              "Refrigerated",
              "Hot Holding",
              "Room Temperature"
            ]}
            description="Current storage state"
          />

          <SelectCard
            icon="◷"
            label="TIME SINCE PREPARATION"
            value={hours}
            onChange={(e) =>
              setHours(Number(e.target.value))
            }
            options={[
              1,
              2,
              3,
              4,
              6,
              8
            ]}
            description="Elapsed time in hours"
          />

        </div>


        <button
          className="analyze-premium-button"
          onClick={analyzeSurplus}
        >
          <span>◇</span>
          Analyze Surplus
          <strong>→</strong>
        </button>

      </section>


      {result && (

        <section className="surplus-results">

          <div className="result-heading">

            <div>
              <span className="dashboard-label">
                SURPLUS INTELLIGENCE
              </span>

              <h2>
                Recovery potential identified.
              </h2>
            </div>

            <div className="analysis-complete">
              ✓ ANALYSIS COMPLETE
            </div>

          </div>


          <div className="surplus-result-hero">

            <div>

              <span>
                REMAINING FOOD
              </span>

              <strong>
                {result.remaining}
              </strong>

              <small>portions</small>

            </div>

            <div className="surplus-arrow">
              →
            </div>

            <div className="recoverable-big">

              <span>
                POTENTIALLY RECOVERABLE
              </span>

              <strong>
                {result.recoverable}
              </strong>

              <small>
                portions
              </small>

            </div>

          </div>


          <div className="surplus-metrics">

            <div>
              <span>RECOVERY ESTIMATE</span>
              <strong>
                {Math.round(
                  result.recoverRate * 100
                )}%
              </strong>
            </div>

            <div>
              <span>NON-RECOVERABLE</span>
              <strong>
                {result.nonRecoverable}
              </strong>
            </div>

            <div>
              <span>STORAGE</span>
              <strong>{storage}</strong>
            </div>

            <div>
              <span>ELAPSED TIME</span>
              <strong>{hours}h</strong>
            </div>

          </div>


          <div className="safety-warning">

            <span>!</span>

            <div>

              <strong>
                Food-safety verification required
              </strong>

              <p>
                This prototype estimate is not a food-safety
                certification. Actual recovery must follow
                applicable food-safety rules and verification
                by the responsible kitchen or organization.
              </p>

            </div>

          </div>

        </section>

      )}


      {!result && (

        <div className="empty-scenario">

          <div className="empty-orb">
            ◇
          </div>

          <h3>
            Ready to analyze surplus.
          </h3>

          <p>
            Enter the post-service food details above to
            estimate recovery potential.
          </p>

        </div>

      )}

    </div>
  );
}


/* =========================================================
   STEP 6 — RECOVERY ENGINE
========================================================= */

function RecoveryPage() {

  const [quantity, setQuantity] = useState(60);
  const [distance, setDistance] = useState(4);
  const [demand, setDemand] = useState("High");
  const [partner, setPartner] = useState("Available");
  const [recommendation, setRecommendation] = useState(null);


  function analyzeRecovery() {

    let saleScore = 0;
    let donationScore = 0;


    if (demand === "High") {
      saleScore += 3;
    }

    if (demand === "Medium") {
      saleScore += 2;
    }

    if (demand === "Low") {
      donationScore += 2;
    }


    if (quantity >= 50) {
      saleScore += 2;
    }


    if (distance <= 5) {
      saleScore += 2;
      donationScore += 2;
    } else {
      donationScore += 1;
    }


    if (partner === "Available") {
      donationScore += 3;
    }


    const saleValue =
      quantity * 30;


    const recommendationText =
      saleScore >= donationScore
        ? "Discounted Sale"
        : "Donation";


    setRecommendation({
      recommendationText,
      saleScore,
      donationScore,
      saleValue
    });
  }


  return (
    <div className="page recovery-page">

      <PageHeader
        eyebrow="ANNASETU / RECOVERY ENGINE"
        title={
          <>
            Turn surplus into <span>value.</span>
          </>
        }
        description="Find the most suitable pathway for potentially recoverable food."
      />


      <section className="recovery-hero">

        <div>

          <span className="dashboard-label">
            RECOVERY INTELLIGENCE
          </span>

          <h2>
            Don't stop at
            <br />
            <span>food waste.</span>
          </h2>

          <p>
            AnnaSetu evaluates demand, quantity, distance and
            partner availability to identify a suitable recovery
            pathway.
          </p>

        </div>


        <div className="recovery-flow">

          <div>
            <span>SURPLUS</span>
            <strong>60</strong>
          </div>

          <b>→</b>

          <div className="recovery-flow-active">
            <span>ANNA</span>
            <strong>AI</strong>
          </div>

          <b>→</b>

          <div>
            <span>VALUE</span>
            <strong>₹</strong>
          </div>

        </div>

      </section>


      <section className="recovery-control">

        <div className="section-heading">

          <div>
            <span className="dashboard-label">
              RECOVERY PARAMETERS
            </span>

            <h2>Understand the opportunity.</h2>
          </div>

        </div>


        <div className="recovery-input-grid">

          <InputCard
            icon="◇"
            label="RECOVERABLE FOOD"
            value={quantity}
            type="number"
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
            description="Potentially recoverable portions"
          />

          <InputCard
            icon="⌖"
            label="DISTANCE"
            value={distance}
            type="number"
            onChange={(e) =>
              setDistance(Number(e.target.value))
            }
            description="Distance to recipient / buyer in km"
          />

          <SelectCard
            icon="◈"
            label="NEARBY DEMAND"
            value={demand}
            onChange={(e) =>
              setDemand(e.target.value)
            }
            options={[
              "High",
              "Medium",
              "Low"
            ]}
            description="Current local demand"
          />

          <SelectCard
            icon="✓"
            label="DONATION PARTNER"
            value={partner}
            onChange={(e) =>
              setPartner(e.target.value)
            }
            options={[
              "Available",
              "Not Available"
            ]}
            description="Verified recipient availability"
          />

        </div>


        <button
          className="recovery-analyze-button"
          onClick={analyzeRecovery}
        >

          <span>↗</span>

          Find Recovery Path

          <strong>→</strong>

        </button>

      </section>


      {recommendation && (

        <section className="recovery-results">

          <div className="result-heading">

            <div>
              <span className="dashboard-label">
                ANNA'S RECOMMENDATION
              </span>

              <h2>
                Recovery pathway identified.
              </h2>
            </div>

            <div className="recommendation-status">
              ✦ OPTIMIZED
            </div>

          </div>


          <div className="recommended-path">

            <span>RECOMMENDED PATHWAY</span>

            <strong>
              {recommendation.recommendationText}
            </strong>

            <p>
              Based on quantity, local demand, distance and
              partner availability.
            </p>

          </div>


          <div className="recovery-options">

            <RecoveryOption
              icon="₹"
              title="Discounted Sale"
              description="Offer potentially recoverable food at a reduced price to nearby demand."
              value={`₹${recommendation.saleValue.toLocaleString()}`}
              label="ESTIMATED RECOVERY"
              active={
                recommendation.recommendationText ===
                "Discounted Sale"
              }
            />

            <RecoveryOption
              icon="♥"
              title="Donation"
              description="Route eligible food to a verified nearby recipient or NGO partner."
              value={`${quantity}`}
              label="PORTIONS TO DONATE"
              active={
                recommendation.recommendationText ===
                "Donation"
              }
            />

          </div>


          <div className="recovery-disclaimer">

            <span>!</span>

            <p>
              Recovery recommendations are operational
              suggestions only. Food must be independently
              verified as safe and legally eligible before
              sale or donation.
            </p>

          </div>

        </section>

      )}

    </div>
  );
}


function RecoveryOption({
  icon,
  title,
  description,
  value,
  label,
  active
}) {

  return (
    <div
      className={
        active
          ? "recovery-option active"
          : "recovery-option"
      }
    >

      {active && (
        <div className="recommended-label">
          RECOMMENDED
        </div>
      )}

      <div className="recovery-option-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span>{label}</span>

      <strong>{value}</strong>

      <button>
        Create Pathway →
      </button>

    </div>
  );
}


/* =========================================================
   STEP 7 — IMPACT ANALYTICS
========================================================= */

function AnalyticsPage() {

  const bars = [
    ["Mon", 45],
    ["Tue", 58],
    ["Wed", 42],
    ["Thu", 66],
    ["Fri", 72],
    ["Sat", 51],
    ["Sun", 38],
  ];


  return (
    <div className="page analytics-page">

      <PageHeader
        eyebrow="ANNASETU / IMPACT ANALYTICS"
        title={
          <>
            Measure the <span>impact.</span>
          </>
        }
        description="Understand how smarter production decisions translate into food, money and environmental impact."
      />


      {/* IMPACT HERO */}

      <section className="analytics-hero">

        <div>

          <span className="dashboard-label">
            MONTHLY IMPACT
          </span>

          <h2>
            Waste is becoming
            <br />
            <span>measurable impact.</span>
          </h2>

          <p>
            Track food saved, waste reduction, recovered meals
            and estimated financial savings across your kitchen.
          </p>

        </div>


        <div className="impact-score">

          <span>IMPACT SCORE</span>

          <strong>87</strong>

          <small>/ 100</small>

        </div>

      </section>


      {/* KPI GRID */}

      <div className="analytics-kpis">

        <ImpactCard
          icon="◇"
          label="FOOD WASTE REDUCED"
          value="23%"
          change="+8.4%"
          description="vs previous month"
        />

        <ImpactCard
          icon="◉"
          label="FOOD SAVED"
          value="342 kg"
          change="+12%"
          description="this month"
        />

        <ImpactCard
          icon="♧"
          label="MEALS RECOVERED"
          value="1,240"
          change="+18%"
          description="sale + donation"
        />

        <ImpactCard
          icon="₹"
          label="ESTIMATED SAVINGS"
          value="₹18,450"
          change="+15%"
          description="operational impact"
        />

      </div>


      {/* CHART + INSIGHT */}

      <div className="analytics-main-grid">

        <section className="chart-card">

          <div className="chart-header">

            <div>
              <span className="dashboard-label">
                WASTE TREND
              </span>

              <h2>
                Daily surplus volume
              </h2>
            </div>

            <span className="chart-period">
              LAST 7 DAYS
            </span>

          </div>


          <div className="bar-chart">

            {bars.map(([day, value]) => (

              <div
                className="bar-column"
                key={day}
              >

                <span className="bar-value">
                  {value}
                </span>

                <div className="bar-track">

                  <div
                    className="bar-fill"
                    style={{
                      height: `${value}%`
                    }}
                  ></div>

                </div>

                <span className="bar-day">
                  {day}
                </span>

              </div>

            ))}

          </div>

        </section>


        <section className="analytics-insight">

          <div className="analytics-insight-header">

            <div className="ai-orb">
              AI
            </div>

            <div>
              <span className="dashboard-label">
                ANNA INTELLIGENCE
              </span>

              <h2>
                What the data says
              </h2>
            </div>

          </div>


          <div className="analytics-big-number">
            23%
            <small>less waste</small>
          </div>


          <p>
            Chicken curry shows the highest recurring surplus
            pattern. Historical consumption suggests that
            Friday production could be reduced by approximately
            8% while maintaining a controlled buffer.
          </p>


          <div className="analytics-insight-row">

            <span>HIGH SURPLUS DISH</span>

            <strong>
              Chicken Curry
            </strong>

          </div>

          <div className="analytics-insight-row">

            <span>POTENTIAL OPTIMIZATION</span>

            <strong className="gold-text">
              −8%
            </strong>

          </div>

        </section>

      </div>


      {/* IMPACT BREAKDOWN */}

      <section className="impact-breakdown">

        <div className="section-heading">

          <div>
            <span className="dashboard-label">
              IMPACT BREAKDOWN
            </span>

            <h2>
              Where AnnaSetu creates value
            </h2>
          </div>

        </div>


        <div className="impact-flow">

          <ImpactFlow
            number="01"
            title="Prevent"
            description="Avoid unnecessary production before cooking."
            value="58%"
          />

          <div className="flow-arrow">→</div>

          <ImpactFlow
            number="02"
            title="Recover"
            description="Identify potentially recoverable surplus."
            value="27%"
          />

          <div className="flow-arrow">→</div>

          <ImpactFlow
            number="03"
            title="Redistribute"
            description="Route eligible food to buyers or recipients."
            value="15%"
          />

        </div>

      </section>


      <div className="analytics-footer-note">

        <span>✦</span>

        <p>
          The figures shown are prototype/demo metrics.
          Production deployments would calculate impact from
          verified operational data.
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function PageHeader({
  eyebrow,
  title,
  description
}) {

  return (
    <div className="page-header">

      <div>

        <div className="eyebrow">
          {eyebrow}
        </div>

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

      </div>

      <div className="page-status">

        <span className="status-dot"></span>

        <div>
          <strong>ANNA ONLINE</strong>
          <small>Intelligence engine active</small>
        </div>

      </div>

    </div>
  );
}


function SectionTitle({
  eyebrow,
  title
}) {

  return (
    <div className="section-heading">

      <div>

        <span className="dashboard-label">
          {eyebrow}
        </span>

        <h2>{title}</h2>

      </div>

    </div>
  );
}


function InputCard({
  icon,
  label,
  value,
  onChange,
  description,
  type = "text"
}) {

  return (
    <div className="premium-input-card">

      <div className="input-card-icon">
        {icon}
      </div>

      <div className="input-card-content">

        <label>{label}</label>

        <input
          type={type}
          value={value}
          onChange={onChange}
        />

        <small>{description}</small>

      </div>

    </div>
  );
}


function SelectCard({
  icon,
  label,
  value,
  onChange,
  options,
  description
}) {

  return (
    <div className="premium-input-card">

      <div className="input-card-icon">
        {icon}
      </div>

      <div className="input-card-content">

        <label>{label}</label>

        <select
          value={value}
          onChange={onChange}
        >

          {options.map((option) => (

            <option
              key={option}
              value={option}
            >
              {option}
            </option>

          ))}

        </select>

        <small>{description}</small>

      </div>

    </div>
  );
}


function SignalCard({
  icon,
  badge,
  title,
  text,
  value,
  suffix
}) {

  return (
    <div className="signal-card">

      <div className="signal-top">

        <span className="signal-icon">
          {icon}
        </span>

        <span className="signal-positive">
          {badge}
        </span>

      </div>

      <strong>{title}</strong>

      <p>{text}</p>

      <div className="signal-value">
        {value}

        {suffix && (
          <small>{suffix}</small>
        )}
      </div>

    </div>
  );
}


function ResultCard({
  label,
  value,
  suffix,
  accent
}) {

  return (
    <div className={`result-card ${accent}`}>

      <span>{label}</span>

      <strong>{value}</strong>

      <small>{suffix}</small>

    </div>
  );
}


function ImpactCard({
  icon,
  label,
  value,
  change,
  description
}) {

  return (
    <div className="impact-card">

      <div className="impact-card-top">

        <div className="impact-icon">
          {icon}
        </div>

        <span>
          {change}
        </span>

      </div>

      <label>{label}</label>

      <strong>{value}</strong>

      <small>{description}</small>

    </div>
  );
}


function ImpactFlow({
  number,
  title,
  description,
  value
}) {

  return (
    <div className="impact-flow-card">

      <span className="flow-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <strong>{value}</strong>

    </div>
  );
}


export default App;