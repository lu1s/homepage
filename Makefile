BUILD_ID := $(shell gcloud builds list | head -2 | tail -1 | awk '{print $$1}')

.PHONY: build-log

build-log:
	gcloud builds log --stream $(BUILD_ID)
