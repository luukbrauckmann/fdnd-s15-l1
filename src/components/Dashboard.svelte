<script>
	const players = Array.from({ length: 20 }, (_, index) => ({
		jersey_number: index + 1,
		name: 'Hendrik Peters',
		goals: 1,
		assists: 2,
		blocks: 3,
		turnovers: 4
	}));

    const stats = Array.from({ length: 20 }, (_, index) => ({
        jersey_number: index + 1,
        name: 'Hendrik Peters',
        time: '12s',
        team: (Math.random() < 0.5) ? 'a' : 'b'
    }))
</script>

<section class="page">
	<header class="page__header">
		<h1>Commentator Dashboard</h1>
	</header>

	<div class="page__content">
		<section class="team">
			<header class="team__header">
				<h2>
					<img src="/images/raimon.png" alt="" height="32" width="32" />
					<span>Raimon</span>
				</h2>

				<p>Engeland | London</p>
			</header>

			<div class="team__content">
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>Name</th>
							<th>Goals</th>
							<th>Assists</th>
							<th>Blocks</th>
							<th>Turnovers</th>
						</tr>
					</thead>
					<tbody>
						{#each players as player}
							<tr>
								<td>
									<span class="jersey-number">{player.jersey_number}</span>
								</td>
								<td>{player.name}</td>
								<td>
									<span class="statistic-goals">{player.goals}</span>
								</td>
								<td>
									<span class="statistic-assists">{player.assists}</span>
								</td>
								<td>
									<span class="statistic-blocks">{player.blocks}</span>
								</td>
								<td>
									<span class="statistic-turnovers">{player.turnovers}</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<section class="statistics">
			<header class="statistics__header">
				<h2>Statistics</h2>
			</header>

			<div class="statistics__content">
				<section class="status">
                    <h3>Match status</h3>

                    <p>LIVE</p>
                    <p>Mixed | 2 | Arena | Finale</p>
                </section>

				<section class="scoreboard">
                    <h3>Scoreboard</h3>

					<article>
						<img src="/images/raimon.png" alt="" height="64" width="64" />
						<h4>Raimon</h4>
					</article>
					<p>0 - 0</p>
					<article>
						<img src="/images/chaos-angel-zero.png" alt="" height="64" width="64" />
						<h4>Royal Academy</h4>
					</article>
				</section>

                <section class="timeline">
                    <h3>Timeline</h3>

                    <ul class="timeline-list">
                        {#each stats as stat}   
                            <li class="timeline-list__item--{stat.team}">
                                <p class="jersey-number">{ stat.jersey_number }</p>
                                <p>{ stat.name }</p>
                                <p>{ stat.time}</p>
    
                                <p>8 - 3</p>
                            </li>
                        {/each}
                    </ul>
                </section>
			</div>
		</section>

		<section class="team">
			<header class="team__header">
				<h2>
					<img src="/images/chaos-angel-zero.png" alt="" height="32" width="32" />
					<span>Royal Academy</span>
				</h2>

				<p>India | Mumbai</p>
			</header>

			<div class="team__content">
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>Name</th>
							<th>Goals</th>
							<th>Assists</th>
							<th>Blocks</th>
							<th>Turnovers</th>
						</tr>
					</thead>
					<tbody>
						{#each players as player}
							<tr>
								<td>
									<span class="jersey-number">{player.jersey_number}</span>
								</td>
								<td>{player.name}</td>
								<td>
									<span class="statistic-goals">{player.goals}</span>
								</td>
								<td>
									<span class="statistic-assists">{player.assists}</span>
								</td>
								<td>
									<span class="statistic-blocks">{player.blocks}</span>
								</td>
								<td>
									<span class="statistic-turnovers">{player.turnovers}</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>
	</div>
</section>

<style>
	.page {
		margin-right: calc(10% + 2rem);
		height: 100vh;
		font-size: 0.75rem;
	}

    /* Inclusively Hidden */
	.page__header,
	.statistics__header,
	.team__content table thead,
    .status h3,
    .timeline h3,
    .scoreboard h3 {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.page__content {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1em;
		padding: 1rem;
	}

	.team {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5em;
	}

	.team__header {
		margin-bottom: 0px;
	}

	.scoreboard,
	.timeline,
	.team__header {
		background: white;
		padding: 1em;
		border: 1px solid white;
		border-radius: 0.5rem;
	}

	.team__header h2,
	.team__header p,
	.statistics__header h2 {
		font-size: 1.125rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.team:last-child .team__header h2,
	.team:last-child .team__header p {
		flex-flow: row-reverse;
	}

	.team__content {
		flex: 1;
	}

	.team__content table {
		width: 100%;
		height: 100%;
		border-collapse: collapse;
		border: 1px solid transparent;
		border-radius: 1em;
		background: white;
	}

	.team__content table tbody {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 100%;
	}

	.team__content table tr {
		flex: 1 1 0px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		border-bottom: 1px solid #d3d3d3;
	}

	.team__content table tr:last-child {
		border-bottom: none;
	}

	.team:last-child .team__content table tr {
		flex-flow: row-reverse nowrap;
	}

	.team__content table td {
		padding: 0.5em;
	}

	.team__content table td:nth-child(2) {
		flex: 1;
	}

	.team:last-child .team__content table td:nth-child(2) {
		text-align: right;
	}

	.jersey-number,
	[class^='statistic-'] {
		--size: 2.167em;

		display: inline-block;
		padding: 0.5em;
		width: var(--size);
		height: var(--size);
		text-align: center;
		border: 1px solid black;
		border-radius: calc(1em - 0.5em);
		line-height: 1;
		vertical-align: middle;
	}

	[class^='statistic-'] {
		--color: white;

		color: white;
		background: var(--color);
		border-color: var(--color);
	}

	.statistic-goals {
		--color: #18d02b;
	}

	.statistic-assists {
		--color: #2974e4;
	}

	.statistic-blocks {
		--color: #ed4444;
	}

	.statistic-turnovers {
		--color: #ffc738;
	}

	[class^='statistic-']:empty {
		--color: #f4f5fa;
	}

    .statistics {
        display: flex;
        flex-flow: column nowrap;
    }

	.statistics__content {
        flex: 1;
		display: flex;
		flex-flow: column nowrap;
		gap: 1em;
	}

    .status {
        display: flex;
        justify-content: space-between;
        gap: 1em;
    }

    .status p:nth-of-type(1) {
        padding: 1em;
        padding-left: 3em;
        background: #EF1111;
        border: 1px solid #EF1111;
		border-radius: 0.5rem;
        color: white;
        position: relative;
    }
    .status p:nth-of-type(1)::after {
        --size: .5em;

        content: '';
        position: absolute;
        width: var(--size);
        height: var(--size);
        background: white;
        border-radius: 50%;
        left: 1em;
        top: 1em;
    }

    .status p:nth-of-type(2) {
        flex: 1;
        padding: 1em;
        background: white;
        border: 1px solid white;
        border-radius: .5em;
        text-align: center;
    }

	.scoreboard {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.scoreboard * {
		text-align: center;
	}

	.scoreboard p {
		margin-block: auto;
	}

    .timeline {
        flex: 1;
    }

	.timeline-list {
		list-style: none;
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) minmax(0, 1fr) auto minmax(0, 1fr) minmax(0, 1fr) auto;
        grid-auto-rows: min-content;
		grid-template-areas: 'a b c d e f g';
        gap: .5em;
	}

	[class^='timeline-list__item'] {
		display: grid;
        grid-column: 1 / -1;
		grid-template-columns: subgrid;
	}

    [class^='timeline-list__item'] p {
        margin-block: auto;
    }

	[class^='timeline-list__item'] p:nth-of-type(1) {
		grid-area: a;
	}
	[class^='timeline-list__item'] p:nth-of-type(2) {
		grid-area: b;
	}
	[class^='timeline-list__item'] p:nth-of-type(3) {
		grid-area: c;
	}
	[class^='timeline-list__item'] p:nth-of-type(4) {
		grid-area: d;
        text-align: center;
	}

    .timeline-list__item--b * {
        text-align: right;
    }

    .timeline-list__item--b p:first-child {
        text-align: center;
    }

	.timeline-list__item--b p:nth-of-type(1) {
		grid-area: g;
	}
	.timeline-list__item--b p:nth-of-type(2) {
		grid-area: f;
	}
	.timeline-list__item--b p:nth-of-type(3) {
		grid-area: e;
    }
</style>
