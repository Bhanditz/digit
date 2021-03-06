var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("text-area-test", function(testPage) {

    describe("test/text-area/text-area-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Textarea", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.templateObjects.textArea).toBeDefined();
                });
                var textArea, defaultValue, defaultRequired, defaultMaxLength;
                beforeEach(function() {
                    if (!textArea) {
                        textArea = testPage.test.templateObjects.textArea;
                        //keep default values
                        defaultValue = textArea.value;
                        defaultRequired = textArea.required;
                        defaultMaxLength = textArea.maxLength;
                    }
                    //restore default values
                    textArea.value = defaultValue;
                    textArea.required = defaultRequired;
                    textArea.maxLength = defaultMaxLength;
                });
                xdescribe("property", function() {
                    describe("value", function() {
                        it("should have correct default", function() {
                            expect(defaultValue).toEqual("");
                        });
                        it("can be set", function() {
                            textArea.value = "a string";
                            expect(textArea.value).toEqual("a string");
                        });
                    });
                    describe("required", function() {
                        it("should have correct default", function() {
                            expect(defaultRequired).toEqual(false);
                        });
                        it("can be set", function() {
                            textArea.required = true;
                            expect(textArea.required).toEqual(true);
                        });
                    });
                    describe("maxLength", function() {
                        it("should have correct default", function() {
                            expect(defaultMaxLength).toEqual(-1);
                        });
                        it("can be set", function() {
                            textArea.maxLength = 400;
                            expect(textArea.maxLength).toEqual(400);
                        });
                    });
                });
            });
            xdescribe("initialization attributes", function () {
                var textArea, defaultValue, defaultRequired, defaultMaxLength;
                beforeEach(function() {
                    if (!textArea) {
                        textArea = testPage.test.templateObjects.textAreaWithAttributes;
                        //keep default values
                        defaultValue = textArea.value;
                        defaultRequired = textArea.required;
                        defaultMaxLength = textArea.maxLength;
                    }
                    //restore default values
                    textArea.value = defaultValue;
                    textArea.required = defaultRequired;
                    textArea.maxLength = defaultMaxLength;
                });
                it("should have expected value property value", function () {
                    expect(textArea.value).toEqual("a string");
                });
                it("should have expected required property value", function () {
                    expect(textArea.required).toEqual(true);
                });
                it("should have expected maxLength property value", function () {
                    expect(textArea.maxLength).toEqual(150);
                });
            });
        });
    });
});
