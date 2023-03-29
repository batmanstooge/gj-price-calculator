const colourValueIntegerMapper = (colour: string): number => {
  switch (colour) {
    case "D":
      return 0;
    case "E":
      return 1;
    case "F":
      return 2;
    case "G":
      return 3;
    case "H":
      return 4;
    case "I":
      return 5;
    case "J":
      return 6;
    case "K":
      return 7;
    case "L":
      return 8;
    case "M":
      return 9;
    case "N":
      return 10;
    case "O":
      return 11;
    case "P":
      return 12;
    case "Q":
      return 13;
    case "R":
      return 14;
    case "S":
      return 15;
    case "T":
      return 16;
    case "U":
      return 17;
    case "V":
      return 18;
    case "W":
      return 19;
    case "X":
      return 20;
    case "Y":
      return 21;
    case "Z":
      return 22;
  }
  return -1;
};

const clarityValueIntegerMapper = (clarity: string): number => {
  switch (clarity) {
    case "FL":
      return 0;
    case "IF":
      return 1;
    case "VVS1":
      return 2;
    case "VVS2":
      return 3;
    case "VS1":
      return 4;
    case "VS2":
      return 5;
    case "SI1":
      return 6;
    case "SI2":
      return 7;
    case "I1":
      return 8;
    case "I2":
      return 9;
    case "I3":
      return 10;
  }
  return -1;
};

const cutValueIntegerMapper = (cut: string): number => {
  switch (cut) {
    case "X":
      return 0;
    case "VG":
      return 1;
    case "G":
      return 2;
    case "P":
      return 3;
    case "O1":
      return 4;
    case "O2":
      return 5;
  }
  return -1;
};

const polishValueIntegerMapper = (polish: string): number => {
  switch (polish) {
    case "X":
      return 0;
    case "VG":
      return 1;
    case "G":
      return 2;
    case "P":
      return 3;
  }
  return -1;
};

const symmetryValueIntegerMapper = (symmetry: string): number => {
  switch (symmetry) {
    case "X":
      return 0;
    case "VG":
      return 1;
    case "G":
      return 2;
    case "P":
      return 3;
  }
  return -1;
};

const getPriceAfterDiscount = (
  price: number,
  discount: number,
  variableNumber: number
) => {
  let priceAfterDiscount = price;
  for (let i = 0; i < variableNumber; i++) {
    priceAfterDiscount = getPriceAfterSingleDiscount(
      priceAfterDiscount,
      discount
    );
  }
  return priceAfterDiscount;
};

const getPriceAfterSingleDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const calculatePrice = (
  colour: string,
  clarity: string,
  cut: string,
  polish: string,
  symmetry: string,
  price: number,
  discount: number
) => {
  const colourNumber = colourValueIntegerMapper(colour);
  const clarityNumber = clarityValueIntegerMapper(clarity);
  const cutNumber = cutValueIntegerMapper(cut);
  const polishNumber = polishValueIntegerMapper(polish);
  const symmetryNumber = symmetryValueIntegerMapper(symmetry);
  const priceAfterSymmetryDiscount = getPriceAfterDiscount(
    price,
    discount,
    symmetryNumber
  );
  const priceAfterPolishDiscount = getPriceAfterDiscount(
    priceAfterSymmetryDiscount,
    discount,
    polishNumber
  );
  const priceAfterCutDiscount = getPriceAfterDiscount(
    priceAfterPolishDiscount,
    discount,
    cutNumber
  );

  const priceAfterClarityDiscount = getPriceAfterDiscount(
    priceAfterCutDiscount,
    discount,
    clarityNumber
  );

  const priceAfterColourDiscount = getPriceAfterDiscount(
    priceAfterClarityDiscount,
    discount,
    colourNumber
  );

  return priceAfterColourDiscount;
};
