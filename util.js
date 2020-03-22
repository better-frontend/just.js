"use strict";

export const assert = (message, ...verifiers) => {
	for (const verifier of verifiers)
		if (!verifier())
			throw message;
};

export const ensureArray = value =>
	(value !== null && value !== undefined && Symbol.iterator in value)
		? Array.from(value)
		: ensureArray([value].flat());

export const safeToString = value =>
	"" + value.toString();

export const throwIfNotOk = response => {
	if (!response.ok)
		throw response;

	return response;
};