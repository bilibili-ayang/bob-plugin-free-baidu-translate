const languages = [
	["auto"],
	["zh-Hans", "zh"],
	["zh-Hant", "cht"],
	["yue"],
	["wyw"],
	["en"],
	["ja", "jp"],
	["th"],
	["fr", "fra"],
	["es", "spa"],
	["ko", "kor"],
	["tr"],
	["vi", "vie"],
	["ms"],
	["de"],
	["ru"],
	["ir"],
	["ar", "ara"],
	["et", "est"],
	["be"],
	["bg", "bul"],
	["hi"],
	["is"],
	["pl"],
	["fa"],
	["da", "dan"],
	["tl"],
	["fi", "fin"],
	["nl"],
	["ca"],
	["cs"],
	["hr"],
	["lv"],
	["lt"],
	["ro", "rom"],
	["af"],
	["no"],
	["pt"],
	["sv", "swe"],
	["sr"],
	["eo"],
	["sk"],
	["sl", "slo"],
	["sw"],
	["uk"],
	["he", "iw"],
	["el"],
	["hu"],
	["hy"],
	["it"],
	["id"],
	["sq"],
	["am"],
	["as"],
	["az"],
	["eu"],
	["bn"],
	["bs"],
	["gl"],
	["ka"],
	["gu"],
	["ha"],
	["ig"],
	["iu"],
	["ga"],
	["zu"],
	["kn"],
	["kk"],
	["ky"],
	["lb"],
	["mk"],
	["mt"],
	["mi"],
	["mr"],
	["ne"],
	["or"],
	["pa"],
	["qu"],
	["tn"],
	["si"],
	["ta"],
	["tt"],
	["te"],
	["ur"],
	["uz"],
	["cy"],
	["yo"],
].map((language) =>
	language.length > 1 ? language : [language[0], language[0]]
);

exports.languages = languages;
