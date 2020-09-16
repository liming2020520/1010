const path = require("path"),
  glob = require("glob"),
  fs = require("fs")
  const  HtmlWebpackPlugin  = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const entry = {};
const plugins = [new CleanWebpackPlugin()];

//动态加载所有的入口js文件
const files = glob.sync(`./src/*.ts`);
files.forEach((file) => {
  let filename = path.basename(file, ".ts");
  let tplname = `${filename}.html`;
  entry[filename] = file;
  let tplpath = path.join(path.dirname(file), tplname);

  if (fs.existsSync(tplpath)) {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: tplname,
        template: tplpath,
        chunks: ["common", filename],
        inject: true,
      })
    );
  }
});

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "./",
    filename: "chunk.[name].[hash].js",
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          happyPackMode: false,
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        resourceQuery: /\?vue/,
        use: [
          {
            loader: "vue-style-loader",
            options: {
              sourceMap: false,
              shadowMode: false,
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  node: {
    setImmediate: false,
    process: "mock",
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
  plugins: plugins,
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {},
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: "./src",
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
    hot: true,
    host: "127.0.0.1",
    port: 8089,
    compress: true,
    noInfo: false,
    quiet: false,
    disableHostCheck: true,
    publicPath: "/",
    overlay: {
      warnings: true,
    },
  },
  performance: {
    hints: false,
  },
  devtool: "#eval-source-map",
};
