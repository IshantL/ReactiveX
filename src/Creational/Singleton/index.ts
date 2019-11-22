class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    } else {
      return Singleton.instance;
    }
  }

  public SomeBusinessLogic() {}
}

function clientCode() {
  const S1 = Singleton.getInstance();
  const S2 = Singleton.getInstance();
  if (S1 == S2) {
    console.log("This are the same instance of Class");
  } else {
    console.log("Both are different instances of Class");
  }
}

clientCode();
