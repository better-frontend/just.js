"use strict";

export const assert = (message, ...verifiers) => {
	for (const verifier of verifiers)
		if (!verifier())
			throw message;
};

export const ensureArray = value =>
	(value[Symbol.iterator])
		? Array.from(value)
		: ensureArray([value].flat());

export const safeToString = value =>
	"" + value.toString();