
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/UI',
        '@constants': 'src/constants',
        '@context': 'src/context',
        '@utils': 'src/utils',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@containers': 'src/containers',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@store': 'src/store'
    })(config)
    return config;
}



// const aliasMap = configPaths('./tsconfig.paths.json') // or jsconfig.paths.json
// module.exports = alias(aliasMap)
// module.exports.jest = aliasJest(aliasMap)