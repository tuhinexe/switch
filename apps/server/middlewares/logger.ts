import chalk from "chalk";

export class Logger {
  public log(message: string, data: any) {
    console.log(
      chalk.cyan(`[${new Date().toLocaleString()}] ${message} :`),
      data
    );
  }
  public info(message: string) {
    console.log(chalk.blue(`-[INFO] ${message}`));
  }

  public error(message: string, data?: any) {
    console.log(chalk.red(`-[ERROR] ${message}`), data ?? "");
  }

  public success(message: string, data?: any) {
    console.log(chalk.bgGreen(`-[SUCCESS] ${message}`), data ?? "");
  }

  public warning(message: string) {
    console.log(chalk.yellow(`-[WARN] ${message}`));
  }
}

const reqLogger = (req: any, res: any, next: any) => {
  console.log(
    chalk.green(`[${new Date().toLocaleString()}] ${req.method} : ${req.url}`),
    req.body ?? ""
  );
  next();
};

export default reqLogger;
