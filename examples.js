/*
Some examples are based on:
- Google's SRE workbook, SLO Document: https://sre.google/workbook/slo-document/
- Google's SRE workbook, Implementing SLOs: https://sre.google/workbook/implementing-slos/
- Collibra, The 6 dimensions of data quality: https://www.collibra.com/us/en/blog/the-6-dimensions-of-data-quality
*/
export default [
    {
        title: '< Empty Time-Based SLI >',
        description: '',
        unit: 60,
        good: '',
        valid: '',
    },
    {
        title: '< Empty Event-Based SLI >',
        description: '',
        unit: 'events',
        good: '',
        valid: '',
    },
    {
        title: 'Availability: Synthetic uptime',
        description: 'The percentage of successful synthetic probes that do a HTTP GET request to the root endpoint evrey minute',
        unit: 60,
        good: 'response_code == 200',
        valid: 'all',
    },
    {
        title: 'Availability: Organic traffic uptime',
        description: 'The percentage of successful requests to the endpoint',
        unit: 'requests',
        good: '200 ≤ response_code < 500',
        valid: 'inbound',
    },
    {
        title: 'Availability: Organic purchase flow',
        description: 'The percentage of settled payments out of all orders placed via the website',
        good: 'settled payment',
        valid: 'orders placed via website',
    },
    {
        title: 'Availability: Error Rate',
        description: 'The percentage of authenticated requests that were successful',
        unit: 'requests',
        good: 'response_code < 500',
        valid: 'authenticated',
    },
    {
        title: 'Latency: Response Latency',
        description: 'The percentage of sufficiently fast requests, as measured from the load balancer metrics. "Sufficiently fast" is defined as ≤ 400 ms',
        unit: 'requests',
        good: 'response_latency ≤ 400ms',
        valid: 'all load balancer hits',
    },
    {
        title: 'Latency: Database Query',
        description: 'The percentage of sufficiently fast database insertion queries. "Sufficiently fast" is defined as ≤ 100 ms',
        unit: 'insertion queries',
        good: 'query_latency ≤ 100ms',
        valid: 'all to the customers table',
    },
    {
        // https://web.dev/articles/ttfb
        title: 'Latency: TTFB',
        description: 'The percentage of requests where the time to first byte was sufficiently fast. "Sufficiently fast" is defined as ≤ 800 ms',
        unit: 'connections',
        good: 'ttfb ≤ 800ms',
        valid: 'all',
    },
    {
        // https://web.dev/articles/fcp
        title: 'Latency: FCP',
        description: 'The percentage of page renders where the time from when the page starts loading to when any part of the page content is rendered on screen was sufficiently fast. "Sufficiently fast" is defined as ≤ 1,000 ms',
        unit: 'page renders',
        good: 'fcp ≤ 1000ms',
        valid: 'all',
    },
    {
        title: 'Latency: P99 response time',
        description: 'The percentage of 5 minute time slots where the P75 percentile of response latency was sufficiently fast. "Sufficiently fast" is defined as ≤ 800 ms',
        unit: 300,
        good: 'P75(response_latency) ≤ 800ms',
    },
    {
        title: 'Throughput: Worker Efficiency',
        description: 'The number of minutes where an expensive wroker processed enough requests to justify the cost of keeping it alive. "Enough requests" is defined as ≥ 100',
        unit: 60,
        good: 'processed messages ≥ 100',
    },
    {
        title: 'Throughput: Cache hit',
        description: 'The number of requests that were responded via the cache storage instead of going to the origin',
        unit: 'request',
        good: 'responded from cache',
        valid: 'all',
    },
    {
        title: 'Freshness: New Articles',
        description: 'The difference between “Published” timestamp in the browser and “Published” timestamp in the CMS is sufficiently small. "Sufficiently small" is defined as ≤ 60 seconds',
        unit: 'articles',
        good: 'cms_timestamp - web_timestamp ≤ 60',
        valid: 'from breaking news section',
    },
    {
        title: 'Correctness: Main database table',
        description: 'The proportion of records coming into the pipeline that resulted in the correct value coming out.',
        unit: 'records',
        good: 'correct value',
        valid: 'incoming pipeline',
    },
    {
        title: 'Coverage: Customer data',
        description: 'Percentage of customer records that have the minimum information essential for a productive engagement',
        unit: 'pipeline runs',
        good: 'sum(customer_records, containing_required_attributes)',
        valid: 'sum(customer_records)',
    },
    {
        title: 'Completeness: Customer data',
        description: 'Percentage of customer records that have the minimum information essential for a productive engagement',
        unit: 'pipeline runs',
        good: 'sum(customer_records, containing_required_attributes)',
        valid: 'sum(customer_records)',
    },
    {
        title: 'Completeness: Game data',
        description: 'The proportion of hours in which 100% of the games in the data store were processed (no records were skipped). Uses metrics exported by the score pipeline',
        unit: 'pipeline runs',
        good: 'pipeline runs that process 100% of the records',
        valid: 'pipeline runs',
    },
    {
        title: 'Consistency: Replication Lag',
        description: 'The percentage of database write events which are repliacated in a sufficiently quick time. "Sufficiently small" is defined as < 1s',
        unit: 's',
        good: 'replication_lag ≤ 1s',
        valid: 'all database write events',
    },
    {
        title: 'Accuracy: Account Information',
        description: 'Percentage of customer records where the account information matches the information acquired via banking API',
        unit: 'customer records',
        good: 'match_bank_record("name", "phone", "address")',
        valid: 'all',
    },
    {
        title: 'Consistency: Customer data',
        description: 'Percentage of order records from the order intake system that match those of the orderfulfillment system',
        unit: 'order records',
        good: 'sum(match(fulfillment_record, intake_record))',
        valid: 'sum(fulfillment_record)',
    },
    {
        title: 'Consistency: Cache',
        description: 'Percentage cache entries which match the data in the database. In other words, how many records are updated in the cache after they are created/updated/deleted in the database',
        unit: 'cache entries',
        good: 'sum(match(cache_entry, database_record))',
        valid: 'sum(cache_entry)',
    },
    {
        title: 'Validity: Personnel Data',
        description: 'Percentage of active personnel record where the height information is valid',
        unit: 'records',
        good: 'sum(active_personnel_records, 18 <= person.age <= 65)',
        valid: 'sum(active_personnel_records)',
    },
    {
        title: 'Uniqueness: Profile Pictures',
        description: 'For fraud detection or reducing errors, we want to make sure that no two profiles have the same profile picture.',
        unit: 'profile pictures',
        good: 'sum(unique(profile_picture))',
        valid: 'sum(profile_picture)',
    },
    {
        title: 'Incident Handling Speed',
        description: 'The percentage of highly severe incidents that were resolved sufficiently fast. "Sufficiently fast" is defined as < 30m',
        unit: 'incidents',
        good: 'time_to_restore ≤ 30m',
        valid: 'Incident Severity == 1 || 2',
    },
    {
        title: 'Time To Acknolwledge',
        description: 'The percentage of high priority incidents that were acknowledged sufficiently fast. "Sufficiently fast" is defined as < 5m',
        unit: 'incidents',
        good: 'time_to_acknowledge ≤ 5m',
        valid: 'Incident Priority == 1',
    },
].sort(byTitle)

function byTitle(example1, example2) {
    return example1.title.localeCompare(example2.title)
}