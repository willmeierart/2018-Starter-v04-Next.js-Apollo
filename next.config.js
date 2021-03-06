const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withWorkers = require('@zeit/next-workers')
const nextEnv = require('next-env')
const withOffline = require('next-offline')
const dotenvLoad = require('dotenv-load')
dotenvLoad()
const withNextEnv = nextEnv()

module.exports = withPlugins([
	[
		withBundleAnalyzer,
		{
			analyzeServer: [ 'server', 'both' ].includes(process.env.BUNDLE_ANALYZE),
			analyzeBrowser: [ 'client', 'both' ].includes(process.env.BUNDLE_ANALYZE),
			bundleAnalyzerConfig: {
				server: {
					analyzerMode: 'static',
					reportFilename: '../../bundles/server.html'
				},
				browser: {
					analyzerMode: 'static',
					reportFilename: '../bundles/client.html'
				}
			}
		}
	],
	[ withWorkers ],
	[ withNextEnv ],
	[ withOffline ]
])
