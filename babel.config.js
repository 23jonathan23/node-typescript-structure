module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    //Caso queira usar os paths
    // ['module-resolver', {
    //   alias: {
    //     '@config': './src/config',
    //     '@models': './src/models',
    //     '@controllers': './src/controllers',
    //     '@views': './src/views'
    //   }
    // }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}