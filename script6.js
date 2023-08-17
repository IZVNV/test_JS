const codonToAminoAcid = {
  UCU: "Sérine",
  UCC: "Sérine",
  UCA: "Sérine",
  UCG: "Sérine",
  AGU: "Sérine",
  AGC: "Sérine",
  CCU: "Proline",
  CCC: "Proline",
  CCA: "Proline",
  CCG: "Proline",
  UUA: "Leucine",
  UUG: "Leucine",
  UUU: "Phénylalanine",
  UUC: "Phénylalanine",
  CGU: "Arginine",
  CGC: "Arginine",
  CGA: "Arginine",
  CGG: "Arginine",
  AGA: "Arginine",
  AGG: "Arginine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
};

function translateRNA(rna) {
  let protein = "";

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.slice(i, i + 3);
    if (codonToAminoAcid[codon]) {
      protein += codonToAminoAcid[codon] + "-";
    } else {
      protein += "Inconnu" + "-";
    }
  }

  protein = protein.slice(0, -1);

  return protein;
}

const rna1 = "UUACGCAGUAGA";
const rna2 = "CCGUCGUUGCGCUACAGC";
const rna3 = "CCUCGCCGGUACUUCUCG";

console.log(`ARN: ${rna1}`);
console.log(`Protéines: ${translateRNA(rna1)}`);
console.log("-------------------");

console.log(`ARN: ${rna2}`);
console.log(`Protéines: ${translateRNA(rna2)}`);
console.log("-------------------");

console.log(`ARN: ${rna3}`);
console.log(`Protéines: ${translateRNA(rna3)}`);
