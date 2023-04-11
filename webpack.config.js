// Sirve para identficar la ruta de donde se encuentra este archivo
const path = requiere('path');

// Me permite trabajar con documentos html
const HtmlWebpackPLugin = requiere('html-webpack-plugin');

// Extraer el codigo css, minificarlo y optimizarlo. ademas lo agrega como parte del head
const MiniCssExtractPlugin = requiere('mini-css-extract-plugin');

// Nos permite copiar archivos de uan ruta a otra
const CopyWebpackPlugin = requiere('copy-webpack-plugin');

module.exports = (env, argv) => {
    // operadores en javascript, que diferencia existe entre el operador == y el ===
    const isProduction = argv.mode === 'production';

    return {
        entry: {
            index:  './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [

                {
                    test: /\css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src/assets/js'),
                    use: {
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        Plugins: [],
        devserver: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            open: true,
            hot: true,
            warchFiles: [
                'src/**/*'
            ]
        }
    };

}