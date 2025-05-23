// Product categories from Excel files

// products.js - Complete with all products from Excel files

const productData = {
  chemicals: [
    // From Chemicals 1.xlsx
    { id: 1, name: "Acacia gum", unit: "500g", category: "chemicals" },
    { id: 2, name: "Acetaldhyde", unit: "500ml", category: "chemicals" },
    { id: 3, name: "acetanilide", unit: "Kg", category: "chemicals" },
    { id: 4, name: "acetic acid glacial", unit: "Liter", category: "chemicals" },
    { id: 5, name: "acetone", unit: "Liter", category: "chemicals" },
    { id: 6, name: "Acetophenone", unit: "500ml", category: "chemicals" },
    { id: 7, name: "Activiated charcoal", unit: "500g", category: "chemicals" },
    { id: 8, name: "Acrylamide", unit: "500g", category: "chemicals" },
    { id: 9, name: "Agar agar", unit: "500g", category: "chemicals" },
    { id: 10, name: "Agarose", unit: "100g", category: "chemicals" },
    { id: 11, name: "Alanine", unit: "25g", category: "chemicals" },
    { id: 12, name: "Albumin egg", unit: "500g", category: "chemicals" },
    { id: 13, name: "Alpha naphthylamine", unit: "500g", category: "chemicals" },
    { id: 14, name: "beta naphthylamine", unit: "500g", category: "chemicals" },
    { id: 15, name: "Aluminium chloride", unit: "Kg", category: "chemicals" },
    { id: 16, name: "Aluminium chlorohydrate", unit: "500g", category: "chemicals" },
    { id: 17, name: "Aluminium hydroxide", unit: "500g", category: "chemicals" },
    { id: 18, name: "Aluminium sulphate", unit: "500g", category: "chemicals" },
    { id: 19, name: "Ammonia solution 25%", unit: "Liter", category: "chemicals" },
    { id: 20, name: "Ammonia solution 33%", unit: "Liter", category: "chemicals" },
    { id: 21, name: "Ammonium acetate", unit: "500g", category: "chemicals" },
    { id: 22, name: "Ammonium benzoate", unit: "500g", category: "chemicals" },
    { id: 23, name: "Ammonium bicarbonate", unit: "500g", category: "chemicals" },
    { id: 24, name: "Ammonium carbonate", unit: "500g", category: "chemicals" },
    { id: 25, name: "Ammonium chloride", unit: "500g", category: "chemicals" },
    { id: 26, name: "Ammonium citrate", unit: "500g", category: "chemicals" },
    { id: 27, name: "Ammonium dihydrogen phosphate", unit: "500g", category: "chemicals" },
    { id: 28, name: "Ammonium formate", unit: "500g", category: "chemicals" },
    { id: 29, name: "Ammonium oxalate", unit: "500g", category: "chemicals" },
    { id: 30, name: "Ammonium persulfate", unit: "500g", category: "chemicals" },
    { id: 31, name: "Ammonium sulphate", unit: "500g", category: "chemicals" },
    { id: 32, name: "Ammonium sulfide", unit: "Liter", category: "chemicals" },
    { id: 33, name: "Ammonium metavanadate", unit: "100g", category: "chemicals" },
    { id: 34, name: "Ammonium molybdate", unit: "500g", category: "chemicals" },
    { id: 35, name: "Ammonium tartarate", unit: "500g", category: "chemicals" },
    { id: 36, name: "Ammonium thiocyanate", unit: "500g", category: "chemicals" },
    { id: 37, name: "Amylase", unit: "100g", category: "chemicals" },
    { id: 38, name: "Anthracene", unit: "250g", category: "chemicals" },
    { id: 39, name: "Anthrone reagent", unit: "25g", category: "chemicals" },
    { id: 40, name: "Aniline", unit: "Liter", category: "chemicals" },
    { id: 41, name: "Aniline HCl", unit: "250g", category: "chemicals" },
    { id: 42, name: "Aniline sulphate", unit: "250g", category: "chemicals" },
    { id: 43, name: "Antimony trichloride", unit: "500g", category: "chemicals" },
    { id: 44, name: "Ascorbic acid", unit: "500g", category: "chemicals" },
    { id: 45, name: "Aspartic acid", unit: "100g", category: "chemicals" },
    { id: 46, name: "Aspirin (Acetylsalicylic acid)", unit: "500g", category: "chemicals" },
    { id: 47, name: "Barium chloride", unit: "500g", category: "chemicals" },
    { id: 48, name: "Barium sulphate", unit: "500g", category: "chemicals" },
    { id: 49, name: "fuchsin acid", unit: "100g", category: "chemicals" },
    { id: 50, name: "basic fuchsin", unit: "100g", category: "chemicals" },
    { id: 51, name: "beef extract", unit: "500g", category: "chemicals" },
    { id: 52, name: "beeswax white", unit: "500g", category: "chemicals" },
    { id: 53, name: "bendict solution", unit: "Liter", category: "chemicals" },
    { id: 54, name: "Benzaldhyde", unit: "Liter", category: "chemicals" },
    { id: 55, name: "Benzene", unit: "Liter", category: "chemicals" },
    { id: 56, name: "benzoic acid", unit: "500g", category: "chemicals" },
    { id: 57, name: "benzyl alcohol", unit: "Liter", category: "chemicals" },
    { id: 58, name: "benzyl adenine", unit: "25g", category: "chemicals" },
    { id: 59, name: "benzyl amino adenine", unit: "25g", category: "chemicals" },
    { id: 60, name: "bile salt", unit: "100g", category: "chemicals" },
    { id: 61, name: "Bismuth nitrate", unit: "500g", category: "chemicals" },
    { id: 62, name: "Bismuth oxychloride", unit: "25g", category: "chemicals" },
    { id: 63, name: "Bismuth subnitrate", unit: "500g", category: "chemicals" },
    { id: 64, name: "borax", unit: "500g", category: "chemicals" },
    { id: 65, name: "boric acid", unit: "500g", category: "chemicals" },
    { id: 66, name: "Bovine serum albumin", unit: "100g", category: "chemicals" },
    { id: 67, name: "Bromocresol green", unit: "25g", category: "chemicals" },
    { id: 68, name: "Bromophenol blue", unit: "100g", category: "chemicals" },
    { id: 69, name: "Bromine", unit: "100ml", category: "chemicals" },
    { id: 70, name: "bitter almond oil", unit: "Liter", category: "chemicals" },
    { id: 71, name: "Bis acrylamide", unit: "100g", category: "chemicals" },
    { id: 72, name: "Buffer solution Ph 4, 7, 10", unit: "Liter", category: "chemicals" },
    { id: 73, name: "Butanol", unit: "Liter", category: "chemicals" },
    { id: 74, name: "catechol", unit: "500g", category: "chemicals" },
    { id: 75, name: "calcium carbonate", unit: "500g", category: "chemicals" },
    { id: 76, name: "calcium chloride", unit: "500g", category: "chemicals" },
    { id: 77, name: "calcium oxide", unit: "500g", category: "chemicals" },
    { id: 78, name: "calcium phosphate", unit: "500g", category: "chemicals" },
    { id: 79, name: "calcium sulphate", unit: "500g", category: "chemicals" },
    { id: 80, name: "calcium nitrate", unit: "500g", category: "chemicals" },
    { id: 81, name: "carbon disulphide", unit: "Liter", category: "chemicals" },
    { id: 82, name: "Carbon tetrachloride", unit: "Liter", category: "chemicals" },
    { id: 83, name: "Carbol fuchsin", unit: "100g", category: "chemicals" },
    { id: 84, name: "carmin stain", unit: "25g", category: "chemicals" },
    { id: 85, name: "Carnuba wax", unit: "500g", category: "chemicals" },
    { id: 86, name: "carpabol", unit: "250g", category: "chemicals" },
    { id: 87, name: "castor oil", unit: "Liter", category: "chemicals" },
    { id: 88, name: "casien", unit: "500g", category: "chemicals" },
    { id: 89, name: "cadmium chloride", unit: "500g", category: "chemicals" },
    { id: 90, name: "cadmium sulphate", unit: "500g", category: "chemicals" },
    { id: 91, name: "canada balsm", unit: "100ml", category: "chemicals" },
    { id: 92, name: "caffiene", unit: "500g", category: "chemicals" },
    { id: 93, name: "cetostearyl alcohol", unit: "500g", category: "chemicals" },
    { id: 94, name: "cetrimide", unit: "500g", category: "chemicals" },
    { id: 95, name: "cedar oil", unit: "100ml", category: "chemicals" },
    { id: 96, name: "cellulose soluble", unit: "500g", category: "chemicals" },
    { id: 97, name: "chalk", unit: "500g", category: "chemicals" },
    { id: 98, name: "chitosan", unit: "500g", category: "chemicals" },
    { id: 99, name: "Chitosan low molecular wt 20KD", unit: "100g", category: "chemicals" },
    { id: 100, name: "chloroacetone", unit: "250ml", category: "chemicals" },
    { id: 101, name: "chloroform", unit: "Liter", category: "chemicals" },
    { id: 102, name: "cinnamic acid", unit: "500g", category: "chemicals" },
    { id: 103, name: "cremophore", unit: "Kg", category: "chemicals" },
    { id: 104, name: "cholesterol", unit: "100g", category: "chemicals" },
    { id: 105, name: "chromium chloride", unit: "500g", category: "chemicals" },
    { id: 106, name: "chromium sulphate", unit: "500g", category: "chemicals" },
    { id: 107, name: "citric acid anhydrous", unit: "500g", category: "chemicals" },
    { id: 108, name: "clove oil", unit: "Liter", category: "chemicals" },
    { id: 109, name: "cobalt chloride", unit: "500g", category: "chemicals" },
    { id: 110, name: "Cobalt sulphate", unit: "500g", category: "chemicals" },
    { id: 111, name: "Cobalt nitrate", unit: "500g", category: "chemicals" },
    { id: 112, name: "cocoa butter", unit: "500g", category: "chemicals" },
    { id: 113, name: "Cocamidopropyl betaine", unit: "Kg", category: "chemicals" },
    { id: 114, name: "coconut oil", unit: "Liter", category: "chemicals" },
    { id: 115, name: "congo red", unit: "100g", category: "chemicals" },
    { id: 116, name: "copper acetate mono", unit: "500g", category: "chemicals" },
    { id: 117, name: "copper chloride", unit: "500g", category: "chemicals" },
    { id: 118, name: "copper sulphate penta", unit: "500g", category: "chemicals" },
    { id: 119, name: "copper nitrate", unit: "500g", category: "chemicals" },
    { id: 120, name: "colchicine", unit: "1g", category: "chemicals" },
    { id: 121, name: "crystal violet", unit: "100g", category: "chemicals" },
    { id: 122, name: "Bromide Cetyltrimethylammonium (CTAB)", unit: "100g", category: "chemicals" },
    { id: 123, name: "Decyl glucoside", unit: "500g", category: "chemicals" },
    { id: 124, name: "Dextrin", unit: "500g", category: "chemicals" },
    { id: 125, name: "Diethyl ether", unit: "Liter", category: "chemicals" },
    { id: 126, name: "Dimethylformamide (DMF)", unit: "Liter", category: "chemicals" },
    { id: 127, name: "Dimethylglyoxime (DMG)", unit: "500g", category: "chemicals" },
    { id: 128, name: "Dimethylsulfoxide (DMSO)", unit: "Liter", category: "chemicals" },
    { id: 129, name: "Diphenyl amine", unit: "500g", category: "chemicals" },
    { id: 130, name: "3,5 dinitrosalicylic acid", unit: "100g", category: "chemicals" },
    { id: 131, name: "2,4 dinitrophenyl hydrazine", unit: "100g", category: "chemicals" },
    { id: 132, name: "Dioxane 1,4", unit: "Liter", category: "chemicals" },
    { id: 133, name: "EDTA tetrasodium", unit: "500g", category: "chemicals" },
    { id: 134, name: "EDTA disodium", unit: "500g", category: "chemicals" },
    { id: 135, name: "eosin yellow", unit: "25g", category: "chemicals" },
    { id: 136, name: "Eriochrome black T", unit: "25g", category: "chemicals" },
    { id: 137, name: "ethanol 70%", unit: "Liter", category: "chemicals" },
    { id: 138, name: "ethanol 96%", unit: "Liter", category: "chemicals" },
    { id: 139, name: "ethanol 99.9%", unit: "Liter", category: "chemicals" },
    { id: 140, name: "ethyl acetate", unit: "Liter", category: "chemicals" },
    { id: 141, name: "ethyl cyanoacetate", unit: "Liter", category: "chemicals" },
    { id: 142, name: "ethylene glycol", unit: "Liter", category: "chemicals" },
    { id: 143, name: "Fehling A", unit: "Liter", category: "chemicals" },
    { id: 144, name: "Fehling B", unit: "Liter", category: "chemicals" },
    { id: 145, name: "ferric chloride anhydrous", unit: "500g", category: "chemicals" },
    { id: 146, name: "ferric chloride hexahydrate", unit: "500g", category: "chemicals" },
    { id: 147, name: "ferric sulphate", unit: "500g", category: "chemicals" },
    { id: 148, name: "ferric nitrate", unit: "500g", category: "chemicals" },
    { id: 149, name: "ferric ammonium sulphate", unit: "500g", category: "chemicals" },
    { id: 150, name: "ferrous ammonium sulphate", unit: "500g", category: "chemicals" },
    { id: 151, name: "ferrous sulphate", unit: "500g", category: "chemicals" },
    { id: 152, name: "formalin / formaldhyde", unit: "Liter", category: "chemicals" },
    { id: 153, name: "formic acid", unit: "Liter", category: "chemicals" },
    { id: 154, name: "Folin reagent", unit: "500ml", category: "chemicals" },
    { id: 155, name: "Flourescien", unit: "100g", category: "chemicals" },
    { id: 156, name: "fructose", unit: "500g", category: "chemicals" },
    { id: 157, name: "furfural", unit: "500ml", category: "chemicals" },
    { id: 158, name: "gallic acid", unit: "100g", category: "chemicals" },
    { id: 159, name: "gibbrerellic acid", unit: "25g", category: "chemicals" },
    { id: 160, name: "giemsa stain", unit: "25g", category: "chemicals" },
    { id: 161, name: "gelatin", unit: "500g", category: "chemicals" },
    { id: 162, name: "glucose / dextrose monohydrate", unit: "500g", category: "chemicals" },
    { id: 163, name: "gum tragacanth", unit: "500g", category: "chemicals" },
    { id: 164, name: "glutaraldehyde 50%", unit: "Liter", category: "chemicals" },
    { id: 165, name: "Grapeseed Oil", unit: "Liter", category: "chemicals" },
    { id: 166, name: "glycerol", unit: "Liter", category: "chemicals" },
    { id: 167, name: "glyceryl monostearate", unit: "500g", category: "chemicals" },
    { id: 168, name: "glycine", unit: "500g", category: "chemicals" },
    { id: 169, name: "glycolic acid", unit: "500ml", category: "chemicals" },
    { id: 170, name: "Guaiacol", unit: "250ml", category: "chemicals" },
    { id: 171, name: "hematoxylin stain", unit: "25g", category: "chemicals" },
    { id: 172, name: "hexane 60-80", unit: "Liter", category: "chemicals" },
    { id: 173, name: "Hexane normal", unit: "Liter", category: "chemicals" },
    { id: 174, name: "Hyaluronic acid 10K", unit: "500g", category: "chemicals" },
    { id: 175, name: "Hydrochloric acid (HCl) 33%", unit: "Liter", category: "chemicals" },
    { id: 176, name: "Hydrochloric acid (HCl) 37%", unit: "Liter", category: "chemicals" },
    { id: 177, name: "Hydroflouric acid (HF) 40%", unit: "Liter", category: "chemicals" },
    { id: 178, name: "hydrogen peroxide 50%", unit: "Liter", category: "chemicals" },
    { id: 179, name: "hydroquinone", unit: "500g", category: "chemicals" },
    { id: 180, name: "Hydroxyl amine HCl", unit: "100g", category: "chemicals" },
    { id: 181, name: "Isoamyl alcohol", unit: "Liter", category: "chemicals" },
    { id: 182, name: "Iso octane", unit: "Liter", category: "chemicals" },
    { id: 183, name: "isopropanol", unit: "Liter", category: "chemicals" },
    { id: 184, name: "Isopropyl myristate", unit: "Liter", category: "chemicals" },
    { id: 185, name: "2,6 indophenol dichlorophenol sodium salt", unit: "25g", category: "chemicals" },
    { id: 186, name: "Indole butyric acid", unit: "25g", category: "chemicals" },
    { id: 187, name: "Indole 3 acetic acid", unit: "25g", category: "chemicals" },
    { id: 188, name: "iodine", unit: "500g", category: "chemicals" },
    { id: 189, name: "Iodine solution", unit: "Liter", category: "chemicals" },
    { id: 190, name: "Iron oxide (black, brown, red, yellow)", unit: "500g", category: "chemicals" },
    { id: 191, name: "Jojoba oil", unit: "Liter", category: "chemicals" },
    { id: 192, name: "Kaolin", unit: "500g", category: "chemicals" },
    { id: 193, name: "kojic acid", unit: "500g", category: "chemicals" },
    { id: 194, name: "L-cysteine HCl", unit: "100g", category: "chemicals" },
    { id: 195, name: "lanolin / wool fat", unit: "500g", category: "chemicals" },
    { id: 196, name: "lactose", unit: "500g", category: "chemicals" },
    { id: 197, name: "lactic acid", unit: "Liter", category: "chemicals" },
    { id: 198, name: "lead acetate", unit: "500g", category: "chemicals" },
    { id: 199, name: "lead subacetate", unit: "500g", category: "chemicals" },
    { id: 200, name: "lead nitrate", unit: "500g", category: "chemicals" },
    { id: 201, name: "leishman stain", unit: "25g", category: "chemicals" },
    { id: 202, name: "lysozyme", unit: "1g", category: "chemicals" },
    { id: 203, name: "L-methionine", unit: "100g", category: "chemicals" },
    { id: 204, name: "Lysine", unit: "500g", category: "chemicals" },
    { id: 205, name: "malachite green", unit: "100g", category: "chemicals" },
    { id: 206, name: "maleic acid", unit: "100g", category: "chemicals" },
    { id: 207, name: "malt extract", unit: "500g", category: "chemicals" },
    { id: 208, name: "Maltose", unit: "500g", category: "chemicals" },
    { id: 209, name: "magnesium carbonate", unit: "500g", category: "chemicals" },
    { id: 210, name: "magnesium chloride", unit: "500g", category: "chemicals" },
    { id: 211, name: "magnesium metal turning", unit: "250g", category: "chemicals" },
    { id: 212, name: "magnesium oxide heavy", unit: "500g", category: "chemicals" },
    { id: 213, name: "magnesium sulphate", unit: "500g", category: "chemicals" },
    { id: 214, name: "Malononitrile", unit: "100ml", category: "chemicals" },
    { id: 215, name: "manganese chloride", unit: "500g", category: "chemicals" },
    { id: 216, name: "manganese sulphate", unit: "500g", category: "chemicals" },
    { id: 217, name: "mannitol", unit: "500g", category: "chemicals" },
    { id: 218, name: "menthol crystal", unit: "500g", category: "chemicals" },
    { id: 219, name: "mercapto ethanol", unit: "100ml", category: "chemicals" },
    { id: 220, name: "Mercurous nitrate", unit: "500g", category: "chemicals" },
    { id: 221, name: "mercuric chloride", unit: "100g", category: "chemicals" },
    { id: 222, name: "mercuric oxide red", unit: "25g", category: "chemicals" },
    { id: 223, name: "mercuric oxide yellow", unit: "25g", category: "chemicals" },
    { id: 224, name: "mercuric iodide", unit: "100g", category: "chemicals" },
    { id: 225, name: "mercuric sulphate", unit: "500g", category: "chemicals" },
    { id: 226, name: "methanol", unit: "Liter", category: "chemicals" },
    { id: 227, name: "methylene chloride / dichloromethane", unit: "Liter", category: "chemicals" },
    { id: 228, name: "methylene blue", unit: "25g", category: "chemicals" },
    { id: 229, name: "methyl orange", unit: "25g", category: "chemicals" },
    { id: 230, name: "methyl red", unit: "25g", category: "chemicals" },
    { id: 231, name: "Molybdic acid", unit: "500g", category: "chemicals" },
    { id: 232, name: "Murexide", unit: "25g", category: "chemicals" },
    { id: 233, name: "naphthalene", unit: "500g", category: "chemicals" },
    { id: 234, name: "naphthalene acetic acid", unit: "500g", category: "chemicals" },
    { id: 235, name: "naphthol (Alpha)", unit: "500g", category: "chemicals" },
    { id: 236, name: "naphthol (Beta)", unit: "500g", category: "chemicals" },
    { id: 237, name: "nickel chloride", unit: "500g", category: "chemicals" },
    { id: 238, name: "nickel sulphate", unit: "500g", category: "chemicals" },
    { id: 239, name: "nigrosin", unit: "25g", category: "chemicals" },
    { id: 240, name: "ninhydrin", unit: "100g", category: "chemicals" },
    { id: 241, name: "nitric acid 50-55%", unit: "Liter", category: "chemicals" },
    { id: 242, name: "neutral red", unit: "100g", category: "chemicals" },
    { id: 243, name: "Nutrient agar / broth", unit: "500g", category: "chemicals" },
    { id: 244, name: "octanol normal", unit: "Liter", category: "chemicals" },
    { id: 245, name: "oleic acid", unit: "Liter", category: "chemicals" },
    { id: 246, name: "olive oil", unit: "Liter", category: "chemicals" },
    { id: 247, name: "oxalic acid", unit: "500g", category: "chemicals" },
    { id: 248, name: "ortho phosphoric acid", unit: "Liter", category: "chemicals" },
    { id: 249, name: "O-phenylene diamine", unit: "500g", category: "chemicals" },
    { id: 250, name: "P-phenylene diamine", unit: "500g", category: "chemicals" },
    { id: 251, name: "paraformaldehyde", unit: "500g", category: "chemicals" },
    { id: 252, name: "panthenol", unit: "Kg", category: "chemicals" },
    { id: 253, name: "Indole reagent (P-dimethyl aminobenzaldhyde)", unit: "100g", category: "chemicals" },
    { id: 254, name: "paraffin oil", unit: "Liter", category: "chemicals" },
    { id: 255, name: "paraffin wax", unit: "500g", category: "chemicals" },
    { id: 256, name: "Parafoid solution", unit: "Liter", category: "chemicals" },
    { id: 257, name: "peptone", unit: "500g", category: "chemicals" },
    { id: 258, name: "pippermint oil", unit: "Liter", category: "chemicals" },
    { id: 259, name: "pepsin", unit: "100g", category: "chemicals" },
    { id: 260, name: "petroleum ether 60-80", unit: "Liter", category: "chemicals" },
    { id: 261, name: "petroleum ether 40-60", unit: "2.5L", category: "chemicals" },
    { id: 262, name: "phenol crystal", unit: "500g", category: "chemicals" },
    { id: 263, name: "phenolphthalein", unit: "100g", category: "chemicals" },
    { id: 264, name: "phenol red", unit: "100g", category: "chemicals" },
    { id: 265, name: "Phenylhydrazine HCl", unit: "500g", category: "chemicals" },
    { id: 266, name: "phthalic acid", unit: "500g", category: "chemicals" },
    { id: 267, name: "phthalic anhydride", unit: "500g", category: "chemicals" },
    { id: 268, name: "Phthalimide", unit: "500g", category: "chemicals" },
    { id: 269, name: "polyethylene glycol 400", unit: "Liter", category: "chemicals" },
    { id: 270, name: "polyethylene glycol 4000", unit: "500g", category: "chemicals" },
    { id: 271, name: "polyethylene glycol 6000", unit: "500g", category: "chemicals" },
    { id: 272, name: "potassium acetate", unit: "500g", category: "chemicals" },
    { id: 273, name: "potassium aluminium sulphate", unit: "500g", category: "chemicals" },
    { id: 274, name: "potassium benzoate", unit: "500g", category: "chemicals" },
    { id: 275, name: "Potassium bromide", unit: "500g", category: "chemicals" },
    { id: 276, name: "potassium cabonate", unit: "500g", category: "chemicals" },
    { id: 277, name: "potassium chloride", unit: "500g", category: "chemicals" },
    { id: 278, name: "potassium cyanide", unit: "500g", category: "chemicals" },
    { id: 279, name: "potassium chromate", unit: "500g", category: "chemicals" },
    { id: 280, name: "potassium dichromate", unit: "500g", category: "chemicals" },
    { id: 281, name: "potassium ferrocyanide", unit: "500g", category: "chemicals" },
    { id: 282, name: "potassium ferricyanide", unit: "500g", category: "chemicals" },
    { id: 283, name: "potassium hydroxide", unit: "500g", category: "chemicals" },
    { id: 284, name: "Potassium nitrate", unit: "500g", category: "chemicals" },
    { id: 285, name: "potassium oxalate", unit: "500g", category: "chemicals" },
    { id: 286, name: "potassium iodate", unit: "500g", category: "chemicals" },
    { id: 287, name: "potassium iodide", unit: "500g", category: "chemicals" },
    { id: 288, name: "potassium permenganate", unit: "500g", category: "chemicals" },
    { id: 289, name: "potassium persulfate", unit: "500g", category: "chemicals" },
    { id: 290, name: "Potassium tartrate", unit: "500g", category: "chemicals" },
    { id: 291, name: "potassium phosphate tribasic", unit: "500g", category: "chemicals" },
    { id: 292, name: "potassium phosphate dibasic", unit: "500g", category: "chemicals" },
    { id: 293, name: "potassium phosphate monobasic", unit: "500g", category: "chemicals" },
    { id: 294, name: "Potassium phthalate", unit: "500g", category: "chemicals" },
    { id: 295, name: "potassium sorbate", unit: "500g", category: "chemicals" },
    { id: 296, name: "potassium sulphate", unit: "500g", category: "chemicals" },
    { id: 297, name: "potassium thiocyanate", unit: "500g", category: "chemicals" },
    { id: 298, name: "picric acid", unit: "100ml", category: "chemicals" },
    { id: 299, name: "red alcohol", unit: "Liter", category: "chemicals" },
    { id: 300, name: "Pyridine", unit: "500ml", category: "chemicals" },
    { id: 301, name: "renin", unit: "100g", category: "chemicals" },
    { id: 302, name: "resazurin sodium", unit: "5g", category: "chemicals" },
    { id: 303, name: "phenoxyethanol", unit: "500g", category: "chemicals" },
    { id: 304, name: "propylene glycol", unit: "Liter", category: "chemicals" },
    { id: 305, name: "Polyvinyl alcohol (PVA)", unit: "500g", category: "chemicals" },
    { id: 306, name: "Polyvinyl Pyrrolidone (PVP)", unit: "500g", category: "chemicals" },
    { id: 307, name: "pyrogallol", unit: "100g", category: "chemicals" },
    { id: 308, name: "PQ7", unit: "Kg", category: "chemicals" },
    { id: 309, name: "Quercetin", unit: "5g", category: "chemicals" },
    { id: 310, name: "witepsol", unit: "500g", category: "chemicals" },
    { id: 311, name: "resorcinol", unit: "500g", category: "chemicals" },
    { id: 312, name: "rosaline", unit: "100g", category: "chemicals" },
    { id: 313, name: "Rose bengal", unit: "25g", category: "chemicals" },
    { id: 314, name: "ribose", unit: "250g", category: "chemicals" },
    { id: 315, name: "RPMI", unit: "500ml", category: "chemicals" },
    { id: 316, name: "safranine", unit: "100g", category: "chemicals" },
    { id: 317, name: "salicylic acid", unit: "500g", category: "chemicals" },
    { id: 318, name: "Schiff reagent", unit: "Liter", category: "chemicals" },
    { id: 319, name: "shea butter", unit: "500g", category: "chemicals" },
    { id: 320, name: "selefonof solution", unit: "Liter", category: "chemicals" },
    { id: 321, name: "selenium", unit: "100g", category: "chemicals" },
    { id: 322, name: "silica gel", unit: "Kg", category: "chemicals" },
    { id: 323, name: "silicon dioxide", unit: "500g", category: "chemicals" },
    { id: 324, name: "silicon oil", unit: "500ml", category: "chemicals" },
    { id: 325, name: "silver nitrate", unit: "100g", category: "chemicals" },
    { id: 326, name: "silver sulphate", unit: "25g", category: "chemicals" },
    { id: 327, name: "sodium acetate", unit: "500g", category: "chemicals" },
    { id: 328, name: "sodium alginate", unit: "500g", category: "chemicals" },
    { id: 329, name: "sodium arsenate", unit: "100g", category: "chemicals" },
    { id: 330, name: "sodium benzoate", unit: "500g", category: "chemicals" },
    { id: 331, name: "Sodium bisulphite", unit: "500g", category: "chemicals" },
    { id: 332, name: "sodium bicarbonate", unit: "500g", category: "chemicals" },
    { id: 333, name: "Sodium borate", unit: "500g", category: "chemicals" },
    { id: 334, name: "sodium bromide", unit: "500g", category: "chemicals" },
    { id: 335, name: "sodium carbonate", unit: "500g", category: "chemicals" },
    { id: 336, name: "sodium carboxymethyl cellulose", unit: "500g", category: "chemicals" },
    { id: 337, name: "sodium chloride", unit: "500g", category: "chemicals" },
    { id: 338, name: "sodium citrate", unit: "500g", category: "chemicals" },
    { id: 339, name: "sodium cyanide", unit: "500g", category: "chemicals" },
    { id: 340, name: "sodium dichromate", unit: "500g", category: "chemicals" },
    { id: 341, name: "sodium phosphate tribasic", unit: "500g", category: "chemicals" },
    { id: 342, name: "sodium phosphate dibasic", unit: "500g", category: "chemicals" },
    { id: 343, name: "sodium phosphate monobasic", unit: "500g", category: "chemicals" },
    { id: 344, name: "sodium formate", unit: "500g", category: "chemicals" },
    { id: 345, name: "sodium flouride", unit: "500g", category: "chemicals" },
    { id: 346, name: "sodium hexameta phosphate", unit: "500g", category: "chemicals" },
    { id: 347, name: "sodium hydroxide flakes", unit: "500g", category: "chemicals" },
    { id: 348, name: "sodium hydroxide pellets", unit: "Kg", category: "chemicals" },
    { id: 349, name: "sodium hypochlorite", unit: "Liter", category: "chemicals" },
    { id: 350, name: "sodium lauryl sulphate", unit: "Kg", category: "chemicals" },
    { id: 351, name: "sodium lauryl ether sulphate (texapon)", unit: "Kg", category: "chemicals" },
    { id: 352, name: "sodium phthalate", unit: "500g", category: "chemicals" },
    { id: 353, name: "sodium metabisulphite", unit: "500g", category: "chemicals" },
    { id: 354, name: "sodium molybdate", unit: "250g", category: "chemicals" },
    { id: 355, name: "sodium nitrate", unit: "500g", category: "chemicals" },
    { id: 356, name: "sodium nitrite", unit: "500g", category: "chemicals" },
    { id: 357, name: "sodium nitrophenolate", unit: "500g", category: "chemicals" },
    { id: 358, name: "sodium nitroprusside", unit: "500g", category: "chemicals" },
    { id: 359, name: "sodium oxalate", unit: "500g", category: "chemicals" },
    { id: 360, name: "sodium potassium tartarate", unit: "500g", category: "chemicals" },
    { id: 361, name: "sodium sacchrine", unit: "500g", category: "chemicals" },
    { id: 362, name: "sodium salicylate", unit: "500g", category: "chemicals" },
    { id: 363, name: "sodium sulphate", unit: "Kg", category: "chemicals" },
    { id: 364, name: "sodium sulphide", unit: "Kg", category: "chemicals" },
    { id: 365, name: "sodium sulphite", unit: "Kg", category: "chemicals" },
    { id: 366, name: "sodium tartarate", unit: "Kg", category: "chemicals" },
    { id: 367, name: "sodium thiocyanate", unit: "500g", category: "chemicals" },
    { id: 368, name: "sodium thiosulphate", unit: "Kg", category: "chemicals" },
    { id: 369, name: "sodium tungstate", unit: "100g", category: "chemicals" },
    { id: 370, name: "soyabean lecithin", unit: "500g", category: "chemicals" },
    { id: 371, name: "span 60", unit: "Kg", category: "chemicals" },
    { id: 372, name: "stannous chloride", unit: "500g", category: "chemicals" },
    { id: 373, name: "starch maize", unit: "500g", category: "chemicals" },
    { id: 374, name: "starch potato", unit: "500g", category: "chemicals" },
    { id: 375, name: "starch rice", unit: "500g", category: "chemicals" },
    { id: 376, name: "stearic acid", unit: "500g", category: "chemicals" },
    { id: 377, name: "Strontium chloride", unit: "500g", category: "chemicals" },
    { id: 378, name: "strychnine", unit: "25g", category: "chemicals" },
    { id: 379, name: "stryptomycin sulphate", unit: "5g", category: "chemicals" },
    { id: 380, name: "sucrose", unit: "Kg", category: "chemicals" },
    { id: 381, name: "sulfosalicylic acid", unit: "500g", category: "chemicals" },
    { id: 382, name: "sulphanilic acid", unit: "500g", category: "chemicals" },
    { id: 383, name: "sulphur", unit: "Kg", category: "chemicals" },
    { id: 384, name: "sulphuric acid 98%", unit: "Liter", category: "chemicals" },
    { id: 385, name: "succinic acid", unit: "500g", category: "chemicals" },
    { id: 386, name: "talc powder", unit: "Kg", category: "chemicals" },
    { id: 387, name: "tannic acid", unit: "500g", category: "chemicals" },
    { id: 388, name: "tartaric acid", unit: "500g", category: "chemicals" },
    { id: 389, name: "Tetrahydrofuran (THF)", unit: "500ml", category: "chemicals" },
    { id: 390, name: "trichloroacetic acid", unit: "500g", category: "chemicals" },
    { id: 391, name: "Triethylamine", unit: "500ml", category: "chemicals" },
    { id: 392, name: "toluene", unit: "Liter", category: "chemicals" },
    { id: 393, name: "turpentine oil", unit: "Liter", category: "chemicals" },
    { id: 394, name: "thiourea", unit: "500g", category: "chemicals" },
    { id: 395, name: "thiobarbituric acid", unit: "25g", category: "chemicals" },
    { id: 396, name: "titanium dioxide", unit: "500g", category: "chemicals" },
    { id: 397, name: "triethanol amine", unit: "Liter", category: "chemicals" },
    { id: 398, name: "Thiopental", unit: "5g", category: "chemicals" },
    { id: 399, name: "tris acid", unit: "100g", category: "chemicals" },
    { id: 400, name: "tris base", unit: "500g", category: "chemicals" },
    { id: 401, name: "trypsin", unit: "100g", category: "chemicals" },
    { id: 402, name: "tween 20", unit: "Liter", category: "chemicals" },
    { id: 403, name: "tween 60", unit: "Liter", category: "chemicals" },
    { id: 404, name: "tween 80", unit: "Liter", category: "chemicals" },
    { id: 405, name: "triethyl orthophosphate", unit: "500ml", category: "chemicals" },
    { id: 406, name: "tryptophane", unit: "100g", category: "chemicals" },
    { id: 407, name: "tyrosine", unit: "100g", category: "chemicals" },
    { id: 408, name: "urea", unit: "500g", category: "chemicals" },
    { id: 409, name: "vaniline", unit: "500g", category: "chemicals" },
    { id: 410, name: "vaseline", unit: "Kg", category: "chemicals" },
    { id: 411, name: "Quinine HCl", unit: "25g", category: "chemicals" },
    { id: 412, name: "vitamin E oil", unit: "500g", category: "chemicals" },
    { id: 413, name: "xanthan gum", unit: "500g", category: "chemicals" },
    { id: 414, name: "Xylene", unit: "Liter", category: "chemicals" },
    { id: 415, name: "yeast extract", unit: "500g", category: "chemicals" },
    { id: 416, name: "zinc acetate", unit: "500g", category: "chemicals" },
    { id: 417, name: "zinc chloride", unit: "500g", category: "chemicals" },
    { id: 418, name: "zinc dust", unit: "500g", category: "chemicals" },
    { id: 419, name: "zinc oxide", unit: "500g", category: "chemicals" },
    { id: 420, name: "zinc sulphate", unit: "500g", category: "chemicals" },
    { id: 421, name: "Zinc nitrate", unit: "500g", category: "chemicals" },

    // From Chemicals 2.xlsx
    { id: 422, name: "Anthrone reagent", unit: "25gm", category: "chemicals" },
    { id: 423, name: "1.2 dichloroether", unit: "Liter", category: "chemicals" },
    { id: 424, name: "1-naphthyl amine", unit: "100gm", category: "chemicals" },
    { id: 425, name: "2 naphthyl amine", unit: "100gm", category: "chemicals" },
    { id: 426, name: "2.2 dipyridyl", unit: "25gm", category: "chemicals" },
    { id: 427, name: "2.4 dichlorophenoxy acetic acid", unit: "25gm", category: "chemicals" },
    { id: 428, name: "3.5 dinitrosalicylic acid", unit: "100gm", category: "chemicals" },
    { id: 429, name: "4 amino anti pyridine", unit: "25gm", category: "chemicals" },
    { id: 430, name: "Anthracene", unit: "250g", category: "chemicals" },
    { id: 431, name: "Alpha Ketoglutarate", unit: "25gm", category: "chemicals" },
    { id: 432, name: "ALPHA naphtyl amine", unit: "100gm", category: "chemicals" },
    { id: 433, name: "ATP", unit: "5gm", category: "chemicals" },
    { id: 434, name: "Atropine", unit: "25 g", category: "chemicals" },
    { id: 435, name: "Barbituric acid", unit: "25gm", category: "chemicals" },
    { id: 436, name: "Benzamide", unit: "500gm", category: "chemicals" },
    { id: 437, name: "BHT", unit: "500gm", category: "chemicals" },
    { id: 438, name: "Blood agar base", unit: "500gm", category: "chemicals" },
    { id: 439, name: "Bromocresol purple", unit: "25gm", category: "chemicals" },
    { id: 440, name: "Bromophenol blue", unit: "25gm", category: "chemicals" },
    { id: 441, name: "Bromothymol blue", unit: "25gm", category: "chemicals" },
    { id: 442, name: "brilliant green bile lactose broth", unit: "500gm", category: "chemicals" },
    { id: 443, name: "bile salt", unit: "100g", category: "chemicals" },
    { id: 444, name: "bis acrylamide", unit: "100g", category: "chemicals" },
    { id: 445, name: "Cerium nitrate", unit: "25gm", category: "chemicals" },
    { id: 446, name: "Chloromphenicol", unit: "5gm", category: "chemicals" },
    { id: 447, name: "chloropromazine", unit: "5g", category: "chemicals" },
    { id: 448, name: "Christensen's media", unit: "500gm", category: "chemicals" },
    { id: 449, name: "colchicine", unit: "1g", category: "chemicals" },
    { id: 450, name: "Collagen type", unit: "25gm", category: "chemicals" },
    { id: 451, name: "Collagenase", unit: "100ml", category: "chemicals" },
    { id: 452, name: "coumaric acid", unit: "100gm", category: "chemicals" },
    { id: 453, name: "DMEM", unit: "500ml", category: "chemicals" },
    { id: 454, name: "DNA", unit: "5gm", category: "chemicals" },
    { id: 455, name: "DNA ladder 100bp", unit: "500micro", category: "chemicals" },
    { id: 456, name: "Dnase agar", unit: "500gm", category: "chemicals" },
    { id: 457, name: "dNBTS", unit: "1ml", category: "chemicals" },
    { id: 458, name: "DPPH", unit: "1gm", category: "chemicals" },
    { id: 459, name: "DTNB", unit: "1GM", category: "chemicals" },
    { id: 460, name: "DTT", unit: "5gm", category: "chemicals" },
    { id: 461, name: "Dulbecco's PBS (1×)", unit: "500ml", category: "chemicals" },
    { id: 462, name: "Eosine methylene blue medium", unit: "500gm", category: "chemicals" },
    { id: 463, name: "Ethidium bromide", unit: "10ml", category: "chemicals" },
    { id: 464, name: "ferric citrate", unit: "500gm", category: "chemicals" },
    { id: 465, name: "ferric sulphate", unit: "500gm", category: "chemicals" },
    { id: 466, name: "Ferrous chloride", unit: "500gm", category: "chemicals" },
    { id: 467, name: "Fetal bovine serum (FPS)", unit: "100ml", category: "chemicals" },
    { id: 468, name: "Ficoll", unit: "5GM", category: "chemicals" },
    { id: 469, name: "Fluid thioglucollate", unit: "500gm", category: "chemicals" },
    { id: 470, name: "Foil reagent", unit: "100ml", category: "chemicals" },
    { id: 471, name: "Gas Pack", unit: "bag", category: "chemicals" },
    { id: 472, name: "Glutathione oxidized", unit: "0.5 g", category: "chemicals" },
    { id: 473, name: "Glutathione reduced", unit: "5g", category: "chemicals" },
    { id: 474, name: "glutatione Reduced", unit: "5gm", category: "chemicals" },
    { id: 475, name: "Glycine", unit: "500gm", category: "chemicals" },
    { id: 476, name: "Guaiacol", unit: "250ml", category: "chemicals" },
    { id: 477, name: "Hydrazine sulphate", unit: "100gm", category: "chemicals" },
    { id: 478, name: "Hydroquinone", unit: "kg", category: "chemicals" },
    { id: 479, name: "Indo reagent(P. Dimethyl aminobenzaldehyde)", unit: "100g", category: "chemicals" },
    { id: 480, name: "Inositol", unit: "25gm", category: "chemicals" },
    { id: 481, name: "iron Solution 1000PPM", unit: "500ml", category: "chemicals" },
    { id: 482, name: "kinetin", unit: "5gm", category: "chemicals" },
    { id: 483, name: "kojic acid", unit: "100g", category: "chemicals" },
    { id: 484, name: "lead Solution 1000PPM", unit: "500ml", category: "chemicals" },
    { id: 485, name: "litmus milk indicator", unit: "500gm", category: "chemicals" },
    { id: 486, name: "Loading dye", unit: "5×1ml", category: "chemicals" },
    { id: 487, name: "Lysozyme", unit: "1g", category: "chemicals" },
    { id: 488, name: "Maleic acid", unit: "100gm", category: "chemicals" },
    { id: 489, name: "Malet extract", unit: "500gm", category: "chemicals" },
    { id: 490, name: "Mangnese chloride", unit: "500gm", category: "chemicals" },
    { id: 491, name: "mannitol salt agar", unit: "500gm", category: "chemicals" },
    { id: 492, name: "Mercuric iodide", unit: "100gm", category: "chemicals" },
    { id: 493, name: "MIO medium", unit: "500gm", category: "chemicals" },
    { id: 494, name: "MTT", unit: "1gm", category: "chemicals" },
    { id: 495, name: "MTT dye", unit: "1gm", category: "chemicals" },
    { id: 496, name: "N acetyl glucose amine", unit: "25gm", category: "chemicals" },
    { id: 497, name: "NADH", unit: "1gm", category: "chemicals" },
    { id: 498, name: "NADHP", unit: "100ml", category: "chemicals" },
    { id: 499, name: "Nitroblue tetrazolium", unit: "1gm", category: "chemicals" },
    { id: 500, name: "NBT", unit: "1g", category: "chemicals" },
    { id: 501, name: "Orcinol", unit: "10gm", category: "chemicals" },
    { id: 502, name: "Papaverin hcl", unit: "25gm", category: "chemicals" },
    { id: 503, name: "phloroglucinol", unit: "25gm", category: "chemicals" },
    { id: 504, name: "Phosphotungstic acid", unit: "25gm", category: "chemicals" },
    { id: 505, name: "Pilocarpine", unit: "5g", category: "chemicals" },
    { id: 506, name: "poneceau red stain", unit: "5 gm", category: "chemicals" },
    { id: 507, name: "Potassium iodate", unit: "100g", category: "chemicals" },
    { id: 508, name: "Potassium tellurite", unit: "5g", category: "chemicals" },
    { id: 509, name: "Proteinase K", unit: "1ml", category: "chemicals" },
    { id: 510, name: "pyruvic acid", unit: "250ml", category: "chemicals" },
    { id: 511, name: "quercetin", unit: "5gm", category: "chemicals" },
    { id: 512, name: "Rennin", unit: "25gm", category: "chemicals" },
    { id: 513, name: "Riboflavin", unit: "25gm", category: "chemicals" },
    { id: 514, name: "RNA", unit: "5gm", category: "chemicals" },
    { id: 515, name: "Rose bengal", unit: "25gm", category: "chemicals" },
    { id: 516, name: "simmons citrate media", unit: "500gm", category: "chemicals" },
    { id: 517, name: "Sodium bromide", unit: "250g", category: "chemicals" },
    { id: 518, name: "sodium cyanide", unit: "250gm", category: "chemicals" },
    { id: 519, name: "Sodium formate", unit: "500 g", category: "chemicals" },
    { id: 520, name: "Sodium orthovanadate", unit: "50gm", category: "chemicals" },
    { id: 521, name: "Sodium persulphate", unit: "500gm", category: "chemicals" },
    { id: 522, name: "steptomycin and penicillin(100×)", unit: "100ml", category: "chemicals" },
    { id: 523, name: "strontium chloride", unit: "100gm", category: "chemicals" },
    { id: 524, name: "strychnine", unit: "25gm", category: "chemicals" },
    { id: 525, name: "Succinamide", unit: "250gm", category: "chemicals" },
    { id: 526, name: "Succinic acid", unit: "500gm", category: "chemicals" },
    { id: 527, name: "sulfanilic acid", unit: "100gm", category: "chemicals" },
    { id: 528, name: "sulfosalicylic acid", unit: "500gm", category: "chemicals" },
    { id: 529, name: "sulphanilamide", unit: "100gm", category: "chemicals" },
    { id: 530, name: "Sulphosalicylic acid", unit: "100gm", category: "chemicals" },
    { id: 531, name: "TBE", unit: "Liter", category: "chemicals" },
    { id: 532, name: "TEMED", unit: "100ml", category: "chemicals" },
    { id: 533, name: "Tetraethyl orthosilicate", unit: "Liter", category: "chemicals" },
    { id: 534, name: "Thiobarbituric acid", unit: "25gm", category: "chemicals" },
    { id: 535, name: "thiopental", unit: "500mg", category: "chemicals" },
    { id: 536, name: "thymol blue", unit: "25gm", category: "chemicals" },
    { id: 537, name: "TMB", unit: "1gm", category: "chemicals" },
    { id: 538, name: "triazol", unit: "100ml", category: "chemicals" },
    { id: 539, name: "triphenyl tetrazoolium chloride", unit: "5gm", category: "chemicals" },
    { id: 540, name: "Tris acetate EDTA", unit: "Liter", category: "chemicals" },
    { id: 541, name: "tris base", unit: "500gm", category: "chemicals" },
    { id: 542, name: "tris HCL", unit: "kg", category: "chemicals" },
    { id: 543, name: "trypsin", unit: "25gm", category: "chemicals" },
    { id: 544, name: "Tryptophan", unit: "25gm", category: "chemicals" },
    { id: 545, name: "XLD agar", unit: "500gm", category: "chemicals" },
    { id: 546, name: "Zeil nelsen", unit: "2×100ml", category: "chemicals" }
  ],
  
  media: [
    { name: "sabroud dextrose broth", unit: "500gm", category: "media" },
    { name: "sorbitol", unit: "500gm", category: "media" },
    { name: "Aeromonas m884", unit: "500gm", category: "media" },
    { name: "urea broth", unit: "500gm", category: "media" },
    { name: "Sabroud dextrose medium", unit: "500gm", category: "media" },
    { name: "Cled medium", unit: "500gm", category: "media" },
    { name: "Eosin methylene blue agar", unit: "500gm", category: "media" },
    { name: "Macconkey agar", unit: "500gm", category: "media" },
    { name: "Macconkey broth", unit: "500gm", category: "media" },
    { name: "Aneraobic", unit: "10 kits", category: "media" },
    { name: "Muller Hinton broth", unit: "500gm", category: "media" },
    { name: "Citrate medium", unit: "500gm", category: "media" },
    { name: "Triple suger iron medium", unit: "500gm", category: "media" },
    { name: "Nutrient agar", unit: "500gm", category: "media" },
    { name: "Mio medium", unit: "500gm", category: "media" },
    { name: "Kovacs", unit: "500gm", category: "media" },
    { name: "oxidase sb strips", unit: "500ml", category: "media" },
    { name: "Aneraobic", unit: "2.5liter", category: "media" },
    { name: "TSb", unit: "500gm", category: "media" },
    { name: "Ss agar", unit: "500gm", category: "media" },
    { name: "Potato dextrose agar", unit: "500gm", category: "media" },
    { name: "Mueller agar", unit: "500gm", category: "media" },
    { name: "M17 broth", unit: "500gm", category: "media" },
    { name: "MRs Agar", unit: "500gm", category: "media" },
    { name: "MRS broth", unit: "500gm", category: "media" },
    { name: "supplement", unit: "5vial", category: "media" },
    { name: "cation adjusted muller hinton broth", unit: "500gm", category: "media" },
    { name: "plat mo91", unit: "500gm", category: "media" },
    { name: "Rose-Bengal M1881", unit: "500gm", category: "media" },
    { name: "chloramphenicol supp", unit: "5vial", category: "media" },
    { name: "mossel enrichment broth media", unit: "500gm", category: "media" },
    { name: "violat red bile glocose agar", unit: "500gm", category: "media" },
    { name: "Mannitol salt agar", unit: "500gm", category: "media" },
    { name: "Bile esculine", unit: "500gm", category: "media" },
    { name: "Lactobacullus MRS broth", unit: "500gm", category: "media" },
    { name: "listeria enrichment broth", unit: "500gm", category: "media" },
    { name: "LB broth", unit: "500gm", category: "media" },
    { name: "LB agar", unit: "500gm", category: "media" },
    { name: "Muller Hinton agar", unit: "500gm", category: "media" },
    { name: "Muller Hinton broth", unit: "500gm", category: "media" },
    { name: "Brain heart infusion broth", unit: "500gm", category: "media" },
    { name: "ENB agar", unit: "500gm", category: "media" },
    { name: "tryptic soy broth", unit: "500gm", category: "media" },
    { name: "vogel johnson agar", unit: "500gm", category: "media" },
    { name: "XLD agar", unit: "500gm", category: "media" }
  ],
  
  glassware: [
    { name: "glass tubes screw cap", unit: "unit", category: "glassware" },
    { name: "Graduated pipette", unit: "10ml", category: "glassware" },
    { name: "Graduated pipette", unit: "1ml", category: "glassware" },
    { name: "Graduated pipette", unit: "2ml", category: "glassware" },
    { name: "Graduated pipette", unit: "5ml", category: "glassware" },
    { name: "inoculating Loop (metal)", unit: "unit", category: "glassware" },
    { name: "inoculating Loop Holders", unit: "unit", category: "glassware" },
    { name: "inverted Durham tubes", unit: "pk500", category: "glassware" },
    { name: "Lap porceiain mortar and pestie", unit: "10cm", category: "glassware" },
    { name: "Laporatory glass thremometer", unit: "110درجه", category: "glassware" },
    { name: "Litmus paper", unit: "blue", category: "glassware" },
    { name: "Litmus paper", unit: "red", category: "glassware" },
    { name: "Litmus paper", unit: "unit", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "unit", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "1.5cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "2cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "3cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "4cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "6cm", category: "glassware" },
    { name: "Measuring cylinder", unit: "10ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "50ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "100ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "250ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "500ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "1Liter", category: "glassware" },
    { name: "Measuring flask", unit: "100ml", category: "glassware" },
    { name: "Measuring flask", unit: "250ml", category: "glassware" },
    { name: "Measuring flask", unit: "500ml", category: "glassware" },
    { name: "Measuring flask", unit: "1Liter", category: "glassware" },
    { name: "Measuring flask", unit: "2Liter", category: "glassware" },
    { name: "Measuring flask", unit: "25ml", category: "glassware" },
    { name: "Measuring flask", unit: "10ml", category: "glassware" },
    { name: "Membrane filter", unit: "علبه100 فلتر", category: "glassware" },
    { name: "Micropipette", unit: "(0.5-10ul)", category: "glassware" },
    { name: "Micropipette", unit: "(10-100ul)", category: "glassware" },
    { name: "Micropipette", unit: "(100-1000ul)", category: "glassware" },
    { name: "Microscope cover slide", unit: "باكت", category: "glassware" },
    { name: "Nassler tubes", unit: "50ml", category: "glassware" },
    { name: "Nylone syringe Filters 0.2um", unit: "pk", category: "glassware" },
    { name: "Ostwald viscometer", unit: "unit", category: "glassware" },
    { name: "Parafilm", unit: "roll", category: "glassware" },
    { name: "3Neck flask", unit: "500ml", category: "glassware" },
    { name: "Beaker glass", unit: "100ml", category: "glassware" },
    { name: "Beaker glass", unit: "1000ml", category: "glassware" },
    { name: "Beaker glass", unit: "2000ml", category: "glassware" },
    { name: "Beaker glass", unit: "250ml", category: "glassware" },
    { name: "Beaker glass", unit: "500ml", category: "glassware" },
    { name: "Beaker low From", unit: "50ml", category: "glassware" },
    { name: "Beaker plastic", unit: "100ML", category: "glassware" },
    { name: "Beaker plastic", unit: "500ml", category: "glassware" },
    { name: "Bulb pipette", unit: "1ml", category: "glassware" },
    { name: "Bulb pipette", unit: "10ml", category: "glassware" },
    { name: "Bulb pipette", unit: "5ml", category: "glassware" },
    { name: "Bunsen Bumer(Gas cartridges)", unit: "unit", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "25ml", category: "glassware" },
    { name: "Burette graduated", unit: "50ml", category: "glassware" },
    { name: "Burette holder", unit: "4 قطع", category: "glassware" },
    { name: "Condenser", unit: "220ml", category: "glassware" },
    { name: "Concial glass flask", unit: "100ml", category: "glassware" },
    { name: "Concial glass flask", unit: "500ml", category: "glassware" },
    { name: "Concial glass flask", unit: "250ml", category: "glassware" },
    { name: "Concial glass flask", unit: "2000ml", category: "glassware" },
    { name: "Concial glass flask", unit: "1000ml", category: "glassware" },
    { name: "Crucible", unit: "40cm", category: "glassware" },
    { name: "Crucible", unit: "30cm", category: "glassware" },
    { name: "Crucible", unit: "10ml", category: "glassware" },
    { name: "Crucible", unit: "50ml", category: "glassware" },
    { name: "Crucible", unit: "150ml", category: "glassware" },
    { name: "Crucible sintered glass (G4)", unit: "unit", category: "glassware" },
    { name: "Cuvette glass 3cm", unit: "unit", category: "glassware" },
    { name: "Cuvette glass 5cm", unit: "unit", category: "glassware" },
    { name: "Cuvette glass 1cm", unit: "unit", category: "glassware" },
    { name: "Dropping funnel", unit: "10cm", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "pk500/0.5ml", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "pk500/1.5ml", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "pk500/2ml", category: "glassware" },
    { name: "Falcon tupe", unit: "15ml", category: "glassware" },
    { name: "Falcon tupe", unit: "50ml", category: "glassware" },
    { name: "Filter paper", unit: "11cm", category: "glassware" },
    { name: "Filter paper", unit: "12.5cm", category: "glassware" },
    { name: "Filter paper", unit: "15 cm", category: "glassware" },
    { name: "Filter paper", unit: "24", category: "glassware" },
    { name: "Filter paper", unit: "18cm", category: "glassware" },
    { name: "Filter paper", unit: "9cm", category: "glassware" },
    { name: "forceps", unit: "unit", category: "glassware" },
    { name: "funels glass", unit: "50mm", category: "glassware" },
    { name: "funels glass", unit: "75mm", category: "glassware" },
    { name: "funels glass", unit: "100mm", category: "glassware" },
    { name: "glass bottel screw cap", unit: "100ml", category: "glassware" },
    { name: "glass bottel screw cap", unit: "250ml", category: "glassware" },
    { name: "Pasteur polyethylene pipettes", unit: "Plastic", category: "glassware" },
    { name: "Petri Dish", unit: "9cm", category: "glassware" },
    { name: "pipette filler", unit: "10ml green", category: "glassware" },
    { name: "pipette glass", unit: "10ml", category: "glassware" },
    { name: "pipette glass", unit: "5ml", category: "glassware" },
    { name: "Plastic dropper", unit: "unit", category: "glassware" },
    { name: "Porcelin crucible with lid", unit: "50ml", category: "glassware" },
    { name: "Porcelin dish", unit: "100ml", category: "glassware" },
    { name: "Round Bottom Quick fit flask", unit: "250ml", category: "glassware" },
    { name: "spatula", unit: "unit", category: "glassware" },
    { name: "Stainless steel spatula", unit: "unit", category: "glassware" },
    { name: "Stalagmometer", unit: "unit", category: "glassware" },
    { name: "Test tube clamp", unit: "unit", category: "glassware" },
    { name: "Test tube Rack", unit: "unit", category: "glassware" },
    { name: "tast tubes", unit: "unit", category: "glassware" },
    { name: "Tips Rack", unit: "Blue", category: "glassware" },
    { name: "Tips Rack", unit: "yellow", category: "glassware" },
    { name: "Wash bottel", unit: "250ml", category: "glassware" },
    { name: "Wash bottel", unit: "500ml", category: "glassware" },
    { name: "Wash glass", unit: "unit", category: "glassware" },
    { name: "Water condenser", unit: "unit", category: "glassware" },
    { name: "Porcelain morter", unit: "10cm", category: "glassware" },
    { name: "Porcelain morter", unit: "13cm", category: "glassware" },
    { name: "Porcelain morter", unit: "16cm", category: "glassware" },
    { name: "Conical flask with stopper", unit: "500ml", category: "glassware" },
    { name: "Conical flask with stopper", unit: "1Liter", category: "glassware" },
    { name: "Separating funnel", unit: "250ml", category: "glassware" },
    { name: "Separating funnel", unit: "500ml", category: "glassware" },
    { name: "glass filter funnel", unit: "100mm", category: "glassware" },
    { name: "Hct tubes", unit: "heparinized", category: "glassware" }
  ]
};

// Fixed data structure
const productCategories = {
    chemicals: productData.chemicals,
    media: productData.media,
    glassware: productData.glassware
};

let currentProducts = [];

function initializeProducts() {
    console.log('Initializing products...');
    
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Setup category event listeners
    setupCategoryListeners();
    
    // Load initial products
    handleCategoryChange(category || 'all');
}

function setupCategoryListeners() {
    // For dropdown
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            handleCategoryChange(e.target.value);
        });
    }
    
    // For category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            handleCategoryChange(category);
        });
    });
}

function handleCategoryChange(category) {
    console.log('Changing category to:', category);
    
    // Update products list
    if (category === 'all') {
        currentProducts = [
            ...productData.chemicals,
            ...productData.media,
            ...productData.glassware
        ];
    } else {
        currentProducts = productData[category] || [];
    }
    
    // Update UI
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    
    updateActivePill(category);
    renderProducts(currentProducts);
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('category', category);
    window.history.pushState({}, '', url);
}

function updateActivePill(category) {
    document.querySelectorAll('.category-pill').forEach(pill => {
        if (pill.dataset.category === category) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
}

// Update render function to include more product details
function renderProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="col-span-full text-center py-8 text-gray-500">No products found</div>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-semibold text-primary">${product.name}</h3>
                <span class="text-sm bg-gray-100 px-2 py-1 rounded">${product.unit}</span>
            </div>
            <div class="mb-4">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}">
                    ${product.category}
                </span>
            </div>
            <button class="cart-btn w-full bg-white text-black border border-gray-300 hover:bg-gray-50 transition-colors py-2 px-4 rounded text-center">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Helper function for category colors
function getCategoryColor(category) {
    const colors = {
        chemicals: 'bg-blue-100 text-blue-800',
        media: 'bg-green-100 text-green-800',
        glassware: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
}

// Improved search functionality
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter');
    const category = categoryFilter?.value || 'all';
    
    showSearchSuggestions(searchTerm);
    
    return currentProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.unit.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
}

function showSearchSuggestions(searchTerm) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!suggestionsContainer || !searchTerm) {
        suggestionsContainer?.classList.add('hidden');
        return;
    }

    const matches = currentProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5); // Limit to 5 suggestions

    if (matches.length > 0) {
        suggestionsContainer.innerHTML = matches.map(product => `
            <div class="suggestion-item p-3 hover:bg-gray-100 cursor-pointer">
                <div class="font-medium">${product.name}</div>
                <div class="flex justify-between mt-1">
                    <span class="text-sm text-gray-500">${product.category}</span>
                    <span class="text-sm bg-gray-100 px-2 py-1 rounded">${product.unit}</span>
                </div>
            </div>
        `).join('');
        suggestionsContainer.classList.remove('hidden');
    } else {
        suggestionsContainer.innerHTML = `
            <div class="p-3 text-gray-500">No matches found</div>
        `;
        suggestionsContainer.classList.remove('hidden');
    }
}

// Sorting functionality
const sortOptions = {
    'name': (a, b) => a.name.localeCompare(b.name),
    'name-desc': (a, b) => b.name.localeCompare(a.name),
    'price': (a, b) => parseFloat(a.price) - parseFloat(b.price),
    'price-desc': (a, b) => parseFloat(b.price) - parseFloat(a.price),
};

function sortProducts(products, sortType) {
    return [...products].sort(sortOptions[sortType] || ((a, b) => 0));
}

function filterAndSortProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortType = document.getElementById('sortFilter').value;
    
    let products = category === 'all' 
        ? Object.values(productData).flat()
        : productData[category] || [];
        
    const sortedProducts = sortProducts(products, sortType);
    renderProducts(sortedProducts);
}

// Event listeners for sorting
document.getElementById('sortFilter').addEventListener('change', filterAndSortProducts);
document.getElementById('categoryFilter').addEventListener('change', filterAndSortProducts);

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    initializeProducts();

    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    const searchIcon = document.getElementById('searchIcon');

    if (searchInput) {
        // Input event for live search
        searchInput.addEventListener('input', () => {
            const filtered = filterProducts();
            renderProducts(filtered);
        });

        // Handle suggestion clicks
        suggestionsContainer?.addEventListener('click', (e) => {
            const suggestionItem = e.target.closest('.suggestion-item');
            if (suggestionItem) {
                const productName = suggestionItem.querySelector('.font-medium').textContent;
                searchInput.value = productName;
                suggestionsContainer.classList.add('hidden');
                renderProducts(filterProducts());
            }
        });

        // Handle search icon click
        searchIcon?.addEventListener('click', () => {
            renderProducts(filterProducts());
        });

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsContainer?.contains(e.target)) {
                suggestionsContainer?.classList.add('hidden');
            }
        });
    }
});
