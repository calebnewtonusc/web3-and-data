// Tesla Data Engineer interview + FleetPulse portfolio plan.
// Unified-shape plan consumed by the multi-track tracker.
// Target: Tesla Data Engineer Internship (Fleet Data / Energy), Fall 2026.

window.TESLA = {
  id: "fleetpulse",
  title: "Tesla Data Engineer",
  subtitle:
    "Vibe-code an ambitious FleetPulse portfolio. Personally learn the interview layer deep enough to defend every decision.",
  range: "Fall 2026 target · 12-week interview track",
  unitLabel: "Modules",
  milestoneLabel: "Exit criteria",
  mission:
    "I used AI to build a far more ambitious Tesla-style data engineering portfolio than I could have built manually, but I personally learned SQL, Python, Airflow, Spark, data modeling, data quality, observability, dashboards, and system design well enough to pass interviews and defend every important decision.",

  scorecard: {
    title: "Final Application Package",
    subtitle:
      "Before applying, every one of these should exist and be real. No resume bullet ships until its metric is real.",
    items: [
      "GitHub repo (FleetPulse)",
      "Project page",
      "Demo video",
      "Dashboard screenshots",
      "Architecture diagram",
      "Technical report",
      "SQL portfolio folder",
      "Data quality report",
      "Spark performance note",
      "Interview defense notes",
      "DataLemur completion log",
      "SQL mistake log",
      "20 Tesla-style SQL problems solved",
      "Python drills folder",
      "System design notes",
      "Project defense question bank answered",
      "Resume bullets (metrics real)",
      "Recruiter message + LinkedIn project post",
      "Published Tableau + Apache Superset dashboards",
      "dbt project with tests, docs and lineage",
      "PeoplePulse People-analytics case + one-page exec brief",
      "Full-stack analytics app (Python + React) from scratch",
    ],
  },

  groups: [
    // ============== 12-WEEK INTERVIEW TRACK ==============
    {
      key: "iw",
      tag: "Interview Track",
      range: "12 weeks",
      title: "12-Week Interview Learning Plan",
      summary:
        "The part that cannot be vibe-coded. SQL is the highest priority — it is the most likely interview filter. Each week ends on an exit criterion you must be able to demonstrate cold.",
      items: [
        {
          key: "w1",
          eyebrow: "Week 1",
          title: "SQL Foundations & FleetPulse Schema",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Joins",
                "Aggregations",
                "CTEs",
                "Grain",
                "Fact vs dimension tables",
              ],
            },
            {
              label: "Do",
              tasks: [
                "10 DataLemur problems",
                "Write FleetPulse schema notes",
                "Explain every table",
                "Write 5 custom SQL queries",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can explain what one row means in every major FleetPulse table.",
          },
        },
        {
          key: "w2",
          eyebrow: "Week 2",
          title: "Time-Series SQL",
          sections: [
            {
              label: "Learn",
              tasks: [
                "DATE_TRUNC",
                "Intervals",
                "Rolling metrics",
                "Latest state per entity",
                "First event after another event",
              ],
            },
            {
              label: "Do",
              tasks: [
                "12 DataLemur problems",
                "5 custom time-series queries",
                "Explain intervention rate per 1,000 miles",
                "Build one dashboard metric definition",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can write rolling seven-day metrics without panicking.",
          },
        },
        {
          key: "w3",
          eyebrow: "Week 3",
          title: "Python Data Scripts",
          sections: [
            {
              label: "Learn",
              tasks: ["CSV", "JSON", "Parquet", "pandas", "logging", "pytest"],
            },
            {
              label: "Do",
              tasks: [
                "8 DataLemur problems",
                "3 manual Python scripts (no AI)",
                "3 pytest tests",
                "Explain a stack trace",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can write a data cleaning script without AI and explain every line.",
          },
        },
        {
          key: "w4",
          eyebrow: "Week 4",
          title: "Airflow",
          sections: [
            {
              label: "Learn",
              tasks: [
                "DAGs",
                "Tasks",
                "Dependencies",
                "Retries",
                "Backfills",
                "Logs",
                "Idempotency",
              ],
            },
            {
              label: "Do",
              tasks: [
                "8 DataLemur problems",
                "Build or inspect 3 FleetPulse DAGs",
                "Break one DAG and read the logs",
                "Write one incident report",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can explain why Airflow exists instead of cron.",
          },
        },
        {
          key: "w5",
          eyebrow: "Week 5",
          title: "Spark Basics",
          sections: [
            {
              label: "Learn",
              tasks: [
                "DataFrames",
                "Lazy evaluation",
                "Transformations",
                "Actions",
                "Partitions",
                "Shuffles",
                "Parquet",
              ],
            },
            {
              label: "Do",
              tasks: [
                "8 DataLemur problems",
                "Run one PySpark job",
                "Compare pandas vs Spark runtime",
                "Write one optimization note",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can explain Spark without sounding like you memorized a definition.",
          },
        },
        {
          key: "w6",
          eyebrow: "Week 6",
          title: "Data Quality",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Null checks",
                "Duplicate checks",
                "Freshness checks",
                "Schema drift",
                "Volume anomalies",
                "Bad-row quarantine",
              ],
            },
            {
              label: "Do",
              tasks: [
                "10 DataLemur problems",
                "Build or inspect 10 quality checks",
                "Explain which checks fail the pipeline vs warn",
                "Write one data quality report",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can explain how you know your data is trustworthy.",
          },
        },
        {
          key: "w7",
          eyebrow: "Week 7",
          title: "Analytics & Dashboard Metrics",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Metric definitions",
                "Denominators",
                "Normalization",
                "Filters",
                "Drilldowns",
                "Dashboard pitfalls",
              ],
            },
            {
              label: "Do",
              tasks: [
                "10 DataLemur problems",
                "Define 10 FleetPulse metrics",
                "Explain 5 dashboard charts",
                "Remove any vanity metrics",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "Every dashboard chart supports a decision.",
          },
        },
        {
          key: "w8",
          eyebrow: "Week 8",
          title: "Query Optimization",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Indexes",
                "Partitions",
                "Join cost",
                "Aggregation cost",
                "Explain plans conceptually",
                "Materialized tables",
              ],
            },
            {
              label: "Do",
              tasks: [
                "10 DataLemur problems",
                "Optimize 5 FleetPulse queries",
                "Write before-and-after notes",
                "Explain one slow query",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can talk about query performance intelligently.",
          },
        },
        {
          key: "w9",
          eyebrow: "Week 9",
          title: "Streaming Concepts",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Kafka",
                "Producers",
                "Consumers",
                "Topics",
                "Partitions",
                "Offsets",
                "Late events",
                "At-least-once delivery",
              ],
            },
            {
              label: "Do",
              tasks: [
                "8 DataLemur problems",
                "Explain the FleetPulse streaming layer",
                "Write one batch vs streaming tradeoff note",
                "Practice streaming system design",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can explain streaming at a practical level.",
          },
        },
        {
          key: "w10",
          eyebrow: "Week 10",
          title: "System Design",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Requirements",
                "Scale",
                "Data sources",
                "Storage",
                "Transformations",
                "Data quality",
                "Observability",
                "Dashboards",
                "Tradeoffs",
                "Failure modes",
              ],
            },
            {
              label: "Do",
              tasks: [
                "8 DataLemur problems",
                "3 system design mock answers",
                "Draw FleetPulse from memory",
                "Explain what changes at 100x data",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can design a fleet data platform out loud.",
          },
        },
        {
          key: "w11",
          eyebrow: "Week 11",
          title: "Mock Interview Week",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Weak SQL topics",
                "Weak Python topics",
                "Weak project explanations",
                "Weak system design areas",
              ],
            },
            {
              label: "Do",
              tasks: [
                "12 mixed DataLemur problems",
                "2 full SQL mocks",
                "2 Python mocks",
                "2 system design mocks",
                "2 project defense mocks",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You know exactly what still feels shaky.",
          },
        },
        {
          key: "w12",
          eyebrow: "Week 12",
          title: "Final Polish",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Redo missed problems",
                "Review mistake log",
                "Review project architecture",
                "Review resume bullets",
                "Review final answers",
              ],
            },
            {
              label: "Do",
              tasks: [
                "10 timed SQL problems",
                "5 custom Tesla SQL problems",
                "1 final system design mock",
                "1 final project defense mock",
                "Final interview packet",
              ],
            },
          ],
          gate: {
            label: "Exit criteria",
            text: "You can explain your project and solve medium SQL without AI.",
          },
        },
      ],
    },

    // ============== FLEETPULSE PORTFOLIO LEVELS ==============
    {
      key: "fp",
      tag: "Portfolio Track",
      range: "Levels 1–7",
      title: "FleetPulse — Build It In Levels",
      summary:
        "A Tesla-style fleet data platform: ingest high-volume vehicle events, transform through bronze/silver/gold, validate quality, monitor health, rank scenarios, serve dashboards. Each level is impressive alone; later levels make it exceptional. Vibe-code aggressively, then audit and defend every component.",
      items: [
        {
          key: "l1",
          eyebrow: "Level 1",
          title: "Batch Fleet Data Platform",
          summary:
            "Proves you can take raw event data and turn it into analytics-ready tables.",
          sections: [
            {
              label: "Features",
              tasks: [
                "Synthetic fleet telemetry generator",
                "Vehicle / Trip / Driving event / Autonomy event / Charging event tables",
                "Python ingestion scripts",
                "Bronze, silver, gold tables",
                "SQL analytics queries",
                "Basic dashboard",
                "Basic README",
              ],
            },
            {
              label: "Metrics",
              tasks: [
                "Row count by table",
                "Daily event count",
                "Events by region / model / firmware",
                "Intervention rate",
                "Charging failure rate",
                "Sensor health average",
                "Duplicate event count",
                "Data freshness",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "Why the schema exists",
                "Why bronze/silver/gold layers are useful",
                "How the ingestion script works",
                "What makes data clean or unclean",
                "Which SQL queries answer real engineering questions",
              ],
            },
          ],
        },
        {
          key: "l2",
          eyebrow: "Level 2",
          title: "Airflow-Orchestrated Pipeline",
          summary:
            "Proves you understand orchestration, dependencies, retries, scheduling, and pipeline support.",
          sections: [
            {
              label: "Features",
              tasks: [
                "Retries",
                "Task dependencies",
                "Backfill instructions",
                "Logs",
                "Failure simulation",
                "Pipeline run summary table",
              ],
            },
            {
              label: "Required DAGs",
              tasks: [
                "generate_raw_fleet_data",
                "ingest_bronze_tables",
                "transform_silver_tables",
                "build_gold_metrics",
                "run_data_quality_checks",
                "publish_dashboard_extracts",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "Why Airflow instead of cron",
                "What happens if a task fails",
                "How to backfill one week of data",
                "How to make a pipeline idempotent",
                "Where task logs live",
                "How to alert on failure",
                "How dependencies prevent bad downstream data",
              ],
            },
          ],
        },
        {
          key: "l3",
          eyebrow: "Level 3",
          title: "Spark-Scale Processing",
          summary:
            "Proves you can reason about data at scale, not just in notebooks.",
          sections: [
            {
              label: "Features",
              tasks: [
                "PySpark transformation job",
                "Partitioned Parquet",
                "10M+ event synthetic dataset",
                "Runtime comparison: pandas vs PySpark",
                "Partitioning / shuffle / join-strategy notes",
                "Spark README + performance table",
              ],
            },
            {
              label: "Concepts",
              tasks: [
                "Driver, executors",
                "DataFrames, lazy evaluation",
                "Transformations vs actions",
                "Partitions, shuffles",
                "Broadcast joins",
                "Parquet, predicate pushdown, columnar storage",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "Why Spark / when is it overkill",
                "What is a shuffle",
                "Why partition by date",
                "Transformation vs action",
                "Why Parquet is useful",
                "What happens at 100x larger",
              ],
            },
          ],
        },
        {
          key: "l4",
          eyebrow: "Level 4",
          title: "ScenarioMiner Analytics Layer",
          summary:
            "Proves you can turn event data into useful engineering signals — directly relevant to Tesla Fleet Data.",
          sections: [
            {
              label: "Features",
              tasks: [
                "Rare scenario discovery",
                "High-severity event ranking",
                "Firmware before-and-after analysis",
                "Intervention rate per 1,000 miles",
                "Sensor health degradation detection",
                "Region / road type / model version comparison",
                "Scenario sampling for model evaluation",
              ],
            },
            {
              label: "Required CLI",
              tasks: [
                "fleetpulse rank-scenarios",
                "fleetpulse firmware-report",
                "fleetpulse sensor-health",
                "fleetpulse pipeline-health",
                "fleetpulse data-quality-report",
                "fleetpulse generate-dashboard-extract",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "What makes a scenario valuable",
                "Why raw counts mislead",
                "Why denominators matter",
                "Why intervention rate is normalized by miles/trips",
                "How to distinguish true signal from data quality noise",
                "How a fleet team would use this output",
              ],
            },
          ],
        },
        {
          key: "l5",
          eyebrow: "Level 5",
          title: "Data Quality & Observability",
          summary:
            "Proves you understand that pipelines are only valuable if the data can be trusted.",
          sections: [
            {
              label: "Features",
              tasks: [
                "Null / duplicate / referential integrity checks",
                "Schema drift checks",
                "Freshness checks",
                "Volume anomaly + distribution drift checks",
                "Bad-row quarantine",
                "Failed pipeline alert simulation",
                "Incident postmortem template",
              ],
            },
            {
              label: "Required checks",
              tasks: [
                "vehicle_id cannot be null",
                "event_id must be unique",
                "Every event maps to a known vehicle",
                "Every trip end after start",
                "Event timestamps inside trip windows",
                "Firmware version matches accepted format",
                "Daily row count above threshold",
                "Data freshness within allowed delay",
                "Sensor health score within valid range",
                "Charging event duration positive",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "How bad rows are detected",
                "Where bad rows go",
                "What checks fail the pipeline vs warn",
                "How quality issues affect dashboards",
                "How to debug a failed check",
              ],
            },
          ],
        },
        {
          key: "l6",
          eyebrow: "Level 6",
          title: "Streaming Fleet Data",
          summary:
            "Proves you understand both batch and streaming architectures.",
          sections: [
            {
              label: "Features",
              tasks: [
                "Kafka or Redpanda",
                "Streaming vehicle events + consumer service",
                "Real-time anomaly detection",
                "Live dashboard updates",
                "Freshness monitoring + alert simulation",
                "Windowed aggregations",
                "Late-arriving event handling",
                "Streaming README",
              ],
            },
            {
              label: "Concepts",
              tasks: [
                "Producer, consumer, topic, partition",
                "Consumer group, offset",
                "Event time vs processing time",
                "Late-arriving data",
                "At-least-once vs exactly-once",
                "Idempotent writes",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "Why add streaming",
                "What should be batch vs streaming",
                "What happens if a consumer crashes",
                "How offsets work",
                "How to avoid duplicate processing",
                "How to handle late events",
                "How to monitor freshness",
              ],
            },
          ],
        },
        {
          key: "l7",
          eyebrow: "Level 7",
          title: "Internal Developer Platform",
          summary:
            "Proves you can build tools other engineers would actually use.",
          sections: [
            {
              label: "Features",
              tasks: [
                "CLI tools",
                "Developer documentation",
                "Query templates + metric definitions",
                "Local setup script",
                "Docker Compose",
                "GitHub Actions",
                "SQL linting + Python tests",
                "Architecture docs",
                "Incident templates + example workflows",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "Who is the user",
                "What task does the tool make easier",
                "What was painful before the tool",
                "What the CLI automates",
                "How another engineer adds a metric",
                "How another engineer debugs a failed pipeline",
              ],
            },
          ],
        },
      ],
    },

    // ============== SQL & PRACTICE ==============
    {
      key: "sql",
      tag: "Skill Track",
      range: "Daily",
      title: "SQL & DataLemur",
      summary:
        "DataLemur six days a week, three-pass method (solve, explain, improve), with a mistake log. SQL is the most likely interview filter — the goal is to see patterns fast, not memorize syntax.",
      items: [
        {
          key: "dl",
          eyebrow: "Before applying",
          title: "DataLemur Targets",
          sections: [
            {
              label: "Targets",
              tasks: [
                "100 total problems",
                "60 easy or medium",
                "30 medium",
                "10 hard",
                "20 timed medium attempts",
                "10 timed hard attempts",
                "Every missed medium redone",
                "Every missed hard redone",
                "20 custom Tesla-style SQL questions",
                "1 clean SQL portfolio folder",
              ],
            },
          ],
        },
        {
          key: "tsql",
          eyebrow: "Against FleetPulse schema",
          title: "20 Tesla-Style SQL Problems",
          sections: [
            {
              label: "Problems",
              tasks: [
                "Latest firmware per vehicle (most recent trip)",
                "Intervention rate per 1,000 miles by firmware",
                "Duplicate autonomy events (vehicle, timestamp, type)",
                "Rolling 7-day average severity by region",
                "Firmware before/after high-severity rate",
                "Stale telemetry (no data in last 24h)",
                "Rank scenario tags by rarity and severity",
                "Sensor health down 3 consecutive days",
                "Charging failure rate by station + battery temp bucket",
                "First high-severity event within 5 min of disengagement",
              ],
            },
            {
              label: "Problems II",
              tasks: [
                "Regions with highest % stale vehicle data",
                "Vehicles >2 std dev above fleet intervention rate",
                "Avg severity by model and firmware",
                "Weekly failed data quality checks by type",
                "Rank trips by weighted rarity/severity/health/completeness",
                "Events arriving >1h after event timestamp",
                "Sessionize raw events into trips (>30 min gap)",
                "Trips with fewer telemetry points than expected",
                "Metrics that changed >20% week over week",
                "Pipeline runs exceeding runtime or missing freshness SLA",
              ],
            },
          ],
        },
        {
          key: "topics",
          eyebrow: "Reference",
          title: "SQL Topics To Master",
          sections: [
            {
              label: "Core",
              tasks: [
                "SELECT / WHERE / GROUP BY / HAVING / ORDER BY",
                "DISTINCT",
                "CASE WHEN",
                "COALESCE + NULL handling",
                "Type casting",
              ],
            },
            {
              label: "Joins",
              tasks: [
                "INNER / LEFT / RIGHT / FULL OUTER",
                "Self join",
                "Anti join / semi join",
                "Join duplication + many-to-many traps",
                "Join keys",
              ],
            },
            {
              label: "Aggregations",
              tasks: [
                "COUNT / COUNT DISTINCT / SUM / AVG / MIN / MAX",
                "Conditional aggregation",
                "Ratio + rate metrics",
                "Denominator selection",
              ],
            },
            {
              label: "Windows",
              tasks: [
                "ROW_NUMBER / RANK / DENSE_RANK",
                "LAG / LEAD",
                "SUM/AVG/COUNT OVER",
                "Rolling windows",
                "Partitioning and ordering",
              ],
            },
            {
              label: "Time-series",
              tasks: [
                "DATE_TRUNC + intervals",
                "Rolling 7-day metrics",
                "Week-over-week / month-over-month",
                "First event after another event",
                "Latest state per entity",
                "Sessionization",
                "Gaps and islands",
                "Freshness checks",
              ],
            },
            {
              label: "Fleet analytics",
              tasks: [
                "Retention / cohorts / funnels",
                "Conversion + event + failure rates",
                "Active vehicles",
                "Before-and-after comparisons",
                "A/B-style comparisons",
                "Outlier detection",
              ],
            },
          ],
        },
      ],
    },

    // ============== PYTHON, FUNDAMENTALS & SYSTEM DESIGN ==============
    {
      key: "core",
      tag: "Skill Track",
      range: "Manual, no AI",
      title: "Python, Fundamentals & System Design",
      summary:
        "Write a 50-line data script without AI, explain every line, and debug it. Know the fundamentals cold and be able to design a fleet data platform out loud.",
      items: [
        {
          key: "drills",
          eyebrow: "No AI",
          title: "5 Manual Python Drills",
          sections: [
            {
              label: "Drills",
              tasks: [
                "Parse events: rows, unique vehicles, count by type, nulls by column, earliest/latest timestamp",
                "Deduplicate events on vehicle_id + timestamp + event_type + location_geohash",
                "Compute fleet metrics: daily events, interventions, intervention rate, avg severity, freshness",
                "Validate schema: required columns, valid timestamps, no null vehicle IDs, severity 1-5, unique event IDs",
                "CLI report: python report.py --input data/events.csv --metric intervention_rate",
              ],
            },
            {
              label: "Python skills",
              tasks: [
                "Read/write CSV, JSON, Parquet",
                "pandas + PyArrow",
                "pathlib + datetime",
                "logging + proper try/except",
                "type hints, functions, simple classes",
                "argparse or Typer",
                "pytest tests",
                "env vars + package structure",
                "debug stack traces, avoid silent failures",
              ],
            },
          ],
        },
        {
          key: "fund",
          eyebrow: "Concepts",
          title: "Data Engineering Fundamentals",
          sections: [
            {
              label: "Must know",
              tasks: [
                "ETL vs ELT",
                "Batch vs streaming",
                "OLTP vs OLAP",
                "Data lake vs warehouse vs lakehouse",
                "Bronze / silver / gold",
                "Fact vs dimension tables",
                "Idempotency",
                "Backfill",
                "Late-arriving data",
                "Schema evolution",
                "Data contracts",
              ],
            },
            {
              label: "Data modeling",
              tasks: [
                "Grain: what does one row represent?",
                "Primary keys + foreign keys",
                "Star schema",
                "Slowly changing dimensions",
                "Event / snapshot / aggregated / metric tables",
                "For each table: row meaning, PK, FKs, source, downstream users, common queries, quality checks, limits",
              ],
            },
          ],
        },
        {
          key: "sysd",
          eyebrow: "Out loud",
          title: "System Design & Defense",
          sections: [
            {
              label: "Answer structure",
              tasks: [
                "Clarify goals + users",
                "Define data sources + ingestion",
                "Define storage + transformation",
                "Define data model + metrics",
                "Define data quality + observability",
                "Define dashboards",
                "Discuss scale, tradeoffs, failure modes",
              ],
            },
            {
              label: "Follow-ups to practice",
              tasks: [
                "What if data volume is 100x larger?",
                "What if events arrive late?",
                "What if firmware changes the schema?",
                "What if a downstream dashboard is wrong?",
                "What if duplicate events appear?",
                "What if one region stops sending data?",
                "How do you backfill a metric?",
                "How do you decide batch vs streaming?",
                "How do you make the system reliable?",
                "How do you make it easy for other engineers to use?",
              ],
            },
            {
              label: "AI without exposure",
              tasks: [
                "Ask AI to build, then run it",
                "Trace inputs, outputs, functions, error handling, assumptions, side effects",
                "Write a defense note per major component",
                "Break it with one bad input",
                "Fix it and understand the fix",
                "If you can't answer the AI audit checklist, it is not interview-safe",
              ],
            },
          ],
        },
      ],
    },

    // ============== ANALYTICS ENGINEERING & BUSINESS IMPACT ==============
    {
      key: "ae",
      tag: "Analytics Track",
      range: "Hedge: business analytics",
      title: "Analytics Engineering & Business Impact",
      summary:
        "FleetPulse proves you can engineer pipelines. This proves you can drive business decisions — the other half Tesla wants, especially for People Systems & Analytics: BI tools (Tableau/Superset), dbt, statistics, a People-analytics case, and the framing + communication that turns analysis into adopted decisions.",
      items: [
        {
          key: "bi",
          eyebrow: "Required tooling",
          title: "BI & Visualization — Tableau + Superset",
          summary:
            "The People Systems & Analytics JD names Tableau or Apache Superset explicitly. Streamlit is not enough.",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Tableau: worksheets, dashboards, calculated fields, LOD expressions, parameters",
                "Apache Superset: datasets, charts, dashboards, SQL Lab",
                "Chart selection: which chart answers which decision",
                "Designing for non-technical executives",
                "Data storytelling: lead with the 'so what'",
              ],
            },
            {
              label: "Do",
              tasks: [
                "Connect Tableau Public (or Superset) to FleetPulse gold tables",
                "Build a fleet-health executive dashboard with filters + drilldowns",
                "Rebuild the same dashboard in the other tool",
                "Publish a Tableau Public link for the portfolio",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "When to use Tableau vs Superset vs a coded dashboard",
                "How you designed for a non-technical audience",
                "Which chart you removed and why",
                "How a viz could mislead and how you prevented it",
              ],
            },
          ],
        },
        {
          key: "dbt",
          eyebrow: "Analytics engineering",
          title: "Analytics Engineering with dbt",
          summary:
            "dbt is the industry standard for SQL-first ELT, tests, and docs — the analytics-engineering muscle this role rewards.",
          sections: [
            {
              label: "Learn",
              tasks: [
                "ELT vs ETL revisited",
                "dbt models, ref(), and sources",
                "dbt tests: not_null, unique, relationships, accepted_values",
                "Snapshots for slowly changing dimensions",
                "dbt docs + lineage graph",
                "A metrics / semantic layer",
              ],
            },
            {
              label: "Do",
              tasks: [
                "Convert FleetPulse silver/gold SQL into dbt models with ref()",
                "Map your data-quality checks onto dbt tests",
                "Generate dbt docs and the lineage graph",
                "Define a few governed metrics in one place",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "Why dbt instead of hand-written SQL scripts",
                "How dbt tests catch bad data before dashboards",
                "What lineage buys you when something breaks",
                "How a metrics layer prevents definition drift",
              ],
            },
          ],
        },
        {
          key: "people",
          eyebrow: "Domain project",
          title: "PeoplePulse — People / Business Analytics",
          summary:
            "A People-analytics mini-project so you can credibly target People Systems & Analytics, not only Fleet Data. 'Knowledge of People data is a plus.'",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Core People metrics: headcount, attrition / retention, hiring funnel, time-to-fill",
                "Compensation bands, engagement, and DEI metrics",
                "Framing a business challenge before touching data",
                "Privacy and sensitivity of people data",
              ],
            },
            {
              label: "Do",
              tasks: [
                "Generate synthetic HR data; ETL it with Python + SQL",
                "Model headcount, attrition, and the hiring funnel",
                "Build a Tableau/Superset dashboard for non-technical leaders",
                "Write a one-page exec brief: problem, finding, recommendation",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "What actually drives attrition in your data",
                "Why a raw headcount number can mislead",
                "What decision each chart supports",
                "How you'd protect sensitive people data",
              ],
            },
          ],
        },
        {
          key: "methods",
          eyebrow: "Rigor",
          title: "Analytics Methods & Statistics",
          summary:
            "'Apply robust analytics methods to business situations' — the JD wants more than GROUP BY.",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Descriptive stats and distributions",
                "Cohort and retention analysis",
                "Correlation vs causation",
                "Regression basics for explaining a metric",
                "A/B testing and statistical significance",
                "Forecasting basics and outlier handling",
              ],
            },
            {
              label: "Do",
              tasks: [
                "Run a cohort + retention analysis on a real dataset",
                "Fit a simple regression to explain one business metric",
                "Run an A/B-style comparison and judge significance",
                "Document assumptions and what the analysis does not prove",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "When a difference is signal vs noise",
                "Why correlation is not causation here",
                "What your regression can and cannot claim",
                "How you chose the denominator and population",
              ],
            },
          ],
        },
        {
          key: "framing",
          eyebrow: "The differentiator",
          title: "Business Framing, Communication & Stakeholders",
          summary:
            "The JD leads with framing challenges, distilling for non-technical stakeholders, and driving adoption. This is what most engineers skip — and where you can win.",
          sections: [
            {
              label: "Learn",
              tasks: [
                "Framing ambiguous problems in unstructured environments",
                "Decision-first, 'so what' communication",
                "Translating analysis for non-technical stakeholders",
                "Driving adoption of an analytics solution",
                "Lightweight project management for analytics work",
              ],
            },
            {
              label: "Do",
              tasks: [
                "Write a one-page exec brief: problem, approach, finding, recommendation, risk",
                "Record a 5-minute non-technical walkthrough of one analysis",
                "Draft a project plan / RACI for an analytics initiative",
                "Prepare a stakeholder Q&A and objection-handling sheet",
              ],
            },
            {
              label: "Interview defense",
              tasks: [
                "How you framed an ambiguous problem from scratch",
                "How you got a non-technical team to adopt your work",
                "How you prioritized under ambiguity",
                "How you measured the business impact",
              ],
            },
          ],
        },
      ],
    },
  ],
};
